const stacks = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "C#"],
  },
  {
    title: "Frontend",
    items: ["React","HTML","CSS","React native"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Sequelize","ADO.NET"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDb"],
  },
  // {
  //   title: "Tools & Cloud",
  //   items: ["Git", "Vps", "Google Cloud"],
  // },
];

export const Tech = () => {
  return (
    <section id="tech" className="py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            / tech stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies and tools  <span className="text-gradient">I work with</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {stacks.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-border p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {s.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm hover:border-primary hover:text-primary transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
