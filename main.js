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

/***/ "./src/events/forms.js":
/*!*****************************!*\
  !*** ./src/events/forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return formEvents; });\n/* harmony import */ var _model_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/projects */ \"./src/model/projects.js\");\n\n\nconst formEvents = (function() {\n  const closeForm = function() {\n    let modal = document.querySelector('.modal');\n    modal.style.display = 'none';\n    let currentForm = document.querySelector('.current-form');\n\n    document.querySelector('.modal-content').removeChild(currentForm);\n    modal.style.display = 'none';\n  };\n\n  const autoFillForm = function(project, index) {\n    let currentTask = _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects[project][index];\n    document.querySelector('#title').value = currentTask.title;\n    document.querySelector('#description').value = currentTask.description;\n    document.querySelector('#priority').value = currentTask.priority;\n    document.querySelector('#due-date').value = currentTask.dueDate;\n    document.querySelector('#project').value = currentTask.project;\n  };\n\n  return { closeForm, autoFillForm };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/events/forms.js?");

/***/ }),

/***/ "./src/events/projects.js":
/*!********************************!*\
  !*** ./src/events/projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return projectEvents; });\n/* harmony import */ var _model_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/projects */ \"./src/model/projects.js\");\n/* harmony import */ var _views_displayProjectNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/displayProjectNav */ \"./src/views/displayProjectNav.js\");\n/* harmony import */ var _views_accessProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/accessProjects */ \"./src/views/accessProjects.js\");\n/* harmony import */ var _views_projectForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/projectForm */ \"./src/views/projectForm.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms */ \"./src/events/forms.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks */ \"./src/events/tasks.js\");\n\n\n\n\n\n\n\nconst projectEvents = (function() {\n  const content = document.querySelector('#content');\n\n  const switchProjectView = function(selectedProject) {\n    // remove event listeners\n    _tasks__WEBPACK_IMPORTED_MODULE_5__[\"default\"].removeEventListeners();\n    content.innerHTML = '';\n    _views_accessProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currentProjectName = selectedProject;\n    console.log(selectedProject);\n    _views_accessProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayTasks(selectedProject);\n  };\n\n  const openNewProjectForm = function() {\n    document.querySelector('.modal-content').appendChild(_views_projectForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const projectForm = document.querySelector('.new-proj-form');\n    projectForm.addEventListener('submit', e => {\n      e.preventDefault();\n      projectEvents.submitNewProjectForm();\n    });\n  };\n\n  const closeForm = function() {\n    let modal = document.querySelector('.modal');\n    modal.style.display = 'none';\n    let currentForm = document.querySelector('.current-form');\n    document.querySelector('.modal-content').removeChild(currentForm);\n    modal.style.display = 'none';\n  };\n\n  const submitNewProjectForm = function() {\n    const title = document.querySelector('#project-title').value;\n    _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectToContainer(title);\n    _views_displayProjectNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"].refreshProjectDisplay();\n    _forms__WEBPACK_IMPORTED_MODULE_4__[\"default\"].closeForm();\n  };\n\n  const deleteProjectFromModel = function(selectedProject) {\n    _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject(selectedProject);\n  };\n\n  const loadDefaultView = function() {\n    content.innerHTML = 'Select a new project';\n  };\n\n  const deleteProject = function(selectedProject) {\n    deleteProjectFromModel(selectedProject);\n    // loadDefaultView();\n    _views_displayProjectNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"].refreshProjectDisplay();\n  };\n\n  return {\n    submitNewProjectForm,\n    switchProjectView,\n    deleteProject,\n    openNewProjectForm,\n    closeForm\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/events/projects.js?");

/***/ }),

/***/ "./src/events/tasks.js":
/*!*****************************!*\
  !*** ./src/events/tasks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return taskEvents; });\n/* harmony import */ var _views_taskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/taskForm */ \"./src/views/taskForm.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ \"./src/events/forms.js\");\n/* harmony import */ var _model_newProjectTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/newProjectTask */ \"./src/model/newProjectTask.js\");\n/* harmony import */ var _views_accessProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/accessProjects */ \"./src/views/accessProjects.js\");\n/* harmony import */ var _model_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/projects */ \"./src/model/projects.js\");\n\n\n\n\n\n\nconst taskEvents = (function() {\n  const closeTaskForm = function() {\n    let taskForm = document.querySelector('.project-form');\n    document.querySelector('#content').removeChild(taskForm);\n  };\n\n  const extractUpdateFormData = function(index) {\n    const title = document.querySelector('#title').value;\n    const description = document.querySelector('#description').value;\n    const priority = document.querySelector('#priority').value;\n    const dueDate = document.querySelector('#due-date').value;\n    const project = document.querySelector('#project').value;\n    _model_projects__WEBPACK_IMPORTED_MODULE_4__[\"default\"].updateTask(title, description, priority, dueDate, project, index);\n\n    _views_accessProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"].refreshTaskDisplay(project);\n  };\n\n  const updateEvent = function(e) {\n    console.log(e.target.getAttribute('data-index'));\n    e.preventDefault();\n    extractUpdateFormData(e.target.getAttribute('data-index'));\n    //TODO: Empty form values\n    _forms__WEBPACK_IMPORTED_MODULE_1__[\"default\"].closeForm();\n    // e.target.removeEventListener('submit', updateEvent);\n  };\n\n  const removeEventListeners = function() {\n    // grabs update buttons\n    const updateBttns = document.querySelectorAll('.update-bttn');\n    // iterates over the node list\n    updateBttns.forEach(button => {\n      button.removeEventListener('submit', updateEvent);\n    });\n    // remove the eventlisteners for each\n  };\n\n  const displayUpdateForm = function(project, index) {\n    document.querySelector('.modal').style.display = 'block';\n    document.querySelector('.modal-content').appendChild(_views_taskForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    const taskForm = document.querySelector('.task-form');\n    taskForm.setAttribute('data-index', index);\n    _forms__WEBPACK_IMPORTED_MODULE_1__[\"default\"].autoFillForm(project, index);\n    taskForm.addEventListener('submit', updateEvent, { once: true });\n  };\n\n  const extractTaskFormData = function() {\n    const title = document.querySelector('#title').value;\n    const description = document.querySelector('#description').value;\n    const priority = document.querySelector('#priority').value;\n    const dueDate = document.querySelector('#due-date').value;\n    const project = document.querySelector('#project').value;\n    Object(_model_newProjectTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(title, description, priority, dueDate, project);\n\n    _views_accessProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"].refreshTaskDisplay(project);\n  };\n\n  const taskSubmitEvent = function(e) {\n    e.preventDefault();\n    extractTaskFormData();\n    // form events - remove modal content\n    _forms__WEBPACK_IMPORTED_MODULE_1__[\"default\"].closeForm();\n    //TODO: add empty form\n  };\n\n  //TODO: Assign anonmyous function a name, then remove event listener upon closing\n  const displayTaskForm = function() {\n    document.querySelector('.modal-content').appendChild(_views_taskForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    const taskForm = document.querySelector('.task-form');\n    taskForm.addEventListener('submit', taskSubmitEvent, { once: true });\n  };\n\n  const deleteTask = function(project, index) {\n    // run deleteTask from model\n    _model_projects__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deleteTask(project, index);\n    // refresh view\n    _views_accessProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"].refreshTaskDisplay(project);\n  };\n\n  // Expand and Brief Views\n\n  const expandTask = function(project, index) {};\n\n  return {\n    displayTaskForm,\n    closeTaskForm,\n    deleteTask,\n    extractUpdateFormData,\n    displayUpdateForm,\n    extractTaskFormData,\n    removeEventListeners\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/events/tasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_newProjectTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/newProjectTask */ \"./src/model/newProjectTask.js\");\n/* harmony import */ var _views_displayProjectNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/displayProjectNav */ \"./src/views/displayProjectNav.js\");\n/* harmony import */ var _views_accessProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/accessProjects */ \"./src/views/accessProjects.js\");\n/* harmony import */ var _model_newProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/newProject */ \"./src/model/newProject.js\");\n/* harmony import */ var _model_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/projects */ \"./src/model/projects.js\");\n/* harmony import */ var _events_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/projects */ \"./src/events/projects.js\");\n/* harmony import */ var _events_tasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/tasks */ \"./src/events/tasks.js\");\n/* harmony import */ var _events_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/forms */ \"./src/events/forms.js\");\n\n\n\n\n\n\n\n\n\n// Test projects\n// newProjectTask('Papa', 'Me!', 1, 'Jan', 'To-Do');\n// newProjectTask('Jenn', 'Me!', 1, 'Jan', 'To-Do');\n// newProjectTask('Donna', 'Me!', 1, 'Jan', 'To-Do');\n\n_model_projects__WEBPACK_IMPORTED_MODULE_4__[\"default\"].checkLocalStorage();\n\n_views_displayProjectNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayProjectList();\n\n// Real code\n\n_views_accessProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayTasks('To-Do');\n\n// -------------------------\n\n// -------------------------\n\n// MODAL JS\nconst newFormBttn = document.querySelector('#open-proj-form');\nconst modal = document.querySelector('.modal');\nnewFormBttn.addEventListener('click', () => {\n  modal.style.display = 'block';\n  _events_projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"].openNewProjectForm();\n});\n\nconsole.log('test');\n\nconst newTaskBttn = document.querySelector('#open-task-form');\nnewTaskBttn.addEventListener('click', () => {\n  modal.style.display = 'block';\n  _events_tasks__WEBPACK_IMPORTED_MODULE_6__[\"default\"].displayTaskForm();\n});\n\nwindow.onclick = function(event) {\n  if (event.target === modal) {\n    _events_forms__WEBPACK_IMPORTED_MODULE_7__[\"default\"].closeForm();\n  }\n};\n\n// taskEvents.displayTaskForm();\n\n// Next:\n// CSS: add buttons with functionality - EXTRACT RADIO BUTTON VALUE\n// JS: update task\n// Little bit at a time, friend\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model/addToProject.js":
/*!***********************************!*\
  !*** ./src/model/addToProject.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addToProject; });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/model/projects.js\");\n// Creates new project category\n\n\n\n// add task to project\nconst addToProject = function(task) {\n  _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects[task.project].push(task);\n  _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateStorage();\n};\n\n\n\n\n//# sourceURL=webpack:///./src/model/addToProject.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newProjectTask; });\n/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTask */ \"./src/model/newTask.js\");\n/* harmony import */ var _addToProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToProject */ \"./src/model/addToProject.js\");\n\n\n\nconst newProjectTask = function(title, description, priority, dueDate, project) {\n  const task = Object(_newTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, priority, dueDate, project);\n  Object(_addToProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/model/newProjectTask.js?");

/***/ }),

/***/ "./src/model/newTask.js":
/*!******************************!*\
  !*** ./src/model/newTask.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Task; });\n// factory function creating task\n\n// export factory function\n\nconst Task = function(title, description, priority, dueDate, project = 'To-Do') {\n  const complete = false;\n  return {\n    title,\n    description,\n    priority,\n    dueDate,\n    project,\n    complete\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/model/newTask.js?");

/***/ }),

/***/ "./src/model/projects.js":
/*!*******************************!*\
  !*** ./src/model/projects.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return projectsContainer; });\n// holds information on all projects available\n\n// also holds all tasks within said projects\n\nconst projectsContainer = (function() {\n  const setProjects = function() {\n    return JSON.parse(localStorage.getItem('projects'));\n  };\n\n  const updateStorage = function() {\n    localStorage.setItem('projects', JSON.stringify(projects));\n  };\n\n  const checkLocalStorage = function() {\n    if (!localStorage.getItem('projects')) {\n      return populateStorage();\n    } else {\n      return setProjects();\n    }\n  };\n\n  const populateStorage = function() {\n    return {\n      'To-Do': [\n        {\n          title: 'Call Mom',\n          description: 'Catch up on her week',\n          priority: 1,\n          dueDate: 'Today, 8:00 pm',\n          project: 'To-Do'\n        }\n      ],\n      'Dog-Tasks': [\n        {\n          title: 'Walk Lucy',\n          description: 'Get some fresh air!',\n          priority: 1,\n          dueDate: 'Today, 6:00 pm',\n          project: 'Dog-Tasks'\n        }\n      ]\n    };\n  };\n\n  let projects = checkLocalStorage();\n\n  const showProject = function(projectName) {\n    return projects[projectName];\n  };\n\n  const deleteProject = function(selectedProject) {\n    delete projects[selectedProject];\n    updateStorage();\n  };\n\n  const deleteTask = function(project, index) {\n    projects[project].splice(index, 1);\n    updateStorage();\n  };\n\n  const updateTask = function(title, description, priority, dueDate, project, index) {\n    projects[project][index].title = title;\n    projects[project][index].description = description;\n    projects[project][index].priority = priority;\n    projects[project][index].dueDate = dueDate;\n    projects[project][index].project = project;\n    updateStorage();\n  };\n\n  const completeFaslify = function(project, index) {\n    projects[project][index].complete = false;\n    updateStorage();\n  };\n\n  const completeTruthify = function(project, index) {\n    projects[project][index].complete = true;\n    updateStorage();\n  };\n\n  const addProjectToContainer = projectName => {\n    projects[projectName] = [];\n    updateStorage();\n  };\n  return {\n    projects,\n    showProject,\n    addProjectToContainer,\n    deleteProject,\n    deleteTask,\n    updateTask,\n    completeTruthify,\n    completeFaslify,\n    checkLocalStorage,\n    updateStorage\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/model/projects.js?");

/***/ }),

/***/ "./src/views/accessProjects.js":
/*!*************************************!*\
  !*** ./src/views/accessProjects.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return displayProject; });\n/* harmony import */ var _model_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/projects */ \"./src/model/projects.js\");\n/* harmony import */ var _events_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/tasks */ \"./src/events/tasks.js\");\n// pulls data from projects for DOM elements\n\n\n\nconst displayProject = (function() {\n  const createTaskDisplay = function(task, projectDiv, index) {\n    const displayedTask = document.createElement('div');\n    displayedTask.classList.add('single-task-div');\n\n    const briefView = document.createElement('div');\n    briefView.classList.add('brief-view-div');\n\n    const displayText = document.createElement('span');\n    displayText.innerText = `${task.title}`;\n\n    const completeBox = document.createElement('input');\n    completeBox.setAttribute('type', 'checkbox');\n    completeBox.setAttribute('class', 'checkbox');\n    completeBox.setAttribute('data-index', index);\n    if (task.complete) {\n      completeBox.checked = true;\n      displayedTask.classList.add('complete');\n    }\n    completeBox.addEventListener('change', e => {\n      console.log(e.target.checked);\n      displayedTask.classList.toggle('complete');\n      if (e.target.checked) {\n        // update task completion\n        _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].completeTruthify(task.project, index);\n      } else {\n        _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].completeFaslify(task.project, index, false);\n      }\n    });\n\n    let deleteBttn = document.createElement('span');\n    deleteBttn.classList.add('delete-bttn');\n    deleteBttn.innerText = 'X';\n    deleteBttn.addEventListener('click', () => {\n      _events_tasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTask(task.project, index);\n    });\n\n    let updateBttn = document.createElement('span');\n    updateBttn.classList.add('update-bttn');\n    updateBttn.innerText = 'Update';\n    updateBttn.addEventListener('click', () => {\n      _events_tasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayUpdateForm(task.project, index);\n    });\n\n    const expansion = document.createElement('div');\n    expansion.classList.add('expansion');\n    expansion.classList.add('hidden');\n    const expansionText = document.createElement('span');\n    expansionText.innerText = `${task.description} // ${task.dueDate}`;\n    expansion.appendChild(expansionText);\n\n    let expandBttn = document.createElement('span');\n    expandBttn.classList.add('expand-bttn');\n    expandBttn.innerText = 'Expand';\n    expandBttn.addEventListener('click', () => {\n      expansion.classList.toggle('hidden');\n    });\n\n    displayedTask.setAttribute('data-index', `${index}`);\n\n    briefView.appendChild(completeBox);\n    briefView.appendChild(displayText);\n    expansion.appendChild(deleteBttn);\n    expansion.appendChild(updateBttn);\n    briefView.appendChild(expandBttn);\n    displayedTask.appendChild(briefView);\n    displayedTask.appendChild(expansion);\n    projectDiv.appendChild(displayedTask);\n  };\n\n  const content = document.querySelector('#content');\n\n  const displayTasks = function(selectedProject) {\n    let projectDiv = document.createElement('div');\n    let currentProject = _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProject(selectedProject);\n\n    const projectTitlehead = document.querySelector('.project-title');\n    projectTitlehead.innerText = `${selectedProject}`;\n    console.log(currentProject)\n\n    for (var i = 0; i < currentProject.length; i++) {\n      console.log(currentProject[i]);\n      createTaskDisplay(currentProject[i], projectDiv, i);\n    }\n\n    content.appendChild(projectDiv);\n  };\n\n  const displayExpandedTask = function(project, index) {};\n\n  const refreshTaskDisplay = function(project) {\n    content.innerHTML = '';\n    displayTasks(project);\n  };\n  return { displayTasks, createTaskDisplay, refreshTaskDisplay };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/views/accessProjects.js?");

/***/ }),

/***/ "./src/views/displayProjectNav.js":
/*!****************************************!*\
  !*** ./src/views/displayProjectNav.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return displayProjectNav; });\n/* harmony import */ var _model_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/projects */ \"./src/model/projects.js\");\n/* harmony import */ var _events_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/projects */ \"./src/events/projects.js\");\n/* eslint-disable semi */\n// Shows all current project categories and allows for display\n\n\n\n\nconst displayProjectNav = (function() {\n  let _projectList = _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects;\n\n  const _displaySingleProject = function(project) {\n    const projectDiv = document.createElement('div');\n    projectDiv.innerHTML = `<a href=\"#\" id=\"${project}\">${project}</a>`;\n    return projectDiv;\n  };\n\n  const navBar = document.querySelector('.project-titles');\n\n  const displayProjectList = function() {\n    // returns div with all projects\n    _projectList = _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects;\n    const navDiv = document.createElement('div');\n    navDiv.classList.add('nav-div');\n    console.log(_projectList);\n    // eslint-disable-next-line guard-for-in\n    for (const property in _projectList) {\n      let currentProject = _displaySingleProject(property);\n      currentProject.addEventListener('click', e => {\n        _events_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].switchProjectView(currentProject.firstElementChild.getAttribute('id'));\n      });\n      navDiv.appendChild(currentProject);\n      // add event listener to navDiv for current project\n    }\n\n    navBar.appendChild(navDiv);\n  };\n\n  const refreshProjectDisplay = function() {\n    navBar.innerHTML = '';\n    displayProjectList();\n  };\n  return { displayProjectList, refreshProjectDisplay };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/views/displayProjectNav.js?");

/***/ }),

/***/ "./src/views/projectForm.js":
/*!**********************************!*\
  !*** ./src/views/projectForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newProjectForm; });\nconst newProjectForm = document.createElement('div');\nnewProjectForm.classList.add('current-form');\nnewProjectForm.innerHTML = ' <form class=\"new-proj-form\"><label for=\"project-title\">Project Name:</label><br><input type=\"text\" name=\"project-title\" id=\"project-title\"></label><input type=\"submit\" value=\"Submit\"></form>';\n\n \n\n//# sourceURL=webpack:///./src/views/projectForm.js?");

/***/ }),

/***/ "./src/views/taskForm.js":
/*!*******************************!*\
  !*** ./src/views/taskForm.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newTaskForm; });\nconst newTaskForm = document.createElement('div');\nnewTaskForm.classList.add('current-form');\nnewTaskForm.innerHTML =\n  '<form class=\"task-form\"><label for=\"title\">Task:</label><br><input type=\"text\" name=\"title\" id=\"title\"><label for=\"description\">Description:</label><input type=\"text\" name=\"description\" id=\"description\"><label for=\"priority\">Priority:</label><input type=\"number\" name=\"priority\" id=\"priority\" step=\"1\" min=\"1\" max=\"3\"><br><label for=\"due-date\">Due Date:</label><br><input type=\"text\" name=\"due-date\" id=\"due-date\"><label for=\"project\">Project:</label><input type=\"text\" name=\"project\" id=\"project\"><input type=\"submit\" value=\"Submit\"></form>';\n\n\n\n\n//# sourceURL=webpack:///./src/views/taskForm.js?");

/***/ })

/******/ });