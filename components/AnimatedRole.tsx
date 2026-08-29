"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const roles = [
  "Associate ECM Technical Consultant",
  "IBM FileNet & Datacap Specialist",
  "Enterprise Content Management (ECM) Developer",
  "Full-Stack Systems Engineer",
  "Enterprise Integration Engineer",
  "Software Engineer",
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
    return <span className="inline-block text-neutral-900 dark:text-neutral-100 font-semibold">{roles[0]}</span>;
  }

  return (
    <span className="inline-block relative w-full sm:w-auto">
      <AnimatePresence>
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="inline-block absolute left-0 top-0 text-neutral-900 dark:text-neutral-100 font-semibold w-full sm:w-auto"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible placeholder utilizing the longest string and allowing natural wrap */}
      <span className="invisible pointer-events-none w-full sm:w-auto block sm:inline-block" aria-hidden="true">
        Enterprise Content Management (ECM) Developer
      </span>
    </span>
  );
}
