import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import Tasks from "./components/Tasks.jsx";


function App() {
  ///////////////////////////
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
  ////////////////////////////
  function handleAddTask(text) {
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask() { }
  ///////////////////////////

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

  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }

    })
  };

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  };
  function handleDeleteProject() {
    setProjectState((pervState) => {
      return {
        ...pervState,
        selectedProjectId: undefined,
        projects: pervState.projects.filter((project) => project.id !== pervState.selectedProjectId)
      }
    })
  }
  ////////////////////////////
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
  let content = <SelectedProject tasks={projectState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} onDelete={handleDeleteProject} project={selectedProject} />;

  if (projectState.selectedProjectId === null)
  {

    content = <NewProject onAdd={handleNewProject} onCancel={handleCancel} />
  } else if (projectState.selectedProjectId === undefined)
  {
    content = <NoProjectSelected handleAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onSelectProject={handleSelectProject} handleAddProject={handleAddProject} projects={projectState.projects} selectedProjectId={projectState.selectedProjectId} />
      {/* <NewProject /> */}
      {content}
    </main>
  );
}

export default App;
