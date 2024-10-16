import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface ProjectProps {
  params: {
    slug: string[];
  };
}

async function getProjectFromParams(params: ProjectProps["params"]) {
  const slug = params?.slug?.join("/");
  const project = allProjects.find((project) => project.slugAsParams === slug);

  if (!project) {
    null;
  }

  return project;
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const project = await getProjectFromParams(params);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams(): Promise<
  ProjectProps["params"][]
> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split("/"),
  }));
}

export default async function ProjectPage({ params }: ProjectProps) {
  const project = await getProjectFromParams(params);

  if (!project) {
    notFound();
  }

  return (
    <article className="p-6 prose dark:prose-invert">
      <h1 className="mb-2 text-3xl font-bold">{project.title}</h1>
      {project.description && (
        <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
          {project.description}
        </p>
      )}
      <div className="max-w-screen-sm py-4">
        <Mdx code={project.body.code} />
      </div>
    </article>
  );
}
