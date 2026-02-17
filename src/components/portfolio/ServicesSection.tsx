import { useEffect, useRef } from "react";
import { Film, Mic, Play, Image, TrendingUp, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Film,
    title: "Viral Reel Editing",
    desc: "Reels crafted for maximum reach using context-based storytelling and AI-powered editing. Optimized for each platform with smart pacing, hooks, captions, and trend-aligned cuts to boost engagement and retention.",
  },
  {
    icon: Mic,
    title: "Podcast Editing",
    desc: "Clean audio, dynamic visuals, and seamless flow — transforming conversations into bingeable content.",
  },
  {
    icon: Play,
    title: "Story-Driven YouTube Editing",
    desc: "Narrative-first editing that keeps audiences watching with compelling arcs and strategic retention hooks.",
  },
  {
    icon: Image,
    title: "Thumbnail Design",
    desc: "Eye-catching psychological thumbnails engineered for maximum CTR using bold typography and emotional triggers.",
  },
  {
    icon: TrendingUp,
    title: "YouTube Optimization",
    desc: "SEO-informed titles, descriptions, and tags paired with analytics-driven content strategy.",
  },
  {
    icon: Eye,
    title: "Creative Visual Direction",
    desc: "End-to-end creative vision — from mood boards to final delivery — ensuring brand consistency.",
  },
];

const ServicesSection = () => {
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
    <section id="services" ref={ref} className="py-24 opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          What I <span className="text-gradient-purple">Offer</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Services built around storytelling, emotional impact, and audience growth.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group bg-card/50 border-border/40 hover:border-primary/40 transition-all duration-300 hover:glow-purple-sm cursor-default"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
