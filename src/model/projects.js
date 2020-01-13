// holds information on all projects available

// also holds all tasks within said projects

const projectsContainer = (function() {
  const checkLocalStorage = function() {
    if (!localStorage.getItem('projects')) {
      return populateStorage();
    } else {
      return setProjects();
    }
  };

  const populateStorage = function() {
    return {
      'To-Do': [
        {
          title: 'Call Mom',
          description: 'Catch up on her week',
          priority: 1,
          dueDate: 'Today, 8:00 pm',
          project: 'To-Do'
        }
      ],
      'Dog-Tasks': [
        {
          title: 'Walk Lucy',
          description: 'Get some fresh air!',
          priority: 1,
          dueDate: 'Today, 6:00 pm',
          project: 'Dog-Tasks'
        }
      ]
    };
  };

  let projects = checkLocalStorage();

  const showProject = function(projectName) {
    return projects[projectName];
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

  const completeFaslify = function(project, index) {
    projects[project][index].complete = false;
  };

  const completeTruthify = function(project, index) {
    projects[project][index].complete = true;
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
    updateTask,
    completeTruthify,
    completeFaslify,
    checkLocalStorage
  };
})();

export { projectsContainer as default };
