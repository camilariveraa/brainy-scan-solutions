import { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleSolution = {
  question: "Solve the quadratic equation: 2x² + 5x - 3 = 0",
  subject: "Algebra",
  difficulty: "Medium",
  steps: [
    {
      number: 1,
      title: "Identify coefficients",
      content: "In the equation 2x² + 5x - 3 = 0, we have:\na = 2, b = 5, c = -3",
      color: "primary",
    },
    {
      number: 2,
      title: "Apply quadratic formula",
      content: "Use x = (-b ± √(b² - 4ac)) / (2a)\nSubstitute: x = (-5 ± √(25 + 24)) / 4",
      color: "cobalt",
    },
    {
      number: 3,
      title: "Simplify",
      content: "x = (-5 ± √49) / 4\nx = (-5 ± 7) / 4",
      color: "secondary",
    },
    {
      number: 4,
      title: "Calculate both solutions",
      content: "x₁ = (-5 + 7) / 4 = 0.5\nx₂ = (-5 - 7) / 4 = -3",
      color: "turquoise",
    },
  ],
  answer: "x = 0.5 or x = -3",
  explanation: "The quadratic formula works because it's derived from completing the square on the general form ax² + bx + c = 0. The discriminant (b² - 4ac) determines if we have real solutions: positive discriminant means two real solutions, zero means one solution, and negative means no real solutions.",
};

export const SampleSolution = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            See the <span className="text-accent">Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions with detailed explanations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg animate-fade-in-up">
            {/* Question Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-destructive/10 text-destructive border border-destructive/20">
                  Q1
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20">
                  {sampleSolution.subject}
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i <= 2 ? 'bg-accent' : 'bg-muted'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs text-muted-foreground">
                    {sampleSolution.difficulty}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">
                {sampleSolution.question}
              </h3>
            </div>

            {/* Solution Steps */}
            <div className="space-y-4 mb-6">
              {sampleSolution.steps.map((step) => (
                <div
                  key={step.number}
                  className={`border-l-4 border-${step.color} bg-muted rounded-r-lg overflow-hidden transition-all hover:shadow-md`}
                >
                  <button
                    onClick={() =>
                      setExpandedStep(
                        expandedStep === step.number ? null : step.number
                      )
                    }
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-card transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-${step.color}/10 border border-${step.color}/20`}>
                        <span className={`text-lg font-bold text-${step.color}`}>
                          {step.number}
                        </span>
                      </div>
                      <span className="font-semibold text-lg">
                        {step.title}
                      </span>
                    </div>
                    {expandedStep === step.number ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>

                  {expandedStep === step.number && (
                    <div className="px-4 pb-4 animate-accordion-down">
                      <div className="pl-14 text-muted-foreground whitespace-pre-line font-mono text-sm bg-background rounded p-4">
                        {step.content}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Final Answer */}
            <div className="bg-turquoise/10 border border-turquoise/20 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-turquoise mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Final Answer</h4>
                  <p className="text-xl font-mono font-semibold">
                    {sampleSolution.answer}
                  </p>
                </div>
              </div>
            </div>

            {/* Why This Works */}
            <div className="border-t border-border pt-6">
              <Button
                variant="ghost"
                onClick={() => setShowExplanation(!showExplanation)}
                className="w-full justify-between hover:bg-muted"
              >
                <span className="font-semibold text-lg">
                  Why This Works
                </span>
                {showExplanation ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </Button>

              {showExplanation && (
                <div className="mt-4 p-4 bg-muted rounded-lg text-muted-foreground leading-relaxed animate-accordion-down">
                  {sampleSolution.explanation}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
