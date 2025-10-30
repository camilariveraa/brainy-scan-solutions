import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Link as LinkIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Hero = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!imageUrl.trim()) {
      toast.error("Please enter an image URL");
      return;
    }

    // Validate URL format
    try {
      new URL(imageUrl);
    } catch {
      toast.error("Please enter a valid URL");
      return;
    }

    setPreviewUrl(imageUrl);
    setIsProcessing(true);

    // Simulate processing stages
    const stages = [
      { message: "Extracting text...", duration: 800 },
      { message: "Identifying subject...", duration: 600 },
      { message: "Parsing questions...", duration: 700 },
      { message: "Generating solutions...", duration: 900 },
    ];

    for (const stage of stages) {
      toast.loading(stage.message, { duration: stage.duration });
      await new Promise(resolve => setTimeout(resolve, stage.duration));
    }

    setIsProcessing(false);
    toast.success("Solution ready! (Demo mode - connect backend to see real results)");
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

          {/* Right upload interface */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card border border-border rounded-lg p-8 shadow-glow">
              <h3 className="text-2xl font-bold mb-6">Upload Homework Image</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="imageUrl" className="block text-sm font-medium mb-2">
                    Image URL
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="imageUrl"
                        type="url"
                        placeholder="https://example.com/homework.jpg"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="pl-10"
                        disabled={isProcessing}
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Paste the URL of your homework image
                  </p>
                </div>

                {previewUrl && (
                  <div className="rounded-lg overflow-hidden border border-border">
                    <img
                      src={previewUrl}
                      alt="Homework preview"
                      className="w-full h-auto max-h-96 object-contain bg-muted"
                      onError={() => {
                        toast.error("Failed to load image. Please check the URL.");
                        setPreviewUrl(null);
                      }}
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isProcessing || !imageUrl.trim()}
                  size="lg"
                  className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold text-lg py-6 shadow-glow-accent"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing Homework...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Solve Homework
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
