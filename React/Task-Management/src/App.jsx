import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectSelected, setProjectSelected] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const selectedProject = projectSelected.projects.find(
    (project) => project.id === projectSelected.selectedProjectId
  );

  // functions to handle taks state

  function handleAddNewTask(taskData) {
    setProjectSelected((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, taskData],
      };
    });
  }

  function handDeleteTask(taskId) {
    setProjectSelected((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
      };
    });
  }

  function handleDoneTask(taskId) {
    setProjectSelected((prevState) => {
      const updateTask = prevState.tasks.find((task) => task.id === taskId);
      return {
        ...prevState,
        tasks: [
          ...prevState.tasks.filter((task) => task.id !== taskId),
          { ...updateTask, isDone: true },
        ],
      };
    });
  }

  function handleNotYet(taskId) {
    setProjectSelected((prevState) => {
      const updateTask = prevState.tasks.find((task) => task.id === taskId);
      return {
        ...prevState,
        tasks: [
          ...prevState.tasks.filter((task) => task.id !== taskId),
          { ...updateTask, isDone: false },
        ],
      };
    });
  }

  // function to handle project state

  function handleAddNewProject() {
    setProjectSelected((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelNewProject() {
    setProjectSelected((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectSelected((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleDeleteProject(projectId) {
    setProjectSelected((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: projectSelected.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleNewProjectInput(projectData) {
    const newProjectData = { ...projectData, id: Date.now() };
    setProjectSelected((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProjectData],
      };
    });
  }

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddNewTask={handleAddNewTask}
      onDeleteTask={handDeleteTask}
      onDoneTask={handleDoneTask}
      onNotYet={handleNotYet}
      tasks={projectSelected.tasks}
    />
  );

  if (projectSelected.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddNewProject={handleAddNewProject} />;
  } else if (projectSelected.selectedProjectId === null) {
    content = (
      <NewProject
        onHandleInput={handleNewProjectInput}
        onHandleCancel={handleCancelNewProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onAddNewProject={handleAddNewProject}
        onSelectedProject={handleSelectProject}
        projects={projectSelected.projects}
        selectedProjectId={projectSelected.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
