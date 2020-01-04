// factory function creating task

// export factory function

const Task = function (title, description, priority, dueDate, project = 'To-Do') {
  return {
    title,
    description,
    priority,
    dueDate,
    project,
  };
};

export { Task as default };
