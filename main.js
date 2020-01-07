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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_newProjectTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/newProjectTask */ \"./src/model/newProjectTask.js\");\n/* harmony import */ var _views_displayProjectNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/displayProjectNav */ \"./src/views/displayProjectNav.js\");\n/* harmony import */ var _views_accessProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/accessProjects */ \"./src/views/accessProjects.js\");\n\n\n\n\n// Test projects\nObject(_model_newProjectTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Papa', 'Me!', 1, 'Jan', 'To-Do');\nObject(_model_newProjectTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Jenn', 'Me!', 1, 'Jan', 'To-Do');\nObject(_model_newProjectTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Donna', 'Me!', 1, 'Jan', 'To-Do');\n\n_views_displayProjectNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayProjectList();\n\n// Real code\n\n\n\n_views_accessProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayTasks();\n\nconst extractFormData = function () {\n  const title = document.querySelector(\"#title\").value;\n  const description = document.querySelector('#description').value;\n  const priority = document.querySelector('#priority').value;\n  const dueDate = document.querySelector('#due-date').value;\n  const project = document.querySelector('#project').value;\n  Object(_model_newProjectTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, priority, dueDate, project);\n  \n  _views_accessProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].refreshTaskDisplay();\n};\n\nconst taskForm = document.querySelector('.task-form');\ntaskForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  alert('form submitted!');\n  extractFormData();\n});\n\n// Next: \n// CSS: add buttons with functionality - EXTRACT RADIO BUTTON VALUE\n// JS: update task\n// Little bit at a time, friend\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return projectsContainer; });\n// holds information on all projects available\n\n// also holds all tasks within said projects\n\nconst projectsContainer = (function() {\n  const projects = { 'To-Do': [] };\n  const showProject = function(project) {\n    return this.projects[project];\n  };\n  return { projects, showProject };\n}());\n\n\n\n\n//# sourceURL=webpack:///./src/model/projects.js?");

/***/ }),

/***/ "./src/views/accessProjects.js":
/*!*************************************!*\
  !*** ./src/views/accessProjects.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return displayProject; });\n/* harmony import */ var _model_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/projects */ \"./src/model/projects.js\");\n// pulls data from projects for DOM elements\n\n\n\nconst displayProject = (function () {\n  let currentProjectName = 'To-Do';\n\n  const createTaskDisplay = function(task, projectDiv) {\n    const displayedTask = document.createElement('div');\n    // displayedTask.attributes.add('class', `${task.title}`);\n    displayedTask.innerText = `${task.title}, ${task.description}`;\n    projectDiv.appendChild(displayedTask);\n  };\n  \n  const content = document.querySelector('#content');\n\n  const displayTasks = function () {\n    const projectDiv = document.createElement('div');\n    const currentProject = _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProject(currentProjectName);\n    \n    for(var i = 0; i < currentProject.length; i++) {\n      console.log(currentProject[i]);\n      createTaskDisplay(currentProject[i], projectDiv);\n    }\n    \n    content.appendChild(projectDiv);\n    \n  };\n\n  const refreshTaskDisplay = function() {\n    content.innerHTML = '';\n    displayTasks();\n  }\n  return { displayTasks, createTaskDisplay, refreshTaskDisplay };\n}());\n\n\n\n//# sourceURL=webpack:///./src/views/accessProjects.js?");

/***/ }),

/***/ "./src/views/displayProjectNav.js":
/*!****************************************!*\
  !*** ./src/views/displayProjectNav.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return displayProjectNav; });\n/* harmony import */ var _model_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/projects */ \"./src/model/projects.js\");\n// Shows all current project categories and allows for display\n\n\n\nconst displayProjectNav = (function() {\n  const _projectList = _model_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects;\n\n  const _displaySingleProject = function(project) {\n    const projectDiv = document.createElement('div');\n    projectDiv.innerText = project;\n    return projectDiv;\n  }\n\n  const navBar = document.querySelector('.side-nav-bar');\n\n  const displayProjectList = function() {\n    // returns div with all projects\n    const navDiv = document.createElement('div');\n    console.log(_projectList);\n    for (const property in _projectList) {\n      let currentProject = _displaySingleProject(property);\n      navDiv.appendChild(currentProject)\n    }\n    navBar.appendChild(navDiv);\n\n  }\n\n  const refreshProjectDisplay = function() {\n    navBar.innerHTML = '';\n    displayProjectList();\n  }\n  return { displayProjectList, refreshProjectDisplay };\n}());\n\n\n\n\n\n//# sourceURL=webpack:///./src/views/displayProjectNav.js?");

/***/ })

/******/ });