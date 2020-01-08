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

  return { displayTaskForm };
}());

export { taskEvents as default };
