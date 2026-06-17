import { Code2, Rocket } from "lucide-react";

const values = [
  // {
  //   icon: Sparkles,
  //   title: "Design-driven",
  //   text: "Pixels matter. I obsess over typography, spacing and motion until it feels right.",
  // },
  {
    icon: Code2,
    title: "Clean code",
    text: "Typed, tested and modular. Future-you will thank present-me.",
  },
  {
    icon: Rocket,
    title: "Ship fast",
    text: "Tight feedback loops, no over-engineering. Working software over perfect plans.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6 md:sticky md:top-32 self-start">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
              / about me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              A developer who <span className="text-gradient-violet">cares about craft.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
  Hi — I'm <span className="text-foreground font-semibold">Omar Naifer</span>, a
  full-stack developer focused on building modern web applications with React,
  JavaScript, and Node.js, alongside cross-platform mobile applications with
  React Native.
</p>
          <p className="text-muted-foreground leading-relaxed">
  I'm passionate about clean code, strong problem-solving, developer experience,
  and building maintainable products. I also contribute to large open-source
  projects and enjoy exploring and learning new technologies.
</p>
          </div>

          <div className="md:col-span-7 space-y-5">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-3xl border border-border p-8 hover:border-primary/50 transition-all hover:-translate-y-1"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex items-start gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};