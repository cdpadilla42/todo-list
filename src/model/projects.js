// holds information on all projects available

// also holds all tasks within said projects

const projectsContainer = (function() {
  const projects = { 
    'To-Do': [],
    'Dog-Taks': []
  };

  const showProject = function(projectName) {
    return this.projects[projectName];
  };

  const addProjectToContainer = (projectName) => {
    projects[projectName] = [];
  }
  return { projects, showProject, addProjectToContainer };
}());

export { projectsContainer as default };
