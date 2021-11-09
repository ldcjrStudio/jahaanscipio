import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function ExpandedCard({ children, onCollapse, project }) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="card expanded border-2 border-black bg-white relative"
          layoutId="expandable-card"
          onClick={onCollapse}
          initial={{ opacity: 0, scale: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.4 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className="img-wrapper p-3">
            <Image
              alt={project.fields.Name}
              src={project.fields.Images[0].url}
              width="200"
              height="200"
            />
          </div>
          <div className="px-3 border-t-2 border-black bg-white">
            <p>{project.fields.Name}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* <motion.p
        className="card expanded secondary"
        onClick={onCollapse}
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0, top: "6rem" }}
        animate={{ opacity: 1, top: "3rem" }}
      >
        Today is clear
      </motion.p> */}
    </>
  );
}

export default ExpandedCard;
