/* eslint-disable semi */
// Shows all current project categories and allows for display

import projectsContainer from '../model/projects';
import projectEvents from '../events/projects';

const displayProjectNav = (function() {
  const _projectList = projectsContainer.projects;

  const _displaySingleProject = function(project) {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `<a href="#" id="${project}">${project}</a>`;
    return projectDiv;
  }

  const navBar = document.querySelector('.side-nav-bar');

  const displayProjectList = function() {
    // returns div with all projects
    const navDiv = document.createElement('div');
    console.log(_projectList);
    // eslint-disable-next-line guard-for-in
    for (const property in _projectList) {
      let currentProject = _displaySingleProject(property);
      currentProject.addEventListener('click', (e) => {
        projectEvents.switchProjectView(currentProject.firstElementChild.getAttribute('id'));
      });
      navDiv.appendChild(currentProject)
      // add event listener to navDiv for current project
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

