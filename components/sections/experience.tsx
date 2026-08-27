"use client";

import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Associate ECM Technical Consultant",
    company: "Intercom Enterprises",
    date: "October 2025 - Present",
    achievements: [
      "Engineered digital archiving solutions utilizing IBM FileNet, ICN, Datacap, CMOD, and Litera FileTrail for a Tier-1 Regional Bank. Developed 3 distinct integrations between FileNet and FileTrail. Created a SOAP WebService acting as a central integration point for the CRM department to upload, search, retrieve, and delete documents.",
      "Architected a multi-threaded Java ingestion service running as a headless Windows service for a Major Egyptian Bank. This automated upload tool operates with zero human interaction, watching network drop-folders to capture, index, and ingest documents into FileNet P8.",
      "Executed end-to-end implementation of a new branch archival system on FileNet and ICN for a Multinational Banking Client. Engineered a custom batch-upload tool for processing monthly customer records.",
      "Supported CMOD, FileNet, and ICN infrastructures for a Leading Financial Institution. Developed a custom upload utility enabling bulk archival of warehouse-scanned documents."
    ],
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-transparent transition-colors relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-neutral-900 dark:text-neutral-50">Work Experience</h2>
          <div className="w-16 h-1 bg-neutral-900 dark:bg-neutral-100 rounded"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01, x: 5 }}
              className="relative pl-8 md:pl-0 transition-all duration-300"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="hidden md:flex flex-col items-end pt-1 relative">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-950 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 shadow-sm z-10">
                    <Briefcase className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  {/* Vertical line connecting timeline on desktop */}
                  {index !== experiences.length - 1 && (
                     <div className="absolute top-12 right-6 bottom-[-32px] w-px bg-neutral-200 dark:bg-neutral-800" />
                  )}
                </div>
                
                {/* Mobile line and icon */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 md:hidden" />
                <div className="absolute left-[-8px] top-4 w-4 h-4 rounded-full bg-neutral-900 dark:bg-neutral-100 md:hidden border-4 border-[#fafafa] dark:border-neutral-950" />

                <div className="md:col-span-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 md:p-8 hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">{exp.role}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 sm:mt-0 whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>
                  <ul className="space-y-3 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-neutral-900 dark:text-neutral-100 mr-2 mt-1">•</span>
                        <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
