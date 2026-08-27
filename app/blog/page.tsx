import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";
import { getSortedPostsData } from "@/lib/blog";

export default function BlogList() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen">
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-2">
          Technical Blog
        </h1>
        <div className="w-16 h-1 bg-neutral-900 dark:bg-neutral-100 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPostsData.map((post) => (
          <article
            key={post.slug}
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
          </article>
        ))}
      </div>
    </div>
  );
}
