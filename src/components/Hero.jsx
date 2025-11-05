import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center py-16 lg:py-24">
        {/* Left copy */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary ring-1 ring-primary/20">
            <Sparkles size={14} /> Interactive 3D Portfolio
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Building modern, playful, and performant web experiences
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
            I craft responsive interfaces, robust backends, and delightful interactions. Explore my latest work and let's create something remarkable together.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <Rocket size={16} />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right: Spline scene */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 dark:ring-white/10">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Subtle gradient to blend edges; doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent dark:from-black/20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
