import projectsContainer from '../model/projects';
import displayProjectNav from '../views/displayProjectNav';
import displayProject from '../views/accessProjects';

const projectEvents = (function() {
  const content = document.querySelector('#content');

  const switchProjectView = function(selectedProject) {
    content.innerHTML = '';
    displayProject.currentProjectName = selectedProject;
    console.log(selectedProject);
    displayProject.displayTasks(selectedProject);
    // TODO: TEST ME!! Build interface for switching projects and then test me
  }

  const openNewProjectForm = function() {
    // renders DOM elements with form
  }

  const closeNewProjectForm = function() {
    // removes DOM elements for form
  }

  const submitNewProjectForm = function() {
    const title = document.querySelector('#project-title').value;
    projectsContainer.addProjectToContainer(title);
    displayProjectNav.refreshProjectDisplay();
    // closeNewProjectForm();
  }

  const deleteProjectFromModel = function(selectedProject) {
    // deletes project and tasks
  }

  const loadDefaultView = function() {
    content.innerHTML = 'Select a new project';
  }

  const deleteProject = function(selectedProject) {
    deleteProjectFromModel(selectedProject);
    loadDefaultView();
  }

  return { submitNewProjectForm, switchProjectView };
}());

export { projectEvents as default };