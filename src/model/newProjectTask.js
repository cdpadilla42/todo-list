import Task from './newTask';
import addToProject from './addToProject';

const newProjectTask = function (
  title,
  description,
  priority,
  dueDate,
  project,
) {
  const task = Task(title, description, priority, dueDate, project);
  addToProject(task);
};

export { newProjectTask as default };
