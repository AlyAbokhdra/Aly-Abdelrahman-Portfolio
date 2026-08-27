import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/Certifications";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { getSortedPostsData } from "@/lib/blog";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Blog posts={allPostsData} />
      <Contact />
    </>
  );
}
