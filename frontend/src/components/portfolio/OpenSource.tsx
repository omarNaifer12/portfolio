import { GitPullRequest, ExternalLink, GitMerge } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

type Contribution = {
  title: string;
  repo: string;
  description: string;
  prUrl: string;
  repoUrl: string;
  tags: string[];
};

const ossProfileUrl = "https://github.com/twentyhq/twenty/pulls?q=is%3Apr+author%3AomarNaifer12+is%3Aclosed";

const contributions: Contribution[] = [
  {
    title: "Google Places Autocomplete for Address Fields",
    repo: "twentyhq/twenty",
    description:
      "Built a smart address autocomplete feature using Google Places APIs, with debounced input handling and automatic population of structured address fields upon selection, improving user experience and form accuracy.",
    prUrl: "https://github.com/twentyhq/twenty/pull/13450",
    repoUrl: "https://github.com/twentyhq/twenty",
    tags: ["NestJS", "Google Maps API", "React Ts","GraphQL"],
  },
  {
    title: "Support More Body Types in HTTP Request Workflow Action",
    repo: "twentyhq/twenty",
    description:
      "Extended the HTTP Request workflow action — previously limited to JSON — to support multipart/form-data, application/x-www-form-urlencoded, and text/plain body types, bringing it on par with tools like Postman.",
    prUrl: "https://github.com/twentyhq/twenty/pull/14055",
    repoUrl: "https://github.com/twentyhq/twenty",
    tags: ["NestJS", "React Ts"],
  },
];

const stats = [
  { label: "Merged PRs", value: "16" },
//   { label: "GitHub Stars", value: "24k+" },
  { label: "Scope", value: "Full Stack" },
];

export const OpenSource = () => {
  return (
    <section id="opensource" className="py-32 relative">
      <div className="container">

        {/* Header */}
        <div className="flex flex-col md:flex-col md:items-start justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              / open source
            </p>
           <h2 className="text-4xl md:text-5xl font-bold">
  Contributions to{" "}
  <a 
    href="https://github.com/twentyhq/twenty"
    target="_blank"
    rel="noreferrer"
    className="text-gradient-violet inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
  >
    Twenty CRM
    <ExternalLink size={28} className="text-primary" />
  </a>
</h2>
          </div>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Merged <strong className="text-foreground">16 pull requests</strong>  into a 
            large open-source CRM (React + NestJS), contributing bug fixes and full-stack features 
            across a production codebase, collaborating with maintainers 
            through structured code review and feedback cycles. 
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 rounded-full border border-border bg-secondary px-5 py-2.5"
            >
              <span className="text-primary font-bold text-sm">{s.value}</span>
              <span className="text-muted-foreground text-sm">{s.label}</span>
            </div>
          ))}
        </div>

        {/* GitHub profile link */}
        <div className="mb-10">
          <a
            href={ossProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-semibold hover:border-primary transition-colors"
          >
            <FaGithub size={16} /> View all my PRs on GitHub
            <ExternalLink size={14} className="opacity-60" />
          </a>
        </div>

        {/* PR Cards */}
        <ul className="grid md:grid-cols-2 gap-6">
          {contributions.map((c) => (
            <li
              key={c.prUrl}
              className="group rounded-2xl border border-border p-6 flex flex-col gap-4 hover:border-primary/60 transition-colors"
              style={{ background: "var(--gradient-card)" }}
            >
              {/* Repo label */}
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <GitMerge size={14} className="text-primary" />
                <a
                  href={c.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors truncate"
                >
                  {c.repo}
                </a>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {c.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-full border border-border bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* PR link */}
              <a
                href={c.prUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                <GitPullRequest size={14} /> View pull request{" "}
                <ExternalLink size={14} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};