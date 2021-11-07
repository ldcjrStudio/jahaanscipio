import { motion } from "framer-motion";

function CardContent({ projectData, disabled }) {
  return (
    <motion.h1
      className="title"
      magicId="title"
      style={{ opacity: disabled ? 0.2 : 1 }}
    >
      {projectData}
    </motion.h1>
  );
}

export default CardContent;
