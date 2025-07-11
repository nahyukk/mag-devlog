import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectPost } from "@/types/project";
import Link from "next/link";
import styles from "./Project.module.css";

interface ProjectListProps {
  posts: ProjectPost[];
}

const ProjectList = ({ posts }: ProjectListProps) => {
  return (
    <section className={styles.projectGrid}
    >
      {posts.map((post) => (
        <Link key={post.slug} href={`/projects/${post.slug}`} passHref>
          <ProjectCard
            key={post.slug}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
          />
        </Link>
      ))}
    </section>
  );
};

export default ProjectList;