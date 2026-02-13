import { useEffect, useRef } from "react";
import { Mail, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { icon: Mail, label: "Email", href: "mailto:shubhampalll968@gmail.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/thepsynide" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/thepsynidelol" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-pal-809630210/" },
];

const ContactSection = () => {
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
    <section id="contact" ref={ref} className="py-24 opacity-0">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Let's Create <span className="text-gradient-purple">Impactful Stories</span> Together
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-12">
          Ready to bring your vision to life? Reach out and let's make something extraordinary.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <Button
              key={l.label}
              variant="outline"
              className="gap-2 border-border/50 hover:border-primary/50 hover:glow-purple-sm transition-all"
              asChild
            >
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                <l.icon className="h-4 w-4 text-primary" />
                {l.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
