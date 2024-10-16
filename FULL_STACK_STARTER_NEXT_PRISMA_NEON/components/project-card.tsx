import { Project } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

export const ProjectCard = async (project: Project) => {
  return (
    <Link href={project.url}>
        <Image
          className="rounded-xl"
          src={project.image}
          alt={`Image for ${project.title}`}
          width={350}
          height={350}
        />
    </Link>
  );
};
