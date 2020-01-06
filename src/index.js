import newProjectTask from './model/newProjectTask';
import projectsContainer from './model/projects';
import displayProject from './views/accessProjects';


newProjectTask('Chris', 'Me!', 1, 'Jan', 'To-Do');
displayProject.displayTasks('To-Do');

const taskForm = document.querySelector('.task-form');
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('form submitted!');
});

const extractFormData = function (e) {
  const title = document.querySelector("#title").value;
  const description = document.querySelector('#description').value;
  const priority = document.querySelector('#title').value;
  const dueDate = document.querySelector('#due-date').value;
  const project = document.querySelector('#project').value;
  newProjectTask(title, description, priority, dueDate, project);
};

// Next: Basic display. Show Projects and tasks.
// add buttons with functionality - EXTRACT RADIO BUTTON VALUE
// Little bit at a time, friend
