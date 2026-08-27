import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-transparent dark:border-neutral-800 relative z-10">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              © {new Date().getFullYear()} Aly Abdelrahman. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4 text-neutral-500 dark:text-neutral-400">
            <Link
              href="https://github.com/AlyAbokhdra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alydev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:alyabokhdra@gmail.com"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
