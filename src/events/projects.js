import projectsContainer from '../model/projects';
import displayProjectNav from '../views/displayProjectNav';
import displayProject from '../views/accessProjects';
import newProjectForm from '../views/projectForm';
import formEvents from './forms';
import taskEvents from './tasks';

const projectEvents = (function() {
  const content = document.querySelector('#content');

  const switchProjectView = function(selectedProject) {
    // remove event listeners
    taskEvents.removeEventListeners();
    content.innerHTML = '';
    displayProject.currentProjectName = selectedProject;
    console.log(selectedProject);
    displayProject.displayTasks(selectedProject);
  };

  const openNewProjectForm = function() {
    document.querySelector('.modal-content').appendChild(newProjectForm);
    const projectForm = document.querySelector('.new-proj-form');
    projectForm.addEventListener('submit', e => {
      e.preventDefault();
      projectEvents.submitNewProjectForm();
    });
  };

  const closeForm = function() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
    let currentForm = document.querySelector('.current-form');
    document.querySelector('.modal-content').removeChild(currentForm);
    modal.style.display = 'none';
  };

  const submitNewProjectForm = function() {
    const title = document.querySelector('#project-title').value;
    projectsContainer.addProjectToContainer(title);
    displayProjectNav.refreshProjectDisplay();
    formEvents.closeForm();
  };

  const deleteProjectFromModel = function(selectedProject) {
    projectsContainer.deleteProject(selectedProject);
  };

  const loadDefaultView = function() {
    content.innerHTML = 'Select a new project';
  };

  const deleteProject = function(selectedProject) {
    deleteProjectFromModel(selectedProject);
    // loadDefaultView();
    displayProjectNav.refreshProjectDisplay();
  };

  return {
    submitNewProjectForm,
    switchProjectView,
    deleteProject,
    openNewProjectForm,
    closeForm
  };
})();

export { projectEvents as default };
