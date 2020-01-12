// pulls data from projects for DOM elements
import projectsContainer from '../model/projects';
import taskEvents from '../events/tasks';

const displayProject = (function() {
  const createTaskDisplay = function(task, projectDiv, index) {
    const displayedTask = document.createElement('div');
    displayedTask.classList.add('single-task-div');

    let deleteBttn = document.createElement('span');
    deleteBttn.classList.add('delete-bttn');
    deleteBttn.innerText = 'X';
    deleteBttn.addEventListener('click', () => {
      taskEvents.deleteTask(task.project, index);
    });

    let updateBttn = document.createElement('span');
    updateBttn.classList.add('update-bttn');
    updateBttn.innerText = 'Update';
    updateBttn.addEventListener('click', () => {
      taskEvents.displayUpdateForm(task.project, index);
    });

    const expansion = document.createElement('div');
    expansion.classList.add('expansion');
    expansion.classList.add('hidden');
    expansion.innerText = `${task.description} // ${task.dueDate}`;

    let expandBttn = document.createElement('span');
    expandBttn.classList.add('expand-bttn');
    expandBttn.innerText = 'Expand';
    expandBttn.addEventListener('click', () => {
      expansion.classList.toggle('hidden');
    });

    displayedTask.setAttribute('data-index', `${index}`);
    displayedTask.innerText = `${task.title}`;

    displayedTask.appendChild(updateBttn);
    displayedTask.appendChild(deleteBttn);
    displayedTask.appendChild(expandBttn);
    displayedTask.appendChild(expansion);
    projectDiv.appendChild(displayedTask);
  };

  const content = document.querySelector('#content');

  const displayTasks = function(selectedProject) {
    let projectDiv = document.createElement('div');
    let currentProject = projectsContainer.showProject(selectedProject);

    for (var i = 0; i < currentProject.length; i++) {
      console.log(currentProject[i]);
      createTaskDisplay(currentProject[i], projectDiv, i);
    }

    content.appendChild(projectDiv);
  };

  const displayExpandedTask = function(project, index) {};

  const refreshTaskDisplay = function(project) {
    content.innerHTML = '';
    displayTasks(project);
  };
  return { displayTasks, createTaskDisplay, refreshTaskDisplay };
})();

export { displayProject as default };
