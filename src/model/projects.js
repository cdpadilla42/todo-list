// holds information on all projects available

// also holds all tasks within said projects

const projectsContainer = (function() {
  const setProjects = function() {
    return JSON.parse(localStorage.getItem('projects'));
  };

  const updateStorage = function() {
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const checkLocalStorage = function() {
    if (!localStorage.getItem('projects')) {
      return populateStorage();
    }
    return setProjects();
  };

  const populateStorage = function() {
    return {
      'To-Do': [
        {
          title: 'Call Doctor',
          description: 'Set appointment',
          priority: 1,
          dueDate: 'Today, 8:00 pm',
          project: 'To-Do'
        },
        {
          title: 'Schedule Car Repair',
          description: 'Set appointment',
          priority: 1,
          dueDate: 'Today, 3:00 pm',
          project: 'To-Do'
        },
        {
          title: 'Clean Bathroom',
          description: 'For game night this weekend',
          priority: 1,
          dueDate: 'Saturday, 12:00 pm',
          project: 'To-Do'
        }
      ],
      'Dog-Tasks': [
        {
          title: 'Walk Lucy',
          description: 'Get some fresh air!',
          priority: 1,
          dueDate: 'Today, 5:00 pm',
          project: 'Dog-Tasks'
        },
        {
          title: 'Feed Lucy',
          description: 'Give medicine!',
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
    updateStorage();
  };

  const deleteTask = function(project, index) {
    projects[project].splice(index, 1);
    updateStorage();
  };

  const updateTask = function(title, description, priority, dueDate, project, index) {
    projects[project][index].title = title;
    projects[project][index].description = description;
    projects[project][index].priority = priority;
    projects[project][index].dueDate = dueDate;
    projects[project][index].project = project;
    updateStorage();
  };

  const completeFaslify = function(project, index) {
    projects[project][index].complete = false;
    updateStorage();
  };

  const completeTruthify = function(project, index) {
    projects[project][index].complete = true;
    updateStorage();
  };

  const addProjectToContainer = projectName => {
    projects[projectName] = [];
    updateStorage();
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
    checkLocalStorage,
    updateStorage
  };
})();

export { projectsContainer as default };
