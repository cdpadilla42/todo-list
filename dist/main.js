/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/events/projects.js":
/*!********************************!*\
  !*** ./src/events/projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return projectEvents; });\n/* harmony import */ var _model_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/projects */ \"./src/model/projects.js\");\n/* harmony import */ var _views_displayProjectNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/displayProjectNav */ \"./src/views/displayProjectNav.js\");\n/* harmony import */ var _views_accessProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/accessProjects */ \"./src/views/accessProjects.js\");\n/* harmony import */ var _views_projectForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/projectForm */ \"./src/views/projectForm.js\");\n\n\n\n\n\nconst projectEvents = (function() {\n  const content = document.querySelector('#content');\n\n  const switchProjectView = function(selectedProject) {\n    content.innerHTML = '';\n    _views_accessProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currentProjectName = selectedProject;\n    console.log(selectedProject);\n    _views_accessProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayTasks(selectedProject);\n  }\n\n  const openNewProjectForm = function() {\n    document.querySelector('.modal-content').appendChild(_views_projectForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const projectForm = document.querySelector('.new-proj-form');\n    projectForm.addEventListener('submit', (e) => {\n      e.preventDefault();\n      projectEvents.submitNewProjectForm();\n    });\n  }\n\n  const closeNewProjectForm = function() {\n    // removes DOM elements for form\n    let projectForm = document.querySelector('.project-form');\n    document.querySelector('#content').removeChild(projectForm);\n  }\n\n  const submitNewProjectForm = function() {\n    const title = document.querySelector('#project-title').value;\n    _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectToContainer(title);\n    _views_displayProjectNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"].refreshProjectDisplay();\n    // closeNewProjectForm();\n  }\n\n  const deleteProjectFromModel = function(selectedProject) {\n    _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject(selectedProject);\n  }\n\n  const loadDefaultView = function() {\n    content.innerHTML = 'Select a new project';\n  }\n\n  const deleteProject = function(selectedProject) {\n    deleteProjectFromModel(selectedProject);\n    // loadDefaultView();\n    _views_displayProjectNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"].refreshProjectDisplay();\n  }\n\n  return {\n    submitNewProjectForm,\n    switchProjectView,\n    deleteProject,\n    openNewProjectForm,\n    closeNewProjectForm,\n  };\n}());\n\n\n\n//# sourceURL=webpack:///./src/events/projects.js?");

/***/ }),

/***/ "./src/events/tasks.js":
/*!*****************************!*\
  !*** ./src/events/tasks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return taskEvents; });\n/* harmony import */ var _views_taskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/taskForm */ \"./src/views/taskForm.js\");\n\n\nconst taskEvents = (function() {\n  const displayTaskForm = function() {\n    document.querySelector('#content').appendChild(_views_taskForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    const taskForm = document.querySelector('.task-form');\n    taskForm.addEventListener('submit', (e) => {\n      e.preventDefault();\n      alert('form submitted!');\n      extractTaskFormData();\n    });\n  }\n\n  const closeTaskForm = function() {\n    let taskForm = document.querySelector('.project-form');\n    document.querySelector('#content').removeChild(taskForm);\n  }\n\n  return { displayTaskForm, closeTaskForm };\n}());\n\n\n\n\n//# sourceURL=webpack:///./src/events/tasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_newProjectTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/newProjectTask */ \"./src/model/newProjectTask.js\");\n/* harmony import */ var _views_displayProjectNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/displayProjectNav */ \"./src/views/displayProjectNav.js\");\n/* harmony import */ var _views_accessProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/accessProjects */ \"./src/views/accessProjects.js\");\n/* harmony import */ var _model_newProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/newProject */ \"./src/model/newProject.js\");\n/* harmony import */ var _model_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/projects */ \"./src/model/projects.js\");\n/* harmony import */ var _events_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/projects */ \"./src/events/projects.js\");\n/* harmony import */ var _events_tasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/tasks */ \"./src/events/tasks.js\");\n\n\n\n\n\n\n\n\n// Test projects\nObject(_model_newProjectTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Papa', 'Me!', 1, 'Jan', 'To-Do');\nObject(_model_newProjectTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Jenn', 'Me!', 1, 'Jan', 'To-Do');\nObject(_model_newProjectTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Donna', 'Me!', 1, 'Jan', 'To-Do');\n\n_views_displayProjectNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayProjectList();\n\n// Real code\n\n\n\n_views_accessProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayTasks('To-Do');\n\nconst extractTaskFormData = function () {\n  const title = document.querySelector(\"#title\").value;\n  const description = document.querySelector('#description').value;\n  const priority = document.querySelector('#priority').value;\n  const dueDate = document.querySelector('#due-date').value;\n  const project = document.querySelector('#project').value;\n  Object(_model_newProjectTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, priority, dueDate, project);\n  \n  _views_accessProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].refreshTaskDisplay();\n};\n\n\n\n// -------------------------\n\n_events_projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deleteProject('Dog-Tasks');\nconsole.log(_model_projects__WEBPACK_IMPORTED_MODULE_4__[\"default\"].projects);\n\n// -------------------------\n\n\n\n\n\nconst newTaskBttn = document.querySelector('#open-task-form');\nnewTaskBttn.addEventListener('click', _events_tasks__WEBPACK_IMPORTED_MODULE_6__[\"default\"].displayTaskForm); // IDK What's also keeping THIS from adding multiples, but also OK!!\n\n\n// MODAL JS\nconst newFormBttn = document.querySelector('#open-proj-form');\nconst modal = document.querySelector('.modal');\nnewFormBttn.addEventListener(\n  'click',\n  () => {\n    modal.style.display = \"block\";\n    _events_projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"].openNewProjectForm();\n  }\n);\n\nwindow.onclick = function(event) {\n  if (event.target == modal) {\n    modal.style.display = 'none';\n  }\n};\n\n// taskEvents.displayTaskForm();\n\n// Next: \n// CSS: add buttons with functionality - EXTRACT RADIO BUTTON VALUE\n// JS: update task\n// Little bit at a time, friend\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model/addToProject.js":
/*!***********************************!*\
  !*** ./src/model/addToProject.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addToProject; });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/model/projects.js\");\n// Creates new project category\n\n\n\n// add task to project\nconst addToProject = function (task) {\n  const projectsObj = _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects;\n  projectsObj[task.project].push(task);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/model/addToProject.js?");

/***/ }),

/***/ "./src/model/newProject.js":
/*!*********************************!*\
  !*** ./src/model/newProject.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Project; });\n// Creates new project category\n\nconst Project = function (name) {\n  const addTask = (newTask) => this.tasks.push(newTask);\n\n  return {\n    name,\n    addTask,\n    tasks: [],\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/model/newProject.js?");

/***/ }),

/***/ "./src/model/newProjectTask.js":
/*!*************************************!*\
  !*** ./src/model/newProjectTask.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newProjectTask; });\n/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTask */ \"./src/model/newTask.js\");\n/* harmony import */ var _addToProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToProject */ \"./src/model/addToProject.js\");\n\n\n\nconst newProjectTask = function (\n  title,\n  description,\n  priority,\n  dueDate,\n  project,\n) {\n  const task = Object(_newTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, priority, dueDate, project);\n  Object(_addToProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/model/newProjectTask.js?");

/***/ }),

/***/ "./src/model/newTask.js":
/*!******************************!*\
  !*** ./src/model/newTask.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Task; });\n// factory function creating task\n\n// export factory function\n\nconst Task = function (title, description, priority, dueDate, project = 'To-Do') {\n  return {\n    title,\n    description,\n    priority,\n    dueDate,\n    project,\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/model/newTask.js?");

/***/ }),

/***/ "./src/model/projects.js":
/*!*******************************!*\
  !*** ./src/model/projects.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return projectsContainer; });\n// holds information on all projects available\n\n// also holds all tasks within said projects\n\nconst projectsContainer = (function() {\n  let projects = { \n    'To-Do': [],\n    'Dog-Tasks': []\n  };\n\n  const showProject = function(projectName) {\n    return this.projects[projectName];\n  };\n\n  const deleteProject = function (selectedProject) {\n    delete projects[selectedProject];\n  };\n\n  const addProjectToContainer = (projectName) => {\n    projects[projectName] = [];\n  }\n  return { projects, showProject, addProjectToContainer, deleteProject };\n}());\n\n\n\n\n//# sourceURL=webpack:///./src/model/projects.js?");

/***/ }),

/***/ "./src/views/accessProjects.js":
/*!*************************************!*\
  !*** ./src/views/accessProjects.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return displayProject; });\n/* harmony import */ var _model_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/projects */ \"./src/model/projects.js\");\n// pulls data from projects for DOM elements\n\n\n\nconst displayProject = (function () {\n  // let currentProjectName = 'To-Do';\n\n  const createTaskDisplay = function(task, projectDiv) {\n    const displayedTask = document.createElement('div');\n    // displayedTask.attributes.add('class', `${task.title}`);\n    displayedTask.innerText = `${task.title}, ${task.description}`;\n    projectDiv.appendChild(displayedTask);\n  };\n  \n  const content = document.querySelector('#content');\n\n  const displayTasks = function (selectedProject) {\n    let projectDiv = document.createElement('div');\n    let currentProject = _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProject(selectedProject);\n    \n    for(var i = 0; i < currentProject.length; i++) {\n      console.log(currentProject[i]);\n      createTaskDisplay(currentProject[i], projectDiv);\n    }\n    \n    content.appendChild(projectDiv);\n    \n  };\n\n  const refreshTaskDisplay = function() {\n    content.innerHTML = '';\n    displayTasks('To-Do');\n  }\n  return { displayTasks, createTaskDisplay, refreshTaskDisplay };\n}());\n\n\n\n//# sourceURL=webpack:///./src/views/accessProjects.js?");

/***/ }),

/***/ "./src/views/displayProjectNav.js":
/*!****************************************!*\
  !*** ./src/views/displayProjectNav.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return displayProjectNav; });\n/* harmony import */ var _model_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/projects */ \"./src/model/projects.js\");\n/* harmony import */ var _events_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/projects */ \"./src/events/projects.js\");\n/* eslint-disable semi */\n// Shows all current project categories and allows for display\n\n\n\n\nconst displayProjectNav = (function() {\n  const _projectList = _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects;\n\n  const _displaySingleProject = function(project) {\n    const projectDiv = document.createElement('div');\n    projectDiv.innerHTML = `<a href=\"#\" id=\"${project}\">${project}</a>`;\n    return projectDiv;\n  }\n\n  const navBar = document.querySelector('.side-nav-bar');\n\n  const displayProjectList = function() {\n    // returns div with all projects\n    const navDiv = document.createElement('div');\n    console.log(_projectList);\n    // eslint-disable-next-line guard-for-in\n    for (const property in _projectList) {\n      let currentProject = _displaySingleProject(property);\n      currentProject.addEventListener('click', (e) => {\n        _events_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].switchProjectView(currentProject.firstElementChild.getAttribute('id'));\n      });\n      navDiv.appendChild(currentProject)\n      // add event listener to navDiv for current project\n    }\n    \n    navBar.appendChild(navDiv);\n\n  }\n\n  const refreshProjectDisplay = function() {\n    navBar.innerHTML = '';\n    displayProjectList();\n  }\n  return { displayProjectList, refreshProjectDisplay };\n}());\n\n\n\n\n\n//# sourceURL=webpack:///./src/views/displayProjectNav.js?");

/***/ }),

/***/ "./src/views/projectForm.js":
/*!**********************************!*\
  !*** ./src/views/projectForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newProjectForm; });\nconst newProjectForm = document.createElement('div');\nnewProjectForm.classList.add('project-form');\nnewProjectForm.innerHTML = ' <form class=\"new-proj-form\"><label for=\"project-title\">Project Name:</label><br><input type=\"text\" name=\"project-title\" id=\"project-title\"></label><input type=\"submit\" value=\"Submit\"></form>';\n\n \n\n//# sourceURL=webpack:///./src/views/projectForm.js?");

/***/ }),

/***/ "./src/views/taskForm.js":
/*!*******************************!*\
  !*** ./src/views/taskForm.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newTaskForm; });\nconst newTaskForm = document.createElement('div');\nnewTaskForm.innerHTML =\n  '<form class=\"task-form\"><label for=\"title\">Task:</label><br><input type=\"text\" name=\"title\" id=\"title\"><label for=\"description\">Description:</label><input type=\"text\" name=\"description\" id=\"description\"><label for=\"priority\">Priority:</label><input type=\"number\" name=\"priority\" id=\"priority\" step=\"1\" min=\"1\" max=\"3\"><br><label for=\"due-date\">Due Date:</label><br><input type=\"text\" name=\"due-date\" id=\"due-date\"><label for=\"project\">Project:</label><input type=\"text\" name=\"project\" id=\"project\"><input type=\"submit\" value=\"Submit\"></form>';\n\n\n\n\n//# sourceURL=webpack:///./src/views/taskForm.js?");

/***/ })

/******/ });