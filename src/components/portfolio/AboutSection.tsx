import { useEffect, useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("animate-fade-up");
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-section opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient-purple">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Blending storytelling with visual design to create content that resonates.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-foreground/90 leading-relaxed">
              I'm a dedicated video editor and graphic designer who believes in the power of
              storytelling. Every frame, cut, and transition is an opportunity to evoke emotion
              and deliver value. I blend my graphic design skills with editing to elevate
              creativity beyond the ordinary.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's short-form content for Instagram Reels, long-form YouTube videos, or
              podcast editing, I approach every project with a storytelling-first mindset — 
              ensuring content not only looks stunning but connects deeply with audiences.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold">Education</h3>
              </div>
              <div className="ml-[52px] space-y-3 border-l border-border/50 pl-4">
                <div>
                  <p className="text-sm font-medium text-foreground">12th — DPS Chhindwara</p>
                  <p className="text-xs text-muted-foreground">Completed 2024</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">BA Political Science — Open University</p>
                  <p className="text-xs text-muted-foreground">2024 – 2027 (Pursuing)</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold">Experience</h3>
              </div>
              <div className="ml-[52px] space-y-3 border-l border-border/50 pl-4">
                <div>
                  <p className="text-sm font-medium text-foreground">Video Editor & Graphic Designer</p>
                  <p className="text-xs text-muted-foreground">Viha Tech Software · Dec 2024 – Jan 2025</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Freelance Video Editor</p>
                  <p className="text-xs text-muted-foreground">Ongoing · Part-Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
