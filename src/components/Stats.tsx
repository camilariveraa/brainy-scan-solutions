import { TrendingUp, Target, BookOpen, Clock } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "500K+",
    label: "Homework Problems Solved",
    color: "primary",
  },
  {
    icon: Target,
    value: "98%",
    label: "Accuracy Rate",
    color: "turquoise",
  },
  {
    icon: BookOpen,
    value: "50+",
    label: "Subjects Covered",
    color: "secondary",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Instant Solutions",
    color: "accent",
  },
];

export const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Trusted by Students{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-glow-primary hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full bg-${stat.color}/10 border border-${stat.color}/20 mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${stat.color}`} />
                  </div>

                  <div className={`text-5xl font-black mb-3 bg-gradient-to-br from-${stat.color} to-accent bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>

                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
