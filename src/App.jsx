import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";


function App() {
  ///////////////////////////
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  ////////////////////////////

  function handleAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }
  ////////////////////////////
  function handleNewProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...projectState.projects, newProject]
      }
    })
  }
  ////////////////////////////
  let content;

  if (projectState.selectedProjectId === null)
  {

    content = <NewProject onAdd={handleNewProject} />
  } else if (projectState.selectedProjectId === undefined)
  {
    content = <NoProjectSelected handleAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar handleAddProject={handleAddProject} projects={projectState.projects} />
      {/* <NewProject /> */}
      {content}
    </main>
  );
}

export default App;
