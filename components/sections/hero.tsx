"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { AnimatedRole } from "@/components/AnimatedRole";

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
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-neutral-950">
        {/* Subtle animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-950 opacity-80" />

        {/* Vercel-style architectural grid with a radial fade-out mask */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"
          style={{ maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)' }}
        />

        {/* Optional warm amber accent glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-900/10 blur-[120px]" />
      </div>

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
            <h2 className="text-xl sm:text-2xl font-mono text-neutral-400 mb-4 h-8 flex items-center">
              <span>Building & Architecting&nbsp;</span>
              <AnimatedRole />
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
