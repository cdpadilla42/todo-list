import projectsContainer from '../model/projects';
import displayProjectNav from '../views/displayProjectNav';
import displayProject from '../views/accessProjects';
import newProjectForm from '../views/projectForm';

const projectEvents = (function() {
  const content = document.querySelector('#content');

  const switchProjectView = function(selectedProject) {
    content.innerHTML = '';
    displayProject.currentProjectName = selectedProject;
    console.log(selectedProject);
    displayProject.displayTasks(selectedProject);
  }

  const openNewProjectForm = function() {
    document.querySelector('.modal-content').appendChild(newProjectForm);
    const projectForm = document.querySelector('.new-proj-form');
    projectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      projectEvents.submitNewProjectForm();
    });
  }

  const closeNewProjectForm = function() {
    // removes DOM elements for form
    let projectForm = document.querySelector('.project-form');
    document.querySelector('#content').removeChild(projectForm);
  }

  const submitNewProjectForm = function() {
    const title = document.querySelector('#project-title').value;
    projectsContainer.addProjectToContainer(title);
    displayProjectNav.refreshProjectDisplay();
    // closeNewProjectForm();
  }

  const deleteProjectFromModel = function(selectedProject) {
    projectsContainer.deleteProject(selectedProject);
  }

  const loadDefaultView = function() {
    content.innerHTML = 'Select a new project';
  }

  const deleteProject = function(selectedProject) {
    deleteProjectFromModel(selectedProject);
    // loadDefaultView();
    displayProjectNav.refreshProjectDisplay();
  }

  return {
    submitNewProjectForm,
    switchProjectView,
    deleteProject,
    openNewProjectForm,
    closeNewProjectForm,
  };
}());

export { projectEvents as default };