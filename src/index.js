import newProjectTask from './model/newProjectTask';
import displayProjectNav from './views/displayProjectNav';
import displayProject from './views/accessProjects';
import newProject from './model/newProject';
import projectsContainer from './model/projects';
import projectEvents from './events/projects';

// Test projects
newProjectTask('Papa', 'Me!', 1, 'Jan', 'To-Do');
newProjectTask('Jenn', 'Me!', 1, 'Jan', 'To-Do');
newProjectTask('Donna', 'Me!', 1, 'Jan', 'To-Do');

displayProjectNav.displayProjectList();

// Real code



displayProject.displayTasks();

const extractTaskFormData = function () {
  const title = document.querySelector("#title").value;
  const description = document.querySelector('#description').value;
  const priority = document.querySelector('#priority').value;
  const dueDate = document.querySelector('#due-date').value;
  const project = document.querySelector('#project').value;
  newProjectTask(title, description, priority, dueDate, project);
  
  displayProject.refreshTaskDisplay();
};

const taskForm = document.querySelector('.task-form');
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('form submitted!');
  extractTaskFormData();
});

// -------------------------

const extractProjectFormData = function() {
  // const title = document.querySelector('#project-title').value;
  // projectsContainer.addProjectToContainer(title);
  // displayProjectNav.refreshProjectDisplay();
};

const projectForm = document.querySelector('.new-proj-form');
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // *** TODO REPLACE WITH submitNewProjectForm from Project Event
  projectEvents.submitNewProjectForm();
});

// Next: 
// CSS: add buttons with functionality - EXTRACT RADIO BUTTON VALUE
// JS: update task
// Little bit at a time, friend