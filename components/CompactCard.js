import { motion } from "framer-motion";
import Image from "next/image";

function CompactCard({ project, children, onExpand, disabled }) {
  return (
    <motion.div
      className="card compact order-2 border-black bg-white relative"
      layoutId="expandable-card"
      onClick={disabled ? undefined : onExpand}
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
    </motion.div>
  );
}

export default CompactCard;
