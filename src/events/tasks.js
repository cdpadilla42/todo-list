import newTaskForm from '../views/taskForm';

const taskEvents = (function() {
  const displayTaskForm = function() {
    document.querySelector('#content').appendChild(newTaskForm);
    const taskForm = document.querySelector('.task-form');
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('form submitted!');
      extractTaskFormData();
    });
  }

  const closeTaskForm = function() {
    let taskForm = document.querySelector('.project-form');
    document.querySelector('#content').removeChild(taskForm);
  }

  return { displayTaskForm, closeTaskForm };
}());

export { taskEvents as default };
