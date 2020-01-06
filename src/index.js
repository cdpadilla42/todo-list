import newProjectTask from './model/newProjectTask';
import projectsContainer from './model/projects';

newProjectTask('Chris', 'Me!', 1, 'Jan', 'To-Do');
console.log(projectsContainer.projects);
console.log(projectsContainer.showProject);

const taskForm = document.querySelector('.task-form');
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('form submitted!');
});

const extractFormData = function (e) {
  let title = document.querySelector("#title").value;
  let description = document.querySelector('#description').value;
  let priority = document.querySelector('#title').value;
  let dueDate = document.querySelector('#due-date').value;
  let project = document.querySelector('#project').value;
  newProjectTask(title, description, priority, dueDate, project);
  return;
}

// Next: Basic display. Show Projects and tasks.
// add buttons with functionality - EXTRACT RADIO BUTTON VALUE
// Little bit at a time, friend
