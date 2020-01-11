import projectsContainer from '../model/projects';

const formEvents = (function() {
  const closeForm = function() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
    let currentForm = document.querySelector('.current-form');
    currentForm.firstElementChild.removeEventListener('click', updateEvent);
    currentForm.firstElementChild.removeEventListener('click', taskSubmitEvent);

    document.querySelector('.modal-content').removeChild(currentForm);
    modal.style.display = 'none';
  };

  const autoFillForm = function(project, index) {
    let currentTask = projectsContainer.projects[project][index];
    document.querySelector('#title').value = currentTask.title;
    document.querySelector('#description').value = currentTask.description;
    document.querySelector('#priority').value = currentTask.priority;
    document.querySelector('#due-date').value = currentTask.dueDate;
    document.querySelector('#project').value = currentTask.project;
  };

  return { closeForm, autoFillForm };
})();

export { formEvents as default };
