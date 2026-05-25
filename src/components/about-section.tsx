import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import { 
  Award,
  BookOpen,
  Target
} from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide excellent project coordination and financial management services while pursuing advanced expertise in data analytics."
    },
    {
      icon: Award,
      title: "Experience",
      description: "Hands-on experience with Tally ERP 9, GST compliance, accounting operations, and MS Excel for financial analysis."
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Continuously expanding knowledge in data analysis, Power BI, and advanced business analytics."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            About Me
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">
              Passionate About Finance & Project Management
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I&apos;m a dedicated Project Assistant and Accountant with a strong foundation in financial management 
            and project coordination. My journey in accounting and finance is driven by the desire to support 
            organizational growth through accurate financial reporting and efficient project execution.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <MagicCard
                  key={highlight.title}
                  className="cursor-pointer border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm"
                  gradientColor="#3b82f610"
                >
                  <div className="p-6 space-y-3 text-center">
                    <Icon className="h-8 w-8 text-primary mx-auto" />
                    <h3 className="font-semibold">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </MagicCard>
              );
            })}
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <Card className="relative overflow-hidden border border-muted/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm">
              <BorderBeam 
                size={120} 
                duration={10} 
                delay={2}
                colorFrom="#f59e0b" 
                colorTo="#ef4444"
                borderWidth={1}
                reverse={true}
              />
              <CardHeader>
                <CardTitle className="text-2xl">My Journey</CardTitle>
                <CardDescription>
                  From academic excellence to professional expertise in accounting and finance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    My passion for financial management and project coordination began during my B.Com studies 
                    at C.D. Jain College of Commerce. This led me to pursue advanced education with an M.Com degree 
                    while simultaneously gaining practical experience in the accounting and finance field.
                  </p>
                  
                  <p>
                    I specialize in accounting operations, GST filing and compliance, financial statement preparation, 
                    bank reconciliation, and project coordination. My approach combines technical expertise in Tally ERP 9, 
                    advanced Excel skills, and a focus on accuracy and organizational efficiency.
                  </p>
                  
                  <p>
                    When I&apos;m not managing financial records or coordinating projects, you&apos;ll find me pursuing 
                    certifications in Power BI and advanced data analysis, reading business articles, or exploring new 
                    technologies in financial analytics.
                  </p>
                </div>

                {/* Key Technologies */}
                <div className="pt-4 border-t border-muted/20">
                  <h4 className="font-medium mb-3 text-sm">Key Skills & Tools I Work With:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Tally ERP 9", "Tally Prime", "MS Excel", "GST Filing", "Financial Analysis", "Power BI", "TDS Calculation", "Bank Reconciliation", "Data Analysis"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
