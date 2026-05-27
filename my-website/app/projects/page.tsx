import type { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectsIntro from "@/components/projects/ProjectsIntro";
import { projects } from "@/components/projects/projects-data";

export const metadata: Metadata = {
  title: "Nebiyou Hailemariam – Projects",
  description:
    "Open-source projects in machine learning, NLP, multi-agent systems, recommender systems, and deep learning.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsIntro />
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </main>
  );
}
