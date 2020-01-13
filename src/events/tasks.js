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

    displayProject.refreshTaskDisplay(project);
  };

  const updateEvent = function(e) {
    console.log(e.target.getAttribute('data-index'));
    e.preventDefault();
    extractUpdateFormData(e.target.getAttribute('data-index'));
    formEvents.closeForm();
  };

  const removeEventListeners = function() {
    const updateBttns = document.querySelectorAll('.update-bttn');
    updateBttns.forEach(button => {
      button.removeEventListener('submit', updateEvent);
    });
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

    displayProject.refreshTaskDisplay(project);
  };

  const taskSubmitEvent = function(e) {
    e.preventDefault();
    extractTaskFormData();
    formEvents.closeForm();
  };

  const displayTaskForm = function() {
    document.querySelector('.modal-content').appendChild(newTaskForm);
    const taskForm = document.querySelector('.task-form');
    taskForm.addEventListener('submit', taskSubmitEvent, { once: true });
  };

  const deleteTask = function(project, index) {
    projectsContainer.deleteTask(project, index);
    displayProject.refreshTaskDisplay(project);
  };

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
