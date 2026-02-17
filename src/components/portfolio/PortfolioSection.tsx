import { useEffect, useRef } from "react";
import { ExternalLink, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Personal Branding Videos",
    thumbnail: "/project1.jpg",
    link: "https://drive.google.com/drive/folders/1DvLGbqcWxbCNT-_WW1tfj1pRJUuQklvV?usp=drive_link",
    tags: ["Personal Branding", "YouTube Strategy", "Content Marketing", "Long-Form Video"],
    desc: "High-impact personal branding videos crafted with strategic storytelling, audience positioning, and authority-building content tailored for YouTube, Instagram, and LinkedIn growth."
  },
  {
    title: "Funny Viral Memes",
    thumbnail: "https://i.postimg.cc/VN2g3Lzv/Whats-App-Image-2026-02-17-at-4-27-56-PM.jpg",
    link: "https://www.instagram.com/reel/DNPofgix1xK",
    tags: ["Viral Content", "Instagram Reels", "Short-Form Video", "Comedy Editing"],
    desc: "Engaging viral meme edits designed for maximum shareability, using trending audio, fast-paced cuts, and platform-optimized storytelling to boost reach and engagement."
  },
  {
    title: "Informative Reels/Shorts",
    thumbnail: "/project3.jpeg",
    link: "https://drive.google.com/drive/folders/1Tcq9J6kXbRN-wNSGyQ1Jpzh4btBrzN0N?usp=drive_link",
    tags: ["Educational Content", "Instagram Reels", "YouTube Shorts", "Motion Graphics"],
    desc: "Educational short-form videos edited with dynamic motion graphics, kinetic typography, and retention-focused pacing to maximize watch time and audience engagement."
  },
  {
    title: "Long Form YouTube Videos",
    thumbnail: "https://i.postimg.cc/1RbgwnMW/f-B6URTq-COFc-HD-(1).jpg",
    link: "https://youtu.be/fB6URTqCOFc?si=HgbRaiEMoZNC3B3I",
    tags: ["YouTube Growth", "Long-Form Content", "Storytelling", "Audience Retention"],
    desc: "Professional long-form YouTube videos structured for high retention, featuring compelling hooks, strategic pacing, and seamless edits to increase watch time and subscriber growth."
  },
  {
    title: "YouTube Thumbnails",
    thumbnail: "https://i.postimg.cc/fyJPYgWW/vy-Ytm-Jl-EIts-HD-(1).jpg",
    link: "https://drive.google.com/drive/folders/1xXZZ2u0HjjaLvv1TToi_n73gyvKwB7Og?usp=drive_link",
    tags: ["Thumbnail Design", "YouTube CTR", "Graphic Design", "Click Optimization"],
    desc: "High-converting YouTube thumbnails designed to increase click-through rate (CTR) using bold typography, emotional triggers, and contrast-driven visual hierarchy."
  },
  {
    title: "Personal YouTube",
    thumbnail: "https://i.postimg.cc/ZqYzCHNT/PC-BUILD-4.jpg",
    link: "https://youtu.be/UejUSPuWYEg?si=YU9taVzBD3vv4cub",
    tags: ["YouTube Channel", "Content Creation", "Tech Videos", "Creator Branding"],
    desc: "Original YouTube content focused on tech, productivity, and creator growth—edited with clean visuals, structured storytelling, and audience-first content strategy."
  }
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