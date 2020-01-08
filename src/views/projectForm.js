const newProjectForm = document.createElement('div');
newProjectForm.innerHTML = ' <form class="new-proj-form"><label for="project-title">Project Name:</label><br><input type="text" name="project-title" id="project-title"></label><input type="submit" value="Submit"></form>';

export { newProjectForm as default }; 