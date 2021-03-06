import projectsContainer from '../model/projects';
import projectEvents from '../events/projects';

const displayProjectNav = (function() {
  let _projectList = projectsContainer.projects;

  const _displaySingleProject = function(project) {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `<a href="#" id="${project}">${project}</a>`;
    return projectDiv;
  };

  const navBar = document.querySelector('.project-titles');

  const displayProjectList = function() {
    // returns div with all projects
    _projectList = projectsContainer.projects;
    const navDiv = document.createElement('div');
    navDiv.classList.add('nav-div');
    console.log(_projectList);
    for (const property in _projectList) {
      let currentProject = _displaySingleProject(property);
      currentProject.addEventListener('click', e => {
        projectEvents.switchProjectView(currentProject.firstElementChild.getAttribute('id'));
      });
      navDiv.appendChild(currentProject);
    }

    navBar.appendChild(navDiv);
  };

  const refreshProjectDisplay = function() {
    navBar.innerHTML = '';
    displayProjectList();
  };
  return { displayProjectList, refreshProjectDisplay };
})();

export { displayProjectNav as default };
