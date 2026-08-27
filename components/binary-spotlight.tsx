"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "motion/react";

export function BinarySpotlight() {
  const [binaryText, setBinaryText] = useState("");
  const mouseX = useMotionValue(-1000); // start off-screen
  const mouseY = useMotionValue(-1000);

  // Smooth out mouse movement slightly for a more premium feel
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    // Generate static random string of 1s and 0s
    // 20000 characters is enough to wrap and fill even a 4k screen at 12px font
    const generateBinary = () => {
      return Array.from({ length: 25000 }, () => (Math.random() > 0.5 ? "1" : "0")).join(" ");
    };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBinaryText(generateBinary());

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Use motion template to bind CSS masking to the spring coordinates
  const maskImage = useMotionTemplate`radial-gradient(circle at ${springX}px ${springY}px, black 0%, transparent 350px)`;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden selection:bg-transparent">
      {/* The base layer of binary grid that is masked by the spotlight */}
      <motion.div
        className="absolute inset-0 font-mono text-[11px] leading-[14px] text-neutral-400 dark:text-neutral-600 opacity-20 select-none break-all text-justify"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      >
        {binaryText}
      </motion.div>
    </div>
  );
}
