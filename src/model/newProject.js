// Creates new project category

const Project = function (name) {
  const addTask = (newTask) => this.tasks.push(newTask);

  return {
    name,
    addTask,
    tasks: [],
  };
};

export { Project as default };
