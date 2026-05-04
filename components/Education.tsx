"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { MapPin, Calendar, Award } from "lucide-react";
import { education } from "@/data/resume";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Education</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
          className="flex flex-col gap-6"
        >
          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={card}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src="/logos/columbia.png"
                        alt="Columbia University"
                        width={28}
                        height={28}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-slate-400 text-sm">{edu.school}</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">
                    {edu.degree.split(", ")[0].split(" in ")[0]}
                  </p>
                  <h3 className="text-slate-900 font-semibold text-lg leading-snug">
                    {edu.degree.includes(" in ")
                      ? edu.degree.split(" in ").slice(1).join(" in ")
                      : edu.degree.split(", ").slice(1).join(", ")}
                  </h3>
                </div>
                <div className="flex flex-col sm:items-end gap-1.5 shrink-0 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {edu.start} – {edu.end}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    {edu.location}
                  </span>
                  {edu.gpa && (
                    <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <Award size={13} />
                      GPA {edu.gpa} · {edu.honors}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase mb-3">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
