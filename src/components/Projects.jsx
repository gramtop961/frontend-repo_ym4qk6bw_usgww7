import React from 'react';
import { ExternalLink, Code, Cpu, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description:
      'A multiplayer document editor with CRDT sync, presence indicators, and comments. Built for seamless teamwork.',
    tags: ['React', 'FastAPI', 'WebSockets', 'CRDT'],
    link: '#',
    icon: Sparkles,
  },
  {
    title: '3D Product Customizer',
    description:
      'An interactive configurator using WebGL and parametric materials. Smooth, playful, and performant.',
    tags: ['Three.js', 'Spline', 'Tailwind'],
    link: '#',
    icon: Cpu,
  },
  {
    title: 'AI-powered Portfolio Generator',
    description:
      'Generate beautiful personal sites from a short brief, with smart content blocks and live preview.',
    tags: ['Vite', 'OpenAI', 'MongoDB'],
    link: '#',
    icon: Code,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              A selection of work focused on interactivity, performance, and clean design.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            Let's collaborate
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, tags, link, icon: Icon }) => (
            <article
              key={title}
              className="group relative rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex p-2 rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  <a
                    href={link}
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    aria-label={`Open ${title}`}
                  >
                    View project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/5 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
