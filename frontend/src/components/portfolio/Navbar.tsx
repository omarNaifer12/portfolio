import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { myresume } from "@/lib/images";


const links = [
  // { label: "About", href: "#about" },
  { label: "Tech", href: "tech" },
  { label: "Projects", href: "opensource" },
  { label: "Contact", href: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const scrollToSection = (id:string) => {
    console.log("enter scrollToSection",id);
    
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <nav
        className={cn(
          "container flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500",
          scrolled ? "glass shadow-card" : "bg-transparent"
        )}
      >
        <a  className="flex items-center gap-2 font-bold text-lg">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground font-black">
            ◣
          </span>
          <span className="text-gradient">Omar Naifer</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <button
            onClick={()=>scrollToSection(l.href)}
              
                className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={myresume}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:shadow-glow transition-all"
          target="_blank"
          rel="noreferrer"
          >
            My Resume
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg bg-secondary"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
  <div className="md:hidden container mt-2 glass rounded-2xl p-4 flex flex-col gap-2">
    {links.map((l) => (
      <button
        key={l.href}
        onClick={() =>  {
          setOpen(false)
          scrollToSection(l.href)
          
        }}
        className="px-4 py-3 rounded-xl hover:bg-secondary"
      >
        {l.label}
      </button>
    ))}

    {/* Resume button — separated at the bottom */}
    <div className="mt-1 pt-3 border-t border-border">
      <a
        href={myresume}
        target="_blank"
        rel="noreferrer"
        onClick={() => setOpen(false)}
        className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:shadow-glow transition-all"
      >
        My Resume
      </a>
    </div>
  </div>
)}
    </header>
  );
};