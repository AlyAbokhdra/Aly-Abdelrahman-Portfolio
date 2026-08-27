"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export function Blog({ posts = [] }: { posts?: BlogPost[] }) {
  // If no posts provided, use empty state or we can just render the ones we have.
  const displayPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-neutral-900 dark:text-neutral-50">Technical Blog</h2>
            <div className="w-16 h-1 bg-neutral-900 dark:bg-neutral-100 rounded"></div>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline"
          >
            View all articles
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-start justify-between border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-x-4 text-xs mb-4">
                <time dateTime={post.date} className="text-neutral-500">
                  {post.date}
                </time>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <span className="flex items-center text-neutral-500">
                  <BookOpen className="mr-1 h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-xl font-bold leading-6 text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
