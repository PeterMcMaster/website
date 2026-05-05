"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { personal } from "@/data/resume";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-100/60 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-50/80 blur-[100px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-12 md:gap-16"
      >
        {/* Photo — left */}
        <motion.div variants={item} className="shrink-0">
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-2xl ring-2 ring-blue-200 ring-offset-4 ring-offset-slate-50 overflow-hidden shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Peter McMaster"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        {/* Text — right */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full min-w-0">
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-3"
          >
            Peter McMaster
          </motion.h1>

          <motion.p variants={item} className="text-base sm:text-lg text-slate-500 font-medium mb-2">
            {personal.title}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-1 mb-8">
            {personal.tagline.split(" · ").map((tag) => (
              <span key={tag} className="text-sm text-slate-400 font-medium">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:border-blue-300 text-slate-700 text-sm font-medium transition-colors shadow-sm min-w-0 truncate max-w-[260px]"
            >
              {personal.email}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:border-blue-300 text-slate-700 text-sm font-medium transition-colors shadow-sm"
            >
              <LinkedinIcon size={15} />
              LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:border-blue-300 text-slate-700 text-sm font-medium transition-colors shadow-sm"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
