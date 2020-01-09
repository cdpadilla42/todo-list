import newTaskForm from '../views/taskForm';
import formEvents from './forms';
import newProjectTask from '../model/newProjectTask';
import displayProject from '../views/accessProjects';

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

   const submitNewTaskForm = function() {
    //submit data from form, like below

    //  const title = document.querySelector('#project-title').value;
    //  projectsContainer.addProjectToContainer(title);
    //  displayProjectNav.refreshProjectDisplay();
    //  formEvents.closeForm();
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

  return { displayTaskForm, closeTaskForm };
}());

export { taskEvents as default };
