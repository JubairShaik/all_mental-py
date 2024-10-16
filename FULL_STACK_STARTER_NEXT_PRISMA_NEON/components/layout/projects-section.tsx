import { Project } from "contentlayer/generated";
import { ProjectCard } from "../project-card";
import { H1, SectionWrapper } from "../typography";

export const ProjectsSection = async ({projects}:{projects: Project[]}) => {

    return (
      <SectionWrapper>
        <H1>Projects</H1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </SectionWrapper>
    );

}
