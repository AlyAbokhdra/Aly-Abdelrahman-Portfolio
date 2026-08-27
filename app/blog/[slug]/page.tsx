import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostData, getSortedPostsData } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const postData = getPostData(resolvedParams.slug);

  if (!postData) {
    notFound();
  }

  return (
    <article className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
      <Link
        href="/blog"
        className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>
      
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
          {postData.title}
        </h1>
        <div className="flex items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <time dateTime={postData.date}>{postData.date}</time>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>{postData.readTime}</span>
          </div>
        </div>
      </header>

      <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-neutral-900 dark:prose-a:text-neutral-100 hover:prose-a:text-neutral-600 dark:hover:prose-a:text-neutral-300">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{postData.content}</ReactMarkdown>
      </div>
    </article>
  );
}
