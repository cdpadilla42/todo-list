import newProjectTask from './model/newProjectTask';
import displayProjectNav from './views/displayProjectNav';
import displayProject from './views/accessProjects';

// Test projects
newProjectTask('Papa', 'Me!', 1, 'Jan', 'To-Do');
newProjectTask('Jenn', 'Me!', 1, 'Jan', 'To-Do');
newProjectTask('Donna', 'Me!', 1, 'Jan', 'To-Do');

displayProjectNav.displayProjectList();

// Real code



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
