"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { certificates } from "@/config/certificates";
import { ExternalLink, BadgeCheck } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-neutral-900 dark:text-neutral-50">Certifications</h2>
            <div className="w-16 h-1 bg-neutral-900 dark:bg-neutral-100 rounded"></div>
          </div>
          <a 
            href="https://www.credly.com/users/aly-abdelrahman.c4967054/badges/credly" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline"
          >
            View all 20+ verified badges on Credly
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link ml-1 h-4 w-4" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 transition-colors"
            >
              <div className="relative h-48 w-full bg-neutral-800">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2 py-1 bg-neutral-800 text-neutral-300 rounded-md">
                    {cert.issuer}
                  </span>
                  <BadgeCheck className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="font-semibold text-neutral-100 mb-2">{cert.name}</h3>
                <p className="text-sm text-neutral-400 mb-6 flex-grow">
                  {cert.brief}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full rounded-md bg-neutral-800 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 transition-colors"
                >
                  Verified Link <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
