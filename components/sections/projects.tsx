"use client";

import { motion } from "motion/react";
import { Server, Database, Network, Code } from "lucide-react";

const ecmProjects = [
  {
    title: "FileNet P8 Java Ingestion Service",
    category: "Enterprise Infrastructure",
    icon: <Server className="h-6 w-6" />,
    description: "Architected a multi-threaded Java ingestion service running as a headless Windows service. Automates document capture and ingestion into FileNet P8 via network drop-folders with zero human interaction.",
    tech: ["Java", "IBM FileNet P8", "Multi-threading"],
  },
  {
    title: "CRM & FileTrail SOAP Integration",
    category: "System Integration",
    icon: <Network className="h-6 w-6" />,
    description: "Created a central SOAP WebService acting as the primary integration point for CRM systems to upload, search, retrieve, and delete documents across FileNet and Litera FileTrail.",
    tech: ["SOAP WebServices", "Java", "Litera FileTrail"],
  },
  {
    title: "IBM FileNet Bulk Archival Utility",
    category: "Enterprise Content Management",
    icon: <Database className="h-6 w-6" />,
    description: "Developed a custom high-throughput upload utility enabling the bulk archival of warehouse-scanned documents directly into IBM FileNet.",
    tech: ["IBM FileNet", "Java", "Batch Processing"],
  },
  {
    title: "IBM Datacap Processing Suite",
    category: "Document Automation",
    icon: <Code className="h-6 w-6" />,
    description: "Engineered complex IBM Datacap applications for automated document processing, classification, and data extraction, Uploading into FileNet tailored for tier-1 financial institutions.",
    tech: ["IBM Datacap", "FileNet"],
  },
];

const additionalProjects = [
  {
    title: "JAX-RS Mock Banking API",
    category: "Backend Development",
    description: "Developed a Java-based REST API simulating core banking endpoints to facilitate downstream FileNet integration testing.",
    tech: ["Java", "JAX-RS", "REST"],
  },
  {
    title: "Full-Stack Web & Mobile Apps",
    category: "Independent Development",
    description: "Built Dynamic Invitations (React/Express), SkillTrackr (MERN), and a Cross-Platform Music Player (Flutter/Firebase).",
    tech: ["React", "Node.js", "Flutter"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-transparent transition-colors relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-neutral-900 dark:text-neutral-50">Enterprise Engineering Work</h2>
          <div className="w-16 h-1 bg-neutral-900 dark:bg-neutral-100 rounded"></div>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Primary focus on robust, highly scalable Enterprise Content Management solutions and automated ingestion pipelines.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {ecmProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 p-8 flex flex-col h-full hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex items-center justify-center mb-6 border border-neutral-200 dark:border-neutral-800">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">{project.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium mb-4">{project.category}</p>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold tracking-tight mb-2 text-neutral-900 dark:text-neutral-50">Additional Projects</h3>
          <div className="w-12 h-1 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {additionalProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
              className="bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-lg font-bold mb-1 text-neutral-900 dark:text-neutral-100">{project.title}</h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">{project.category}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-medium bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded border border-neutral-100 dark:border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
