import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExploreSection from "@/components/ExploreSection";
import GroundbreakerSection from "@/components/GroundbreakerSection";
import SubmitSection from "@/components/SubmitSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-cream selection:text-background">
      <Header />
      
      <main className="flex-1 flex flex-col pt-20">
        <HeroSection />
        <ExploreSection />
        <GroundbreakerSection />
        <SubmitSection />
      </main>
      
      <Footer />
    </div>
  );
}
