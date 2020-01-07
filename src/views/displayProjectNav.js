// Shows all current project categories and allows for display

import projectsContainer from '../model/projects';

const displayProjectNav = (function() {
  const _projectList = projectsContainer.projects;

  const _displaySingleProject = function(project) {
    const projectDiv = document.createElement('div');
    projectDiv.innerText = project;
    return projectDiv;
  }

  const navBar = document.querySelector('.side-nav-bar');

  const displayProjectList = function() {
    // returns div with all projects
    const navDiv = document.createElement('div');
    console.log(_projectList);
    for (const property in _projectList) {
      let currentProject = _displaySingleProject(property);
      navDiv.appendChild(currentProject)
    }
    navBar.appendChild(navDiv);

  }

  const refreshProjectDisplay = function() {
    navBar.innerHTML = '';
    displayProjectList();
  }
  return { displayProjectList, refreshProjectDisplay };
}());

export { displayProjectNav as default };

