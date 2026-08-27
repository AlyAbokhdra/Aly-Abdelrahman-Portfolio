"use client";

import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Languages & Backend",
    skills: ["Java", "JavaScript/React", "Node.js", "Express", "Python"],
  },
  {
    title: "Databases & Infrastructure",
    skills: ["MongoDB", "Docker", "Kubernetes", "Red Hat OpenShift", "RESTful APIs", "SOAP WebServices"],
  },
  {
    title: "ECM & BPM Platforms",
    skills: ["IBM FileNet P8", "IBM Content Navigator (ICN)", "IBM Datacap", "IBM CMOD", "OpenText", "Litera FileTrail"],
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-neutral-900 dark:text-neutral-50">Skills</h2>
          <div className="w-16 h-1 bg-neutral-900 dark:bg-neutral-100 rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800"
            >
              <h3 className="text-lg font-semibold mb-6 text-neutral-900 dark:text-neutral-100">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-sm font-medium text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
