import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import CardContent from "../components/CardContent";
import CompactCard from "../components/CompactCard";
import ExpandedCard from "../components/ExpandedCard";

function ProjectCard({ project, onCollapse, onExpand, disabled }) {
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
    <div className=" card-container m-6">
      <AnimateSharedLayout type="crossfade">
        {isExpanded ? (
          <ExpandedCard onCollapse={collapseDate} project={project}>
            <CardContent
              project={project}
              isExpanded={isExpanded}
              disabled={disabled}
            />
          </ExpandedCard>
        ) : (
          <CompactCard
            onExpand={expandDate}
            disabled={disabled}
            project={project}
          >
            <CardContent project={project} disabled={disabled} />
          </CompactCard>
        )}
      </AnimateSharedLayout>
    </div>
  );
}

export default ProjectCard;
