"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Trophy } from "lucide-react";
import { awards } from "@/data/resume";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Honors & Awards</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {awards.map((award) => (
            <motion.div
              key={award.title}
              variants={card}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  {award.logo ? (
                    <Image
                      src={award.logo}
                      alt={award.title}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <Trophy size={18} />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="text-slate-900 font-semibold text-base">{award.title}</h3>
                    <span className="text-slate-400 text-xs">{award.year}</span>
                  </div>
                  <p className="text-blue-600 text-sm font-medium mt-0.5">{award.issuer}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mt-2">{award.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
