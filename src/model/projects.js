// holds information on all projects available

// also holds all tasks within said projects

const projectsContainer = (function() {
  let projects = { 
    'To-Do': [],
    'Dog-Tasks': []
  };

  const showProject = function(projectName) {
    return this.projects[projectName];
  };

  const deleteProject = function (selectedProject) {
    delete projects[selectedProject];
  };

  const addProjectToContainer = (projectName) => {
    projects[projectName] = [];
  }
  return { projects, showProject, addProjectToContainer, deleteProject };
}());

export { projectsContainer as default };
