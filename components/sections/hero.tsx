"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-neutral-100">
              Hi, I&apos;m <span className="text-neutral-600 dark:text-neutral-400">Aly Abdelrahman</span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl font-medium text-neutral-600 dark:text-neutral-300 mb-6">
              ECM Technical Consultant & Software Engineer
            </h2>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-8 max-w-2xl leading-relaxed">
              Specializing in Enterprise Content Management (ECM). I architect scalable microservices, develop complex IBM Datacap applications, administer CMOD infrastructures, and engineer seamless integrations between FileNet, FileTrail, and core banking systems.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-white shadow transition-all hover:bg-neutral-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:ring-neutral-300"
            >
              View Enterprise Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-200 bg-transparent px-8 text-sm font-medium text-neutral-900 shadow-sm transition-all hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
            >
              Contact Me
              <FileText className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
