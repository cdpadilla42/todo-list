import newProjectTask from './model/newProjectTask';
import displayProjectNav from './views/displayProjectNav';
import displayProject from './views/accessProjects';
import newProject from './model/newProject';
import projectsContainer from './model/projects';
import projectEvents from './events/projects';
import taskEvents from './events/tasks';

// Test projects
newProjectTask('Papa', 'Me!', 1, 'Jan', 'To-Do');
newProjectTask('Jenn', 'Me!', 1, 'Jan', 'To-Do');
newProjectTask('Donna', 'Me!', 1, 'Jan', 'To-Do');

displayProjectNav.displayProjectList();

// Real code



displayProject.displayTasks('To-Do');

const extractTaskFormData = function () {
  const title = document.querySelector("#title").value;
  const description = document.querySelector('#description').value;
  const priority = document.querySelector('#priority').value;
  const dueDate = document.querySelector('#due-date').value;
  const project = document.querySelector('#project').value;
  newProjectTask(title, description, priority, dueDate, project);
  
  displayProject.refreshTaskDisplay();
};



// -------------------------

projectEvents.deleteProject('Dog-Tasks');
console.log(projectsContainer.projects);

// -------------------------


const newFormBttn = document.querySelector('#open-proj-form');
newFormBttn.addEventListener('click', projectEvents.openNewProjectForm); // IDK what's keeping this from adding multiples, but ok!!


const newTaskBttn = document.querySelector('#open-task-form');
newTaskBttn.addEventListener('click', taskEvents.displayTaskForm); // IDK What's also keeping THIS from adding multiples, but also OK!!

// taskEvents.displayTaskForm();

// Next: 
// CSS: add buttons with functionality - EXTRACT RADIO BUTTON VALUE
// JS: update task
// Little bit at a time, friend
