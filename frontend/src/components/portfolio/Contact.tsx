import {  Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container">
        <div
          className="rounded-3xl border border-border p-10 md:p-20 text-center relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="grid-bg absolute inset-0 opacity-40 pointer-events-none" />
          <div className="relative space-y-8 max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
              / let's talk
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Have a project in mind? <br />
              <span className="text-gradient">Let's build it together.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
            I'm open to new opportunities. Feel free to reach out — I'll respond within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="mailto:omarnaifer6@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:shadow-glow transition-all"
              >
                <Mail size={18} /> omarnaifer6@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 pt-4">
              {[
                { icon: FaGithub, href: "https://github.com/omarNaifer12" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/omar-naifer/" },
                // { icon: Twitter, href: "https://twitter.com/your-handle" },
                { icon: Mail, href: "mailto:omarnaifer6@gmail.com" }
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-12 w-12 place-items-center rounded-full border border-border bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* <footer className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

        </footer> */}
      </div>
    </section>
  );
};
