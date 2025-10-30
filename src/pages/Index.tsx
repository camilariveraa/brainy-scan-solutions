import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { UploadZone } from "@/components/UploadZone";
import { SampleSolution } from "@/components/SampleSolution";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <HowItWorks />
      <Features />
      <UploadZone />
      <SampleSolution />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
