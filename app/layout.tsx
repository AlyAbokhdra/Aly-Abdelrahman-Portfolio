import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BinarySpotlight } from '@/components/binary-spotlight';

export const metadata: Metadata = {
  title: 'Aly Abdelrahman - Portfolio',
  description: 'Portfolio website for Aly Abdelrahman, Associate Software Engineer & ECM Technical Consultant.',
  openGraph: {
    title: 'Aly Abdelrahman - Portfolio',
    description: 'Portfolio website for Aly Abdelrahman, Associate Software Engineer & ECM Technical Consultant.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aly Abdelrahman - Portfolio',
    description: 'Portfolio website for Aly Abdelrahman, Associate Software Engineer & ECM Technical Consultant.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
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
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
