const newTaskForm = document.createElement('div');
newTaskForm.innerHTML =
  '<form class="task-form"><label for="title">Task:</label><br><input type="text" name="title" id="title"><label for="description">Description:</label><input type="text" name="description" id="description"><label for="priority">Priority:</label><input type="number" name="priority" id="priority" step="1" min="1" max="3"><br><label for="due-date">Due Date:</label><br><input type="text" name="due-date" id="due-date"><label for="project">Project:</label><input type="text" name="project" id="project"><input type="submit" value="Submit"></form>';

export { newTaskForm as default };
