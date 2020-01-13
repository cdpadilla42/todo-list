// pulls data from projects for DOM elements
import projectsContainer from '../model/projects';
import taskEvents from '../events/tasks';

const displayProject = (function() {
  const createTaskDisplay = function(task, projectDiv, index) {
    const displayedTask = document.createElement('div');
    displayedTask.classList.add('single-task-div');

    const briefView = document.createElement('div');
    briefView.classList.add('brief-view-div');

    const displayText = document.createElement('span');
    displayText.innerText = `${task.title}`;

    const completeBox = document.createElement('input');
    completeBox.setAttribute('type', 'checkbox');
    completeBox.setAttribute('class', 'checkbox');
    completeBox.setAttribute('data-index', index);
    if (task.complete) {
      completeBox.checked = true;
      displayedTask.classList.add('complete');
    }
    completeBox.addEventListener('change', e => {
      console.log(e.target.checked);
      displayedTask.classList.toggle('complete');
      if (e.target.checked) {
        // update task completion
        projectsContainer.completeTruthify(task.project, index);
      } else {
        projectsContainer.completeFaslify(task.project, index, false);
      }
    });

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
    const expansionText = document.createElement('span');
    expansionText.innerText = `${task.description} // ${task.dueDate}`;
    expansion.appendChild(expansionText);

    let expandBttn = document.createElement('span');
    expandBttn.classList.add('expand-bttn');
    expandBttn.innerText = 'Expand';
    expandBttn.addEventListener('click', () => {
      expansion.classList.toggle('hidden');
    });

    displayedTask.setAttribute('data-index', `${index}`);

    briefView.appendChild(completeBox);
    briefView.appendChild(displayText);
    expansion.appendChild(deleteBttn);
    expansion.appendChild(updateBttn);
    briefView.appendChild(expandBttn);
    displayedTask.appendChild(briefView);
    displayedTask.appendChild(expansion);
    projectDiv.appendChild(displayedTask);
  };

  const content = document.querySelector('#content');

  const displayTasks = function(selectedProject) {
    let projectDiv = document.createElement('div');
    let currentProject = projectsContainer.showProject(selectedProject);

    const projectTitlehead = document.querySelector('.project-title');
    projectTitlehead.innerText = `${selectedProject}`;
    console.log(currentProject)

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
