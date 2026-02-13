import { useEffect, useRef } from "react";
import { ExternalLink, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "CEO of Vena Solutions & Innogent Technologies",
    thumbnail: "/project1.jpg",
    link: "https://www.linkedin.com/in/gautam-yadav/", // <--- ADD LINK HERE
    tags: ["Current Client", "YouTube", "Long-Form"],
    desc: "Editing high-impact video content for a tech CEO — combining professional polish with story-driven narratives.",
  },
  {
    title: "Personal YouTube — Viral Videos",
    thumbnail: "/project2.jpeg",
    link: "https://www.youtube.com/@ThePsynide/videos", // <--- ADD LINK HERE
    tags: ["YouTube", "Viral", "Short-Form"],
    desc: "Created multiple viral videos on my personal YouTube channel, leveraging trend analysis and storytelling.",
  },
  {
    title: "DIFFR Instagram — Viral Edits",
    thumbnail: "/project3.jpeg",
    link: "https://www.instagram.com/diffrcommunity/", // <--- ADD LINK HERE
    tags: ["Instagram", "Reels", "Motion Graphics"],
    desc: "Produced viral Instagram edits for DIFFR, blending fast-paced editing with kinetic typography.",
  },
];

const PortfolioSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4", "duration-1000", "fill-mode-forwards");
          el.style.opacity = "1";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-background opacity-0 transition-opacity">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Work</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          A selection of projects that showcase storytelling, creativity, and results.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((p) => (
            <a 
              key={p.title} 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="h-full bg-card/50 border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
                <div className="aspect-video bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={p.thumbnail} 
                    alt={p.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  
                  
                  {/* Hover External Link Icon */}
                  <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-5 w-5 text-white drop-shadow-md" />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <CardContent className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;