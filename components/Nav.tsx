"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.985_0.006_148/0.95)] backdrop-blur-md border-b border-[oklch(0.88_0.018_148)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="Tony's Landscape Services home">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[oklch(0.24_0.08_148)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22V12M12 12C12 7 7 4 3 5c0 6 4 10 9 10zM12 12C12 7 17 4 21 5c0 6-4 10-9 10z"/>
            </svg>
          </span>
          <span className="font-display font-700 text-[oklch(0.24_0.08_148)] text-lg leading-tight">
            Tony&apos;s Landscape
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {[
            { label: "Services", href: "#services" },
            { label: "About", href: "#about" },
            { label: "Reviews", href: "#reviews" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[oklch(0.38_0.09_148)] hover:text-[oklch(0.24_0.08_148)] transition-colors duration-150 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:5593527859"
            className="bg-[oklch(0.24_0.08_148)] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[oklch(0.30_0.08_148)] transition-all duration-150 active:scale-[0.97] cursor-pointer"
          >
            (559) 352-7859
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-[oklch(0.24_0.08_148)] hover:bg-[oklch(0.94_0.025_148)] transition-colors duration-150 cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[oklch(0.88_0.018_148)] bg-[oklch(0.985_0.006_148)] px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Services", href: "#services" },
            { label: "About", href: "#about" },
            { label: "Reviews", href: "#reviews" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-[oklch(0.38_0.09_148)] hover:text-[oklch(0.24_0.08_148)] transition-colors duration-150 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:5593527859"
            className="bg-[oklch(0.24_0.08_148)] text-white text-base font-semibold px-4 py-3 rounded-lg text-center hover:bg-[oklch(0.30_0.08_148)] transition-all duration-150 cursor-pointer"
          >
            Call (559) 352-7859
          </a>
        </div>
      )}
    </header>
  );
}
