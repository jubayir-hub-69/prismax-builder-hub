"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  demoUrl: string;
  githubUrl: string;
  discordHandle: string;
  walletAddress: string;
  score: number;
  stats: { views: string; likes: string; stars: number };
};

type AppContextType = {
  user: string | null;
  login: () => void;
  logout: () => void;
  projects: Project[];
  addProject: (project: Project) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedUser = localStorage.getItem("prismax_user");
    if (storedUser) setUser(storedUser);

    const storedProjects = localStorage.getItem("prismax_projects");
    if (storedProjects) {
      try {
        setProjects(JSON.parse(storedProjects));
      } catch (e) {}
    }
  }, []);

  const login = () => {
    const username = window.prompt("Please submit your Discord username");
    if (username && username.trim()) {
      const formatted = username.startsWith("@") ? username : `@${username}`;
      setUser(formatted);
      localStorage.setItem("prismax_user", formatted);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("prismax_user");
  };

  const addProject = (project: Project) => {
    const newProjects = [project, ...projects];
    setProjects(newProjects);
    localStorage.setItem("prismax_projects", JSON.stringify(newProjects));
  };

  if (!isClient) return null; // Avoid hydration mismatch

  return (
    <AppContext.Provider value={{ user, login, logout, projects, addProject }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
