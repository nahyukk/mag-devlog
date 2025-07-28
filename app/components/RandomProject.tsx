"use client";

import { useEffect, useState } from "react";
import ProjectList from "./Project/ProjectList";
import { ProjectPostWithFilter } from "@/types/project";


interface Props {
  projects: ProjectPostWithFilter[];
}

export default function RandomProject({ projects }: Props) {
  const [randomProjects, setRandomProjects] = useState<ProjectPostWithFilter[]>([]);

  useEffect(() => {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    setRandomProjects(shuffled.slice(0, 2));
  }, [projects]);

  if (!randomProjects.length) return null;

  return <ProjectList posts={randomProjects} />;
}