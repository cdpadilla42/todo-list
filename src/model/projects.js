// holds information on all projects available

// also holds all tasks within said projects

const projectsContainer = (function() {
  const projects = { 'To-Do': [] };
  const showProject = function(project) {
    return this.projects[project];
  };
  return { projects, showProject };
}());

export { projectsContainer as default };
