"use client";

import { Leaf } from "lucide-react";

const navItems = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Reserve", href: "#reserve" },
];

export function FloatingNav() {
  return (
    <header className="fixed top-6 left-1/2 z-50 w-[min(92%,780px)] -translate-x-1/2 rounded-full glass">
      <nav className="flex items-center justify-between px-6 py-3 text-forest">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase">
          <Leaf className="h-4 w-4" />
          Verdelune
        </a>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#4c715d]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
