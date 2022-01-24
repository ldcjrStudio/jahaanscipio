import React from "react";
import Image from "next/image";

export default function ProjectCard({ project }) {
  console.log(project);
  return (
    <div
      key={project.id}
      className="project-card border-2 border-black bg-white relative m-6"
    >
      <div className="card-header">
        <div className="img-wrapper p-3">
          <Image
            alt={project.fields.Name}
            src={project.fields.Images[0].url}
            width="175"
            height="175"
          />
        </div>
      </div>

      <div className="card-content px-3 border-t-2 border-black bg-white">
        <h2>Title</h2>
        <p>Eu tempor ullamco enim labore officia ut anim elit.</p>
      </div>
    </div>
  );
}
