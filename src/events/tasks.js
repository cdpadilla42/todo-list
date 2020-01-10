import newTaskForm from '../views/taskForm';
import formEvents from './forms';
import newProjectTask from '../model/newProjectTask';
import displayProject from '../views/accessProjects';
import projectsContainer from '../model/projects';

const taskEvents = (function() {
  const displayTaskForm = function() {
    document.querySelector('.modal-content').appendChild(newTaskForm);
    const taskForm = document.querySelector('.task-form');
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      extractTaskFormData();
      // form events - remove modal content
      formEvents.closeForm();
    });
  }

  const closeTaskForm = function() {
    let taskForm = document.querySelector('.project-form');
    document.querySelector('#content').removeChild(taskForm);
  }

  const displayUpdateForm = function() {
    document.querySelector('.modal-content').appendChild(newTaskForm);
    const taskForm = document.querySelector('.task-form');
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      extractUpdateFormData(1);
      formEvents.closeForm();
    })
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

   const extractUpdateFormData = function(index) {
     const title = document.querySelector('#title').value;
     const description = document.querySelector('#description').value;
     const priority = document.querySelector('#priority').value;
     const dueDate = document.querySelector('#due-date').value;
     const project = document.querySelector('#project').value;
     projectsContainer.updateTask(title, description, priority, dueDate, project, index);

     displayProject.refreshTaskDisplay();
   }

  const deleteTask = function(project, index) {
     // run deleteTask from model
    projectsContainer.deleteTask(project, index);
     // refresh view
    displayProject.refreshTaskDisplay();
   }

  return { displayTaskForm, closeTaskForm, deleteTask, extractUpdateFormData, displayUpdateForm, extractTaskFormData };
}());

export { taskEvents as default };
