// holds information on all projects available

// also holds all tasks within said projects

const projectsContainer = (function () {
  const projects = { 'To-Do': [] };
  return { projects };
}());

export { projectsContainer as default };
