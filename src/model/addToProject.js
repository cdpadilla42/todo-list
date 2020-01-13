// Creates new project category

import projectsContainer from './projects';

// add task to project
const addToProject = function(task) {
  projectsContainer.projects[task.project].push(task);
  projectsContainer.updateStorage();
};

export { addToProject as default };
