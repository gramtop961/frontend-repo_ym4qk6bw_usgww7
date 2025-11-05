import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight text-lg">
          <span className="text-neutral-900 dark:text-white">Flames</span>
          <span className="text-primary">.Portfolio</span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
