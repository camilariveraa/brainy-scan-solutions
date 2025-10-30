import { Eye, BookOpen, ListOrdered, Lightbulb, Gauge, Library } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Vision AI Recognition",
    description: "Advanced OCR extracts text, equations, and diagrams with precision",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: BookOpen,
    title: "Multi-Subject Support",
    description: "Math, science, history, languages, and more—all subjects covered",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
  {
    icon: ListOrdered,
    title: "Step-by-Step Solutions",
    description: "Detailed breakdowns with reasoning for every step of the process",
    iconColor: "text-destructive",
    iconBg: "bg-destructive/10",
    borderColor: "border-destructive/20",
  },
  {
    icon: Lightbulb,
    title: "Concept Explanations",
    description: "Not just answers—deep explanations to help you truly understand",
    iconColor: "text-turquoise",
    iconBg: "bg-turquoise/10",
    borderColor: "border-turquoise/20",
  },
  {
    icon: Gauge,
    title: "Difficulty Assessment",
    description: "Automatic difficulty rating and estimated completion time",
    iconColor: "text-cobalt",
    iconBg: "bg-cobalt/10",
    borderColor: "border-cobalt/20",
  },
  {
    icon: Library,
    title: "Study Resources",
    description: "Curated learning materials, videos, and references for each topic",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    borderColor: "border-accent/20",
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            Intelligent Homework{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Assistance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by cutting-edge AI technology to help you learn better
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`bg-card border ${feature.borderColor} rounded-lg p-8 hover:shadow-glow-primary transition-all hover:scale-105 hover:border-opacity-50 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-lg ${feature.iconBg} mb-6`}>
                  <Icon className={`w-10 h-10 ${feature.iconColor}`} />
                </div>

                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
