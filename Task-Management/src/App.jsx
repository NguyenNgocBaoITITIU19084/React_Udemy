import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectSelected, setProjectSelected] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddNewProject() {
    setProjectSelected((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleNewProjectInput(projectData) {
    const newProjectData = { ...projectData, id: Date.now() };
    setProjectSelected((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProjectData],
      };
    });
  }

  let content;

  if (projectSelected.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddNewProject={handleAddNewProject} />;
  } else if (projectSelected.selectedProjectId === null) {
    content = <NewProject onHandleInput={handleNewProjectInput} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onAddNewProject={handleAddNewProject} />
      {content}
    </main>
  );
}

export default App;
