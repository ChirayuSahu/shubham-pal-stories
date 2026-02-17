import { useEffect, useRef } from "react";
import { ExternalLink, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const viralReels = [
    {
        thumbnail: "https://i.postimg.cc/vZyHQWHn/541548409-17942281749025495-5565462945006472657-n.jpg",
        link: "https://www.instagram.com/reel/DNPofgix1xK",
        views: "2.4M+",
    },
    {
        thumbnail: "https://i.postimg.cc/vm3m2cyX/Image-686.jpg",
        link: "https://www.instagram.com/reel/DOVv27CEYVq",
        views: "1.2M+",
    },
    {
        thumbnail: "https://i.postimg.cc/JnSHKG33/Image-87.jpg",
        link: "https://www.instagram.com/reel/DGNMX2qxXHI",
        views: "400K+",
    },
    {
        thumbnail: "https://i.postimg.cc/PqPqcdqd/Image-593.jpg",
        link: "https://www.instagram.com/reels/DOu_lCukdAj",
        views: "500K+",
    },
    {
        thumbnail: "https://i.postimg.cc/hvGZ8ZrV/Screenshot-2026-02-17-at-11-45-05-PM.png",
        link: "https://youtube.com/shorts/cg_oFgq94u4",
        views: "450K+",
    },
    {
        thumbnail: "https://i.postimg.cc/jjQMpYkV/Image-545.jpg",
        link: "https://www.instagram.com/reel/DFUhLZcxpCh",
        views: "700K+",
    },
    {
        thumbnail: "https://i.postimg.cc/yxJXYMnd/Image-138.jpg",
        link: "https://www.instagram.com/reel/DIJHrhVR9HV",
        views: "450K+",
    },
    {
        thumbnail: "https://i.postimg.cc/6TJR6yyM/Image-165.jpg",
        link: "https://www.instagram.com/reel/DKMKQV6Rtsv",
        views: "150K+",
    },
    {
        thumbnail: "https://i.postimg.cc/dt2nkYwP/Image-573.jpg",
        link: "https://www.instagram.com/reel/DLb1yXFxg0K",
        views: "250K+",
    },

];

const ViralSection = () => {
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
        <section id="viral" ref={ref} className="py-24 bg-background opacity-0 transition-opacity">
            <div className="container mx-auto px-4">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
                    Viral <span className="text-primary">Content</span>
                </h2>
                <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
                    A selection of projects that showcase storytelling, creativity, and results.
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {viralReels.map((p) => (
                        <a
                            key={p.link}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                        >
                            <Card className="h-full bg-card/50 border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
                                <div className="aspect-[9/16] relative overflow-hidden group">

                                    {/* Thumbnail */}
                                    <img
                                        src={p.thumbnail}
                                        alt={`${p.views} views`}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Strong Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                    {/* BIG BOLD VIEWS */}
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <div className="text-white">
                                            <p className="text-3xl font-extrabold tracking-tight leading-none drop-shadow-xl">
                                                {p.views}
                                            </p>
                                            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                                                Views
                                            </p>
                                        </div>
                                    </div>

                                    {/* External Icon */}
                                    <div className="absolute top-4 right-4 z-20">
                                        <ExternalLink className="h-5 w-5 text-white drop-shadow-lg" />
                                    </div>
                                </div>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ViralSection;