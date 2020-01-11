import newProjectTask from './model/newProjectTask';
import displayProjectNav from './views/displayProjectNav';
import displayProject from './views/accessProjects';
import newProject from './model/newProject';
import projectsContainer from './model/projects';
import projectEvents from './events/projects';
import taskEvents from './events/tasks';
import formEvents from './events/forms';

// Test projects
newProjectTask('Papa', 'Me!', 1, 'Jan', 'To-Do');
newProjectTask('Jenn', 'Me!', 1, 'Jan', 'To-Do');
newProjectTask('Donna', 'Me!', 1, 'Jan', 'To-Do');
projectsContainer.updateTask('New', 'Wow', 1, 'Now', 'To-Do', 0);

displayProjectNav.displayProjectList();

// Real code

displayProject.displayTasks('To-Do');

// -------------------------

// -------------------------

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

// Update event listener test
const updateBttn = document.querySelector('#update');
updateBttn.addEventListener('click', () => {
  modal.style.display = 'block';
  taskEvents.displayUpdateForm();
  formEvents.autoFillForm('To-Do', 1);
});

// taskEvents.displayTaskForm();

// Next:
// CSS: add buttons with functionality - EXTRACT RADIO BUTTON VALUE
// JS: update task
// Little bit at a time, friend
