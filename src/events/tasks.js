import newTaskForm from '../views/taskForm';

const taskEvents = (function() {
  const displayTaskForm = function() {

    // HEYYYYYY!!! REFACTOR ME SO THAT I FIT IN A DIV NAMED "task-form" class SO I MAY CLOSE
    document.querySelector('.modal-content').appendChild(newTaskForm);
    console.log("hey");    

    // const taskForm = document.querySelector('.task-form'); 
    // taskForm.appendChild(newTaskForm);
    // document.querySelector('#modal-content').appendChild(taskForm);
    // taskForm.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   alert('form submitted!');
    //   extractTaskFormData();
    // });
    
  }

  const closeTaskForm = function() {
    let taskForm = document.querySelector('.project-form');
    document.querySelector('#content').removeChild(taskForm);
  }

  return { displayTaskForm, closeTaskForm };
}());

export { taskEvents as default };
