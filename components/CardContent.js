import { motion } from "framer-motion";
import Image from "next/image";

function CardContent({ project, disabled }) {
  return (
    <div className="project-item border-2 border-black">
      <motion.h1
        className="title"
        magicId="title"
        style={{ opacity: disabled ? 0.2 : 1 }}
      >
        <div className="img-wrapper p-3">
          <Image
            alt={project.fields.Name}
            src={project.fields.Images[0].url}
            width="175"
            height="175"
          />
        </div>
        <div className="px-3 border-t-2 border-black bg-white">
          <p>{project.fields.Name}</p>
        </div>
      </motion.h1>
    </div>
  );
}

export default CardContent;
