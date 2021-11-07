import { motion } from "framer-motion";

function ExpandedCard({ children, onCollapse }) {
  return (
    <>
      <motion.div
        className="card expanded"
        layoutId="expandable-card"
        onClick={onCollapse}
      >
        {children}
      </motion.div>
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
