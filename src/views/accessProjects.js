// pulls data from projects for DOM elements
import projectsContainer from '../model/projects';


const displayProject = (function () {
  // let currentProjectName = 'To-Do';

  const createTaskDisplay = function(task, projectDiv) {
    const displayedTask = document.createElement('div');
    // displayedTask.attributes.add('class', `${task.title}`);
    displayedTask.innerText = `${task.title}, ${task.description}`;
    projectDiv.appendChild(displayedTask);
  };
  
  const content = document.querySelector('#content');

  const displayTasks = function (selectedProject) {
    let projectDiv = document.createElement('div');
    let currentProject = projectsContainer.showProject(selectedProject);
    
    for(var i = 0; i < currentProject.length; i++) {
      console.log(currentProject[i]);
      createTaskDisplay(currentProject[i], projectDiv);
    }
    
    content.appendChild(projectDiv);
    
  };

  const refreshTaskDisplay = function() {
    content.innerHTML = '';
    displayTasks('To-Do');
  }
  return { displayTasks, createTaskDisplay, refreshTaskDisplay };
}());

export { displayProject as default };