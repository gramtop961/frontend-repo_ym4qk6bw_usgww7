import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let's build something great</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          I'm open to freelance work, collaborations, or full-time roles. Reach out and let's talk ideas, timelines, and impact.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="mailto:hello@example.com"
            className="flex items-center justify-center gap-2 rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 px-4 py-3 hover:shadow-md transition-shadow"
          >
            <Mail size={18} /> Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 px-4 py-3 hover:shadow-md transition-shadow"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 px-4 py-3 hover:shadow-md transition-shadow"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
        <p className="mt-8 text-xs text-neutral-500">
          Prefer a quick intro? Send a link to your brief and I'll reply within 24 hours.
        </p>
      </div>
    </section>
  );
};

export default Contact;
