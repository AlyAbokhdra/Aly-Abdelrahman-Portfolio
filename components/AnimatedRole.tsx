"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const roles = [
  { prefix: "Currently an", title: "Associate ECM Technical Consultant" },
  { prefix: "Specializing in", title: "IBM FileNet & Datacap Solutions" },
  { prefix: "Architecting as a", title: "Full-Stack Systems Engineer" },
  { prefix: "Developing for", title: "Enterprise Content Management" },
  { prefix: "Building as an", title: "Enterprise Integration Engineer" },
];

export function AnimatedRole() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <span className="inline-block">
        <span className="text-neutral-500 dark:text-neutral-400">{roles[0].prefix} </span>
        <span className="text-neutral-900 dark:text-neutral-100">{roles[0].title}</span>
      </span>
    );
  }

  return (
    <span className="inline-block relative">
      <AnimatePresence>
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="inline-block absolute left-0 top-0 whitespace-nowrap"
        >
          <span className="text-neutral-500 dark:text-neutral-400">{roles[index].prefix} </span>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">{roles[index].title}</span>
        </motion.span>
      </AnimatePresence>
      {/* Invisible placeholder using the longest combined string to prevent layout shifts */}
      <span className="invisible pointer-events-none whitespace-nowrap" aria-hidden="true">
        <span className="text-neutral-500">Currently an </span>
        <span className="text-neutral-900 font-semibold">Associate ECM Technical Consultant</span>
      </span>
    </span>
  );
}
