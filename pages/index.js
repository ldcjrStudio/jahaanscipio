import Head from "next/head";
import getProjects from "../lib/projects";

export default function Home({ projects }) {
  console.log(projects);
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      {projects.map((project) => (
        <div key={project.id}>
          <p>{project.fields.Name}</p>
        </div>
      ))}
    </section>
  );
}

export async function getStaticProps({}) {
  const projects = await getProjects();

  return {
    props: { projects },
  };
}
