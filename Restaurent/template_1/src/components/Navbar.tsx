"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/lib/siteData";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-light tracking-wider text-white hover:text-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded font-serif italic"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {siteData.brand.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded relative",
                pathname === "/"
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              )}
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700"></span>
              )}
            </Link>
            <Link
              href="/menu"
              className={cn(
                "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded relative",
                pathname === "/menu"
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              )}
            >
              Menu
              {pathname === "/menu" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700"></span>
              )}
            </Link>
            <Link
              href="/reserve"
              className={cn(
                "px-6 py-2.5 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 active:scale-100 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
                pathname === "/reserve"
                  ? "bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 shadow-lg shadow-amber-500/30"
                  : "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800"
              )}
            >
              Reserve
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

          {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 bg-black/10 backdrop-blur-md border-t border-white/10",
            isOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4 pt-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded py-2 relative pl-2",
                pathname === "/"
                  ? "text-white font-semibold border-l-2 border-amber-500"
                  : "text-gray-300 hover:text-white"
              )}
            >
              Home
            </Link>
            <Link
              href="/menu"
              onClick={() => setIsOpen(false)}
              className={cn(
                "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded py-2 relative pl-2",
                pathname === "/menu"
                  ? "text-white font-semibold border-l-2 border-amber-500"
                  : "text-gray-300 hover:text-white"
              )}
            >
              Menu
            </Link>
            <Link
              href="/reserve"
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-6 py-2.5 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 active:scale-100 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 text-center relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
                pathname === "/reserve"
                  ? "bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 shadow-lg shadow-amber-500/30"
                  : "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800"
              )}
            >
              Reserve
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
