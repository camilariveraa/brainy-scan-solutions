import { useState, useRef } from "react";
import { Upload, FileImage, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import exampleMath from "@/assets/example-math.jpg";
import exampleScience from "@/assets/example-science.jpg";
import exampleHistory from "@/assets/example-history.jpg";

export const UploadZone = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file (JPG, PNG, HEIC)");
      return;
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size must be less than 10MB");
      return;
    }

    setUploadedFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    toast.success("Homework uploaded successfully!");
  };

  const handleProcess = async () => {
    if (!uploadedFile) return;

    setIsProcessing(true);
    
    // Simulate processing stages
    const stages = [
      { message: "Extracting text...", duration: 800, color: "text-primary" },
      { message: "Identifying subject...", duration: 600, color: "text-secondary" },
      { message: "Parsing questions...", duration: 700, color: "text-cobalt" },
      { message: "Generating solutions...", duration: 900, color: "text-turquoise" },
    ];

    for (const stage of stages) {
      toast.loading(stage.message, { duration: stage.duration });
      await new Promise(resolve => setTimeout(resolve, stage.duration));
    }

    setIsProcessing(false);
    toast.success("Solution ready! (Demo mode - connect backend to see real results)");
  };

  const clearUpload = () => {
    setUploadedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="upload-section" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            Try It <span className="text-destructive">Now</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Upload your homework and see the magic happen
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Upload Zone */}
          {!uploadedFile ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative border-2 border-dashed rounded-lg p-12 transition-all cursor-pointer animate-fade-in-up ${
                isDragging
                  ? 'border-primary bg-primary/5 scale-105'
                  : 'border-primary/30 bg-muted hover:border-primary/50 hover:bg-card'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />

              <div className="text-center">
                <div className="inline-flex p-6 rounded-full bg-gradient-secondary mb-6">
                  <Upload className="w-16 h-16 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  Drop homework photo here or click to browse
                </h3>
                <p className="text-muted-foreground mb-8">
                  Supports JPG, PNG, HEIC • Max 10MB
                </p>

                <div className="flex justify-center gap-2 text-sm text-muted-foreground">
                  <FileImage className="w-4 h-4" />
                  <span>Drag and drop supported</span>
                </div>
              </div>
            </div>
          ) : (
            // Preview and Process
            <div className="bg-card border border-border rounded-lg p-8 animate-scale-in">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Process</h3>
                  <p className="text-muted-foreground">{uploadedFile.name}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearUpload}
                  className="hover:bg-destructive/10"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {previewUrl && (
                <div className="mb-6 rounded-lg overflow-hidden border border-border">
                  <img
                    src={previewUrl}
                    alt="Uploaded homework"
                    className="w-full h-auto max-h-96 object-contain bg-muted"
                  />
                </div>
              )}

              <Button
                onClick={handleProcess}
                disabled={isProcessing}
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
                    <Brain className="mr-2 h-5 w-5" />
                    Generate Solution
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Example Photos */}
          <div className="mt-12">
            <h4 className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
              Example Homework Types
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {[
                { src: exampleMath, label: "Mathematics" },
                { src: exampleScience, label: "Science" },
                { src: exampleHistory, label: "History" },
              ].map((example, i) => (
                <div
                  key={example.label}
                  className="group relative rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <img
                    src={example.src}
                    alt={example.label}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-xs font-semibold bg-primary/90 text-primary-foreground px-2 py-1 rounded">
                      {example.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Missing import
import { Brain } from "lucide-react";
