import newTaskForm from '../views/taskForm';
import formEvents from './forms';
import newProjectTask from '../model/newProjectTask';
import displayProject from '../views/accessProjects';
import projectsContainer from '../model/projects';

const taskEvents = (function() {
  const closeTaskForm = function() {
    let taskForm = document.querySelector('.project-form');
    document.querySelector('#content').removeChild(taskForm);
  };

  const extractUpdateFormData = function(index) {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const priority = document.querySelector('#priority').value;
    const dueDate = document.querySelector('#due-date').value;
    const project = document.querySelector('#project').value;
    projectsContainer.updateTask(title, description, priority, dueDate, project, index);

    displayProject.refreshTaskDisplay();
  };

  const updateEvent = function(e) {
    console.log(e.target.getAttribute('data-index'));
    e.preventDefault();
    extractUpdateFormData(e.target.getAttribute('data-index'));
    //TODO: Empty form values
    formEvents.closeForm();
    // e.target.removeEventListener('submit', updateEvent);
  };

  const removeEventListeners = function() {
    // grabs update buttons
    const updateBttns = document.querySelectorAll('.update-bttn');
    // iterates over the node list
    updateBttns.forEach(button => {
      button.removeEventListener('submit', updateEvent);
    });
    // remove the eventlisteners for each
  };

  const displayUpdateForm = function(project, index) {
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.modal-content').appendChild(newTaskForm);
    const taskForm = document.querySelector('.task-form');
    taskForm.setAttribute('data-index', index);
    formEvents.autoFillForm(project, index);
    taskForm.addEventListener('submit', updateEvent, { once: true });
  };

  const extractTaskFormData = function() {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const priority = document.querySelector('#priority').value;
    const dueDate = document.querySelector('#due-date').value;
    const project = document.querySelector('#project').value;
    newProjectTask(title, description, priority, dueDate, project);

    displayProject.refreshTaskDisplay();
  };

  const taskSubmitEvent = function(e) {
    e.preventDefault();
    extractTaskFormData();
    // form events - remove modal content
    formEvents.closeForm();
    //TODO: add empty form
  };

  //TODO: Assign anonmyous function a name, then remove event listener upon closing
  const displayTaskForm = function() {
    document.querySelector('.modal-content').appendChild(newTaskForm);
    const taskForm = document.querySelector('.task-form');
    taskForm.addEventListener('submit', taskSubmitEvent, { once: true });
  };

  const deleteTask = function(project, index) {
    // run deleteTask from model
    projectsContainer.deleteTask(project, index);
    // refresh view
    displayProject.refreshTaskDisplay();
  };

  // Expand and Brief Views

  const expandTask = function(project, index) {};

  return {
    displayTaskForm,
    closeTaskForm,
    deleteTask,
    extractUpdateFormData,
    displayUpdateForm,
    extractTaskFormData,
    removeEventListeners
  };
})();

export { taskEvents as default };
