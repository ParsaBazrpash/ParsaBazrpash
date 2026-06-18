"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "HOME", id: "home" },
  { name: "EXPERIENCE", id: "experience" },
  { name: "PROJECTS", id: "projects" },
  { name: "ACHIEVEMENTS", id: "achievements" },
  { name: "CONTACT", id: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = navItems.map((item) => item.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHomePage]);

  const href = (id: string) => (isHomePage ? `#${id}` : `/#${id}`);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto nav-surface backdrop-blur-md border border-border-subtle/60 rounded-2xl">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 group">
              <span className="text-xl font-bold text-foreground tracking-tight">P</span>
              <span className="relative text-xl font-bold text-foreground tracking-tight">
                B
                <span className="absolute -top-1 -right-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={href(item.id)}
                  className={`relative text-[11px] tracking-[0.2em] font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </Link>
              ))}
            </div>

            {/* Theme toggle + Social Icons */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <div className="w-px h-5 bg-border-subtle" />
              <Link
                href="https://www.linkedin.com/in/parsa-bazrpash-amalgar/"
                target="_blank"
                className="text-muted hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/ParsaBazrpash"
                target="_blank"
                className="text-muted hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:prsawork1@gmail.com"
                className="text-muted hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted hover:text-foreground"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div className="lg:hidden pb-6 border-t border-border-subtle pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={href(item.id)}
                  className={`block py-3 text-sm tracking-[0.15em] transition-colors ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-5 pt-4 border-t border-border-subtle mt-2">
                <Link
                  href="https://www.linkedin.com/in/parsa-bazrpash-amalgar/"
                  target="_blank"
                  className="text-muted hover:text-accent"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://github.com/ParsaBazrpash"
                  target="_blank"
                  className="text-muted hover:text-accent"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="mailto:prsawork1@gmail.com" className="text-muted hover:text-accent">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
