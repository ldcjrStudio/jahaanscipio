import { createContext, useState, useEffect } from "react";

const ProjectContext = createContext();

export default function ProjectProvider({ children }) {
  const [id, setId] = useState(undefined);

  async function updateSelected(newId) {
    setId(newId);
  }

  return (
    <ProjectContext.Provider
      value={{
        id,
        updateSelected,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectConsumer, ProjectContext };
