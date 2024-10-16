import { FeaturesSection } from "@/components/layout/features-section";
import { BookingSection } from "../components/layout/booking";
import { CTASection } from "../components/layout/cta-section";
import { allPosts, allProjects as projects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { PostsSection } from "../components/layout/posts-section";
import { ProjectsSection } from "../components/layout/projects-section";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <CTASection />
      <FeaturesSection />
      <ProjectsSection projects={projects} />
      <PostsSection posts={posts} />
      <BookingSection />
    </>
  );
}
