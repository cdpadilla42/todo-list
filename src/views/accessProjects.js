// pulls data from projects for DOM elements
import projectsContainer from '../model/projects';


const displayProject = (function () {
  const createTaskDisplay = function(task, projectDiv) {
    const displayedTask = document.createElement('div');
    // displayedTask.attributes.add('class', `${task.title}`);
    displayedTask.innerText = `${task.title}, ${task.description}`;
    projectDiv.appendChild(displayedTask);
  };
  
  const displayTasks = function (project) {
    const projectDiv = document.createElement('div');
    const currentProject = projectsContainer.showProject(project);
    
    for(var i = 0; i < currentProject.length; i++) {
      console.log(currentProject[i]);
      createTaskDisplay(currentProject[i], projectDiv);
    }
    const content = document.querySelector('#content');
    content.appendChild(projectDiv);
    
  };
  return { displayTasks, createTaskDisplay };
}());

export { displayProject as default };