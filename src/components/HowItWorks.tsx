import { Upload, Scan, Brain, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Snap or upload your homework photo",
    color: "primary",
    accentColor: "border-l-primary",
  },
  {
    icon: Scan,
    title: "Analyze",
    description: "AI vision extracts text, diagrams, and identifies subjects",
    color: "secondary",
    accentColor: "border-l-secondary",
  },
  {
    icon: Brain,
    title: "Solve",
    description: "Get detailed step-by-step solutions with explanations",
    color: "turquoise",
    accentColor: "border-l-turquoise",
  },
  {
    icon: GraduationCap,
    title: "Learn",
    description: "Review solutions, understand concepts, excel in your studies",
    color: "accent",
    accentColor: "border-l-accent",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            From Photo to Solution in{" "}
            <span className="text-primary">Seconds</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our intelligent system makes homework help seamless and instant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`bg-muted border-l-4 ${step.accentColor} rounded-lg p-6 hover:bg-card transition-all hover:shadow-lg hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-${step.color}/10 border border-${step.color}/20`}>
                    <Icon className={`w-8 h-8 text-${step.color}`} />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl font-black text-muted-foreground/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process flow line */}
        <div className="hidden lg:flex justify-center items-center mt-12 gap-4 animate-fade-in">
          <div className="h-1 w-full max-w-4xl bg-gradient-to-r from-primary via-secondary via-turquoise to-accent rounded-full opacity-30" />
        </div>
      </div>
    </section>
  );
};
