import { ArrowDown, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="container relative z-10 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-8 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for freelance & full-time
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
            Building 
            <br />
            <span className="text-gradient">reliable </span>
            <br />
            web and mobile <span className="text-gradient-violet italic"> applications.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Full-stack developer building web and mobile applications using React, Node.js, and React Native. Experienced in developing complete products across the stack, from frontend interfaces and backend APIs to authentication, databases, and real-time features.

Worked as a freelance developer on a mobile application with a small team, collaborating in client meetings, implementing feature updates, and contributing to the delivery of production-ready solutions.

Also contributed to large open-source projects, gaining experience reading and navigating large codebases, following established architectures, and writing clean, maintainable code through collaborative code reviews and real-world development practices.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              View my work <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-7 py-3.5 font-semibold hover:bg-secondary/70 transition-all"
            >
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-3 pt-4">
            {[
          
              { icon: Mail, href: "mailto:omarnaifer6@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-secondary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* <div className="md:col-span-4 hidden md:flex flex-col gap-4">
          {[
            { k: "5+", v: "Years experience" },
            { k: "40+", v: "Projects shipped" },
            { k: "20+", v: "Happy clients" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-border p-6"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="text-4xl font-bold text-gradient">{s.k}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
