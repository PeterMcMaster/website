"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data/resume";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function CompanyLogo({ logo, company }: { logo?: string; company: string }) {
  const [failed, setFailed] = useState(false);
  const initial = company.charAt(0).toUpperCase();

  if (!logo || failed) {
    return (
      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">
        {initial}
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
      <Image
        src={logo}
        alt={`${company} logo`}
        width={40}
        height={40}
        className="object-cover w-full h-full"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-300 via-blue-100 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="sm:pl-10 relative group"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-blue-500 ring-4 ring-slate-50 hidden sm:block group-hover:bg-blue-600 transition-colors" />

                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div className="flex items-start gap-3">
                      <CompanyLogo logo={exp.logo} company={exp.company} />
                      <div>
                        <h3 className="text-slate-900 font-semibold text-lg leading-tight">
                          {exp.role}
                        </h3>
                        {exp.website ? (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-medium mt-0.5 hover:underline inline-block"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <p className="text-blue-600 font-medium mt-0.5">{exp.company}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-slate-400 text-sm shrink-0">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {exp.start} – {exp.end}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
