import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectContext } from "../context/projectContext";

function Card({ project }) {
  const { updateSelected } = useContext(ProjectContext);
  return (
    <motion.li
      className="card m-8"
      onClick={() => {
        updateSelected(project.id);
      }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
    >
      <div className="card-container">
        <motion.div
          className="card-content"
          layoutId={`card-container-${project.id}`}
        >
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${project.id}`}
          >
            <div className="img-wrapper relative w-32 h-32">
              <Image
                alt={project.fields.Name}
                src={project.fields.Images[0].url}
                layout="fill"
                objectFit="coverf"
              />
            </div>
          </motion.div>

          <motion.div
            className="title-container"
            layoutId={`title-container-${project.id}`}
          >
            <h1 className="text-black">{project.fields.Name}</h1>
          </motion.div>
        </motion.div>
      </div>
    </motion.li>
  );
}

export default function List({ selectedId, projects }) {
  return (
    <ul className="card-list flex flex-row flex-wrap max-w-xl">
      {projects.map((project) =>
        project.fields.Status === "live" ? (
          <Card
            key={project.id}
            project={project}
            isSelected={project.id === selectedId}
          />
        ) : (
          ""
        )
      )}
    </ul>
  );
}
