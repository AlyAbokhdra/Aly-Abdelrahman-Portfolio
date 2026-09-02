import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BinarySpotlight } from '@/components/binary-spotlight';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://aly-abokhdra.vercel.app'),
  title: 'Aly Abokhdra | ECM Consultant & Software Engineer',
  description: 'Portfolio of Aly Abokhdra, Associate ECM Technical Consultant and Full-Stack Software Engineer specializing in IBM FileNet and Datacap.',
  keywords: ['Aly Abokhdra', 'Aly Abdelrahman', 'ECM Consultant', 'Software Engineer', 'IBM FileNet', 'Datacap', 'Egypt'],
  verification: {
    google: 'ghB0HGpZKNJjXI0HFEIjlqnHIwpyefyjqdceALiGiOc',
  },
  openGraph: {
    title: 'Aly Abokhdra | ECM Consultant & Software Engineer',
    description: 'Enterprise architecture, ECM consulting, and full-stack engineering portfolio.',
    url: 'https://aly-abokhdra.vercel.app',
    siteName: 'Aly Abokhdra Portfolio',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aly Abokhdra - Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="bg-[#fafafa] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-300 antialiased selection:bg-neutral-200 selection:text-neutral-900 dark:selection:bg-neutral-800 dark:selection:text-neutral-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BinarySpotlight />
          <div className="relative flex min-h-screen flex-col z-10">
            <Header />
            <main className="flex-1">{children}</main>
            <Analytics />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
