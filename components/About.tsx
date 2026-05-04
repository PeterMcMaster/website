"use client";

import { motion, type Variants } from "framer-motion";
import { personal } from "@/data/resume";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About Me</h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-white border border-slate-200 rounded-2xl p-8"
          >
            <div className="space-y-4">
              {personal.about.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
