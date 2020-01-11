// holds information on all projects available

// also holds all tasks within said projects

const projectsContainer = (function() {
  // eslint-disable-next-line prefer-const
  let projects = {
    'To-Do': [],
    'Dog-Tasks': []
  };

  const showProject = function(projectName) {
    return this.projects[projectName];
  };

  const deleteProject = function(selectedProject) {
    delete projects[selectedProject];
  };

  const deleteTask = function(project, index) {
    projects[project].splice(index, 1);
  };

  const updateTask = function(title, description, priority, dueDate, project, index) {
    projects[project][index].title = title;
    projects[project][index].description = description;
    projects[project][index].priority = priority;
    projects[project][index].dueDate = dueDate;
    projects[project][index].project = project;
  };

  const addProjectToContainer = projectName => {
    projects[projectName] = [];
  };
  return {
    projects,
    showProject,
    addProjectToContainer,
    deleteProject,
    deleteTask,
    updateTask
  };
})();

export { projectsContainer as default };
