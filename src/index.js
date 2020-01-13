import newProjectTask from './model/newProjectTask';
import displayProjectNav from './views/displayProjectNav';
import displayProject from './views/accessProjects';
import projectsContainer from './model/projects';
import projectEvents from './events/projects';
import taskEvents from './events/tasks';
import formEvents from './events/forms';

projectsContainer.checkLocalStorage();
displayProjectNav.displayProjectList();
displayProject.displayTasks('To-Do');

// MODAL JS
const newFormBttn = document.querySelector('#open-proj-form');
const modal = document.querySelector('.modal');
newFormBttn.addEventListener('click', () => {
  modal.style.display = 'block';
  projectEvents.openNewProjectForm();
});

console.log('test');

const newTaskBttn = document.querySelector('#open-task-form');
newTaskBttn.addEventListener('click', () => {
  modal.style.display = 'block';
  taskEvents.displayTaskForm();
});

window.onclick = function(event) {
  if (event.target === modal) {
    formEvents.closeForm();
  }
};
