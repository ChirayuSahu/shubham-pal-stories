import { useEffect, useRef } from "react";
import { ExternalLink, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "CEO of Vena Solutions & Innogent Technologies",
    tags: ["Current Client", "YouTube", "Long-Form"],
    desc: "Editing high-impact video content for a tech CEO — combining professional polish with story-driven narratives to build authority and audience trust.",
  },
  {
    title: "Personal YouTube — Viral Videos",
    tags: ["YouTube", "Viral", "Short-Form"],
    desc: "Created multiple viral videos on my personal YouTube channel, leveraging trend analysis, emotional storytelling, and optimized editing techniques for maximum reach.",
  },
  {
    title: "DIFFR Instagram — Viral Edits",
    tags: ["Instagram", "Reels", "Motion Graphics"],
    desc: "Produced viral Instagram edits for DIFFR, blending fast-paced editing with kinetic typography and graphic design to drive engagement and shares.",
  },
];

const PortfolioSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("animate-fade-up");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-gradient-section opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          Featured <span className="text-gradient-purple">Work</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          A selection of projects that showcase storytelling, creativity, and results.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((p) => (
            <Card
              key={p.title}
              className="group bg-card/50 border-border/40 hover:border-primary/40 transition-all duration-300 hover:glow-purple-sm overflow-hidden"
            >
              {/* Video placeholder */}
              <div className="aspect-video bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Play className="h-6 w-6 text-primary ml-1" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <CardContent className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-display text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
