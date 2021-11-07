import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import CardContent from "../components/CardContent";
import CompactCard from "../components/CompactCard";
import ExpandedCard from "../components/ExpandedCard";

function ProjectCard({ day, onCollapse, onExpand, disabled }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const collapseDate = () => {
    setIsExpanded(false);
    onCollapse();
  };

  const expandDate = () => {
    setIsExpanded(true);
    onExpand();
  };
  return (
    <div>
      <AnimateSharedLayout>
        {isExpanded ? (
          <ExpandedCard onCollapse={collapseDate} day={day}>
            <CardContent projectData={day} disabled={disabled} />
          </ExpandedCard>
        ) : (
          <CompactCard onExpand={expandDate} disabled={disabled} day={day}>
            <CardContent projectData={day} disabled={disabled} />
          </CompactCard>
        )}
      </AnimateSharedLayout>
    </div>
  );
}

export default ProjectCard;
