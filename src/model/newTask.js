// factory function creating task

// export factory function

const Task = function(title, description, priority, dueDate, project = 'To-Do') {
  const complete = false;
  return {
    title,
    description,
    priority,
    dueDate,
    project,
    complete
  };
};

export { Task as default };
