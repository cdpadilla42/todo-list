import newProjectTask from './model/newProjectTask';
import projectsContainer from './model/projects';

newProjectTask('Chris', 'Me!', 1, 'Jan', 'To-Do');
console.log(projectsContainer.projects);
