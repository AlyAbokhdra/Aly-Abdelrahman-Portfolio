"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";
import React from "react";

export function Contact() {
  const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwlkedbd", { // Replace with actual formspree ID
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-neutral-50">Get In Touch</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            I&apos;m currently available for consulting opportunities and interesting projects.
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-neutral-900 dark:text-neutral-100" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Email</p>
                    <a href="mailto:aliabdelrahman182000@gmail.com" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                      aliabdelrahman182000@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-neutral-900 dark:text-neutral-100" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Location</p>
                    <p className="text-neutral-500 dark:text-neutral-400">Egypt / Remote</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form action="https://formspree.io/f/YOUR_FORM_ID_HERE" method="POST" onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-neutral-950 p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 sm:text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 sm:text-sm resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-4 py-3 text-sm font-medium text-white shadow transition-all hover:bg-neutral-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-offset-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>

              {formStatus === "success" && (
                <p className="text-sm text-green-600 dark:text-green-500 text-center mt-4">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-sm text-red-600 dark:text-red-500 text-center mt-4">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
