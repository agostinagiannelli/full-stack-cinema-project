/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderMovies = __webpack_require__(/*! ./renderMovies */ \"./scripts/renderMovies.js\");\n\n$.get(\"https://students-api.up.railway.app/movies\", data => renderMovies(data)).fail(() => alert(\"Error when getting movies\"));\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderMovies.js":
/*!*********************************!*\
  !*** ./scripts/renderMovies.js ***!
  \*********************************/
/***/ ((module) => {

eval("const featMovies = document.getElementById(\"featuredMoviesList\");\n\nconst renderMovies = (data) => {\n    const items = data.map(movie => {\n        const item = document.createElement(\"div\");\n        item.classList.add(\"col\");\n        item.innerHTML = `\n        <div class=\"card shadow-sm h-100\">\n            <img class=\"card-img-top object-fit-cover\" height=\"400\" src=\"${movie.poster}\" alt=\"${movie.title}\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\"><strong>${movie.title}</strong></h5>\n                <h6 class=\"card-subtitle mb-2 text-body-secondary\">${movie.year}</h6>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\">Director: ${movie.director}</li>\n                <li class=\"list-group-item\">Duration: ${movie.duration}</li>\n                <li class=\"list-group-item\">Genres: ${movie.genre.join(' · ')}</li>\n            </ul>\n            <div class=\"card-footer\">\n                <p class=\"card-text\">⭐ ${movie.rate}/10</p>\n            </div>\n        </div>\n        `;\n        return item;\n    });\n    items.forEach(item => featMovies.append(item));\n};\n\nmodule.exports = renderMovies;\n\n//# sourceURL=webpack://front/./scripts/renderMovies.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;