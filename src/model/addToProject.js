// Creates new project category

import projectsContainer from './projects';

// add task to project
const addToProject = function (task) {
  const projectsObj = projectsContainer.projects;
  projectsObj[task.project].push(task);
};

export { addToProject as default };
