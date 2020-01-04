// Creates new project category

import projectsContainer from './projects';
import Task from './newTask';

// add task to project
const addToProject = function (task, project) {
  const projectsList = projectsContainer.projects;
  for (let i = 0; i < projectsList.length; i++) {
    if (projectsList[i].name === project) {
      projectsList[i].push(task);
      return;
    }
    console.log('Error! Could not find project');
    return;
  }
}

const newTask = Task('Chris', 'Me!', 1, 'Jan', 'To-Do');


export { addToProject as default };
