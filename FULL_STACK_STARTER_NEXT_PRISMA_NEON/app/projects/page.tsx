import { allProjects as projects } from "contentlayer/generated";
import { ProjectsSection } from "@/components/layout/projects-section";

export default function ProjectsPage() {

  return (
    <>
      <ProjectsSection projects={projects} />
    </>
  );
}
