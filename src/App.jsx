import { useState } from "react";
import FallBackScreen from "./components/FallBackScreen";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleBack(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    const newProject = { ...projectData, id: Math.random()};

    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject] 
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancel={handleBack} onAdd={handleAddProject}/>;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <FallBackScreen onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen flex gap-8">
        <Sidebar onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    </>
  );
}

export default App;
