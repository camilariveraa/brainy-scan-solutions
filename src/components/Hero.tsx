import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Sparkles } from "lucide-react";
import heroAnalysis from "@/assets/hero-analysis.png";

export const Hero = () => {
  const scrollToUpload = () => {
    document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Powered by Advanced AI Vision</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6 tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Homework Solved.
              </span>
              <br />
              <span className="text-foreground">Knowledge Gained.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Upload any homework photo. Get instant, step-by-step solutions powered by advanced AI vision.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold text-lg px-8 py-6 shadow-glow-accent transition-all hover:scale-105"
                onClick={scrollToUpload}
              >
                <Camera className="mr-2 h-5 w-5" />
                Solve My Homework
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cobalt text-cobalt hover:bg-cobalt hover:text-cobalt-foreground font-semibold text-lg px-8 py-6 transition-all hover:scale-105"
                onClick={scrollToHowItWorks}
              >
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-turquoise animate-glow-pulse" />
                <span>500K+ Solutions Generated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-turquoise animate-glow-pulse" />
                <span>98% Accuracy Rate</span>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-lg overflow-hidden border border-primary/20 shadow-glow">
              <img 
                src={heroAnalysis} 
                alt="AI analyzing homework with scan effects" 
                className="w-full h-auto"
              />
              {/* Scanning line effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none">
                <div className="absolute inset-x-0 h-1 bg-primary/50 animate-scan-line shadow-glow" />
              </div>
            </div>

            {/* Floating info cards */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg animate-float backdrop-blur-sm">
              <div className="text-xs text-muted-foreground mb-1">Processing Speed</div>
              <div className="text-2xl font-bold text-turquoise">2.3s</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-lg animate-float backdrop-blur-sm" style={{ animationDelay: '1s' }}>
              <div className="text-xs text-muted-foreground mb-1">AI Confidence</div>
              <div className="text-2xl font-bold text-secondary">99.2%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
