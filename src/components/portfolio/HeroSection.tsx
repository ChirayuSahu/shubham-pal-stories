import { useEffect, useRef } from "react";
import { ArrowDown, Film, Palette, Youtube, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const highlights = [
  { icon: Film, label: "Short-Form Editing" },
  { icon: Sparkles, label: "Storytelling-Driven" },
  { icon: Palette, label: "Graphic Design Integration" },
  { icon: Youtube, label: "YouTube Optimization" },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100");
          el.classList.remove("opacity-0");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden transition-opacity duration-700 opacity-0"
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-deep/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        {/* Profile picture placeholder */}
        <div className="mx-auto mb-8 w-32 h-32 rounded-full border-2 border-primary/60 glow-purple animate-pulse-glow flex items-center justify-center bg-secondary">
          <span className="font-display text-3xl font-bold text-gradient-purple">SP</span>
        </div>

        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
          Video Editor & Storytelling Specialist
        </p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Shubham{" "}
          <span className="text-gradient-purple">Pal</span>
        </h1>

        <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed">
          Passionate video editor and storyteller focused on bringing emotions and narratives
          to life through powerful visual content. Specializing in short-form edits, podcast
          editing, and YouTube optimization.
        </p>

        <Button
          size="lg"
          className="rounded-full px-8 py-6 text-base font-semibold glow-purple-sm hover:glow-purple transition-shadow"
          onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
        >
          View My Work
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>

        {/* Highlight badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-14">
          {highlights.map((item, i) => (
            <Badge
              key={item.label}
              variant="outline"
              className="px-4 py-2 text-sm border-border/60 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all cursor-default animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <item.icon className="h-3.5 w-3.5 mr-2 text-primary" />
              {item.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
