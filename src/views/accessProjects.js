// pulls data from projects for DOM elements
import projectsContainer from '../model/projects';
import taskEvents from '../events/tasks';

const displayProject = (function() {
  const createTaskDisplay = function(task, projectDiv, index) {
    const displayedTask = document.createElement('div');
    let deleteBttn = document.createElement('span');
    deleteBttn.classList.add('delete-bttn');
    deleteBttn.innerText = 'X';
    deleteBttn.addEventListener('click', () => {
      taskEvents.deleteTask(task.project, index);
    });
    let updateBttn = document.createElement('span');
    updateBttn.classList.add('update-bttn');
    updateBttn.innerText = 'Update';
    updateBttn.addEventListener('click', () => {
      taskEvents.displayUpdateForm(task.project, index);
    });
    displayedTask.setAttribute('data-index', `${index}`);
    displayedTask.innerText = `${task.title}, ${task.description}, ${task.project}`;

    displayedTask.appendChild(updateBttn);
    displayedTask.appendChild(deleteBttn);
    projectDiv.appendChild(displayedTask);
  };

  const content = document.querySelector('#content');

  const displayTasks = function(selectedProject) {
    let projectDiv = document.createElement('div');
    let currentProject = projectsContainer.showProject(selectedProject);

    for (var i = 0; i < currentProject.length; i++) {
      console.log(currentProject[i]);
      createTaskDisplay(currentProject[i], projectDiv, i);
    }

    content.appendChild(projectDiv);
  };

  const refreshTaskDisplay = function() {
    content.innerHTML = '';
    displayTasks('To-Do');
  };
  return { displayTasks, createTaskDisplay, refreshTaskDisplay };
})();

export { displayProject as default };
