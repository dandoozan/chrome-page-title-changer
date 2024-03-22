var PAGE_MODULE =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/options.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/helpers/chrome.js":
/*!******************************!*\
  !*** ./js/helpers/chrome.js ***!
  \******************************/
/*! exports provided: clearStorage, getAllSelectedTabs, getAllTabs, getAllWindows, getContentScriptObject, getCurrentTab, getCurrentWindow, getExtensionId, getManifest, getScreenHeight, getScreenWidth, isWindowFullscreen, loadOptions, onMessage, readFromStorage, sendMessageToBackground, sendMessageToCurrentTab, writeToStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return clearStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSelectedTabs", function() { return getAllSelectedTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTabs", function() { return getAllTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllWindows", function() { return getAllWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentScriptObject", function() { return getContentScriptObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTab", function() { return getCurrentTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentWindow", function() { return getCurrentWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtensionId", function() { return getExtensionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManifest", function() { return getManifest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenHeight", function() { return getScreenHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenWidth", function() { return getScreenWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindowFullscreen", function() { return isWindowFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadOptions", function() { return loadOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMessage", function() { return onMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFromStorage", function() { return readFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageToBackground", function() { return sendMessageToBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageToCurrentTab", function() { return sendMessageToCurrentTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeToStorage", function() { return writeToStorage; });
function getManifest() {
  return chrome.runtime.getManifest();
}

async function loadOptions() {
  //first try to get options from options.json
  try {
    return __webpack_require__(/*! ../../options.json */ "./options.json");
  } catch (error) {
    //otherwise, get the options from storage
    return await readFromStorage({ options: {} });
  }
}

function readFromStorage(whatToGet) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(whatToGet, resolve);
  });
}

function clearStorage() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.clear(resolve);
  });
}

function writeToStorage(whatToSet) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.set(whatToSet, resolve);
  });
}

function onMessage(msg, callback) {
  chrome.runtime.onMessage.addListener(function (
    { message, data },
    sender,
    sendResponse
  ) {
    if (message === msg) {
      sendResponse(callback(data, sender));
    } else {
      sendResponse(null);
    }

    return true; //<-- return true to let the message sender know that I'm definitely going to be calling sendResponse (otherwise, it will timeout)
  });
}

async function sendMessageToCurrentTab(message, data) {
  return new Promise(async function (resolve) {
    let { id } = await getCurrentTab();
    chrome.tabs.sendMessage(id, { message, data }, resolve);
  });
}

async function sendMessageToBackground(message, data) {
  return new Promise(async function (resolve) {
    chrome.runtime.sendMessage({ message, data }, resolve);
  });
}

async function getContentScriptObject(url, contentScripts) {
  //this function gets the "matches" object for the given url (ie. the
  //object that looks like:
  //{
  //     "matches": ["https://www.google.com/*"],
  //     "exclude_matches": ["https://www.google.com/search?*"],
  //     "js": [
  //         "js/contentScripts/google.bundle.js",
  //         "js/contenScripts/_main.js"
  //     ],
  //     "my_custom_property": "value"
  //}

  function isMatch(url, urlGlobs) {
    if (url && urlGlobs) {
      for (let urlGlob of urlGlobs) {
        if (
          url === urlGlob ||
          urlGlob === '<all_urls>' ||
          convertMatchPatternToRegExp(urlGlob).test(url)
        ) {
          return true;
        }
      }
    }
    return false;
  }

  //if contenScripts has been passed in, get it from there
  if (contentScripts) {
    for (let contentScriptObj of contentScripts) {
      let { matches, exclude_matches } = contentScriptObj;
      //if the url matches one of the urls in "matches" and
      //does NOT match one of the urls in "exclude_matches", return this obj
      if (isMatch(url, matches) && !isMatch(url, exclude_matches)) {
        return contentScriptObj;
      }
    }
  } else {
    //otherwise, first try to get it from manifest.json
    let contentScriptObj = await getContentScriptObject(
      url,
      getManifest().content_scripts || []
    );
    if (contentScriptObj) {
      return contentScriptObj;
    }

    //if that doesn't work, then try to get it from options
    return await getContentScriptObject(
      url,
      (await loadOptions()).content_scripts || []
    );
  }
}

function getExtensionId() {
  return chrome.runtime.id;
}

function isWindowFullscreen(window) {
  return window.state === 'fullscreen';
}

function getCurrentWindow() {
  return new Promise((resolve, reject) => {
    chrome.windows.getCurrent(null, resolve);
  });
}

function getAllWindows() {
  return new Promise((resolve, reject) => {
    chrome.windows.getAll(
      {
        populate: true,
        windowTypes: ['normal'],
      },
      resolve
    );
  });
}

function getCurrentTab() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
      resolve(tabs[0]);
    });
  });
}
function getAllTabs() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ currentWindow: true }, tabs => {
      resolve(tabs);
    });
  });
}
function getAllSelectedTabs() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ currentWindow: true, highlighted: true }, tabs => {
      resolve(tabs);
    });
  });
}

function getDisplayInfo() {
  return new Promise((resolve, reject) => {
    chrome.system.display.getInfo(displays => {
      resolve(displays[0]);
    });
  });
}

async function getScreenWidth() {
  const displayInfo = await getDisplayInfo();

  //use workArea since that excludes the menu bar at the top of the screen
  return displayInfo.workArea.width;
}
async function getScreenHeight() {
  const displayInfo = await getDisplayInfo();

  //use workArea since that excludes the menu bar at the top of the screen
  return displayInfo.workArea.height;
}

/*The below is from: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns
/**
 * Transforms a valid match pattern into a regular expression
 * which matches all URLs included by that pattern.
 *
 * @param  {string}  pattern  The pattern to transform.
 * @return {RegExp}           The pattern's equivalent as a RegExp.
 * @throws {TypeError}        If the pattern is not a valid MatchPattern
 */
function convertMatchPatternToRegExp(pattern) {
  if (pattern === '') {
    return /^(?:http|https|file|ftp|app):\/\//;
  }

  const schemeSegment = '(\\*|http|https|file|ftp)';
  const hostSegment = '(\\*|(?:\\*\\.)?(?:[^/*]+))?';
  const pathSegment = '(.*)';
  const matchPatternRegExp = new RegExp(
    `^${schemeSegment}://${hostSegment}/${pathSegment}$`
  );

  let match = matchPatternRegExp.exec(pattern);
  if (!match) {
    throw new TypeError(`"${pattern}" is not a valid MatchPattern`);
  }

  let [, scheme, host, path] = match;
  if (!host) {
    throw new TypeError(`"${pattern}" does not have a valid host`);
  }

  let regex = '^';

  if (scheme === '*') {
    regex += '(http|https)';
  } else {
    regex += scheme;
  }

  regex += '://';

  if (host && host === '*') {
    regex += '[^/]+?';
  } else if (host) {
    if (host.match(/^\*\./)) {
      regex += '[^/]*?';
      host = host.substring(2);
    }
    regex += host.replace(/\./g, '\\.');
  }

  if (path) {
    if (path === '*') {
      regex += '(/.*)?';
    } else if (path.charAt(0) !== '/') {
      regex += '/';
      regex += path
        .replace(/\./g, '\\.')
        .replace(/\?/g, '\\?')
        .replace(/\*/g, '.*?');
      regex += '/?';
    }
  }

  regex += '$';
  return new RegExp(regex);
}




/***/ }),

/***/ "./js/options.js":
/*!***********************!*\
  !*** ./js/options.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_chrome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/chrome */ "./js/helpers/chrome.js");


function displayMessage(elId, msg) {
  var el = document.getElementById(elId);
  el.textContent = msg;
  setTimeout(function() {
    el.textContent = '';
  }, 750);
}

// Saves options to chrome.storage
async function saveOptions() {
  //todo: handle case when the textarea doesnt contain valid json
  await Object(_helpers_chrome__WEBPACK_IMPORTED_MODULE_0__["writeToStorage"])({
    options: JSON.parse(document.getElementById('optionsTextArea').value),
  });

  // Update status to let user know options were saved
  displayMessage('saveStatus', 'Options saved.');
}

// Restores preferences stored in chrome.storage
async function restoreOptions() {
  let { options } = await Object(_helpers_chrome__WEBPACK_IMPORTED_MODULE_0__["readFromStorage"])({ options: {} });

  //display the options on the page
  document.getElementById('optionsTextArea').value = JSON.stringify(
    options,
    null,
    '    '
  );
}

async function clearOptions() {
  await Object(_helpers_chrome__WEBPACK_IMPORTED_MODULE_0__["clearStorage"])();
  await restoreOptions();
  displayMessage('clearStatus', 'Options cleared.');
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('saveButton').addEventListener('click', saveOptions);
document.getElementById('clearButton').addEventListener('click', clearOptions);


/***/ }),

/***/ "./options.json":
/*!**********************!*\
  !*** ./options.json ***!
  \**********************/
/*! exports provided: content_scripts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"content_scripts\":[{\"matches\":[\"https://www.amazon.com/s/*\",\"https://www.amazon.com/s?*\"],\"js\":[\"js/contentScripts/General.bundle.js\"],\"newTitle\":[\"^Amazon\\\\.com\\\\s*:\\\\s*(.*)\",\"S: $1\"]},{\"matches\":[\"https://www.amazon.com/*\"],\"js\":[\"js/contentScripts/General.bundle.js\"],\"newTitle\":[\"^Amazon\\\\.com\\\\s*[:|]\\\\s*(.*)\",\"$1\"]},{\"matches\":[\"https://dev-bios-ws2.ws.asu.edu/*\"],\"js\":[\"js/contentScripts/ASU.bundle.js\"]},{\"matches\":[\"https://*.ddev.site/*\"],\"js\":[\"js/contentScripts/General.bundle.js\"],\"newTitle\":[\"(.*)\",\"[🏠]$1\"]},{\"matches\":[\"https://keep.google.com/*\"],\"js\":[\"js/contentScripts/GoogleKeep.bundle.js\"]},{\"matches\":[\"https://xd.adobe.com/view/*\"],\"js\":[\"js/contentScripts/XD.bundle.js\"]}]}");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QQUdFX01PRFVMRS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9QQUdFX01PRFVMRS8uL2pzL2hlbHBlcnMvY2hyb21lLmpzIiwid2VicGFjazovL1BBR0VfTU9EVUxFLy4vanMvb3B0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFPLENBQUMsMENBQW9CO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBLGtDQUFrQyxZQUFZLEVBQUU7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFNBQVMsS0FBSztBQUNkLGlDQUFpQyxnQkFBZ0I7QUFDakQsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hELEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLG9DQUFvQztBQUMzRDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlDQUF5QztBQUNoRTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGNBQWMsS0FBSyxZQUFZLEdBQUcsWUFBWTtBQUN0RDs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRTZUOzs7Ozs7Ozs7Ozs7O0FDOVA3VDtBQUFBO0FBSTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQWM7QUFDdEI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyxVQUFVLFNBQVMsdUVBQWUsRUFBRSxZQUFZLEVBQUU7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxvRUFBWTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL29wdGlvbnMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9vcHRpb25zLmpzXCIpO1xuIiwiZnVuY3Rpb24gZ2V0TWFuaWZlc3QoKSB7XG4gIHJldHVybiBjaHJvbWUucnVudGltZS5nZXRNYW5pZmVzdCgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkT3B0aW9ucygpIHtcbiAgLy9maXJzdCB0cnkgdG8gZ2V0IG9wdGlvbnMgZnJvbSBvcHRpb25zLmpzb25cbiAgdHJ5IHtcbiAgICByZXR1cm4gcmVxdWlyZSgnLi4vLi4vb3B0aW9ucy5qc29uJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy9vdGhlcndpc2UsIGdldCB0aGUgb3B0aW9ucyBmcm9tIHN0b3JhZ2VcbiAgICByZXR1cm4gYXdhaXQgcmVhZEZyb21TdG9yYWdlKHsgb3B0aW9uczoge30gfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhZEZyb21TdG9yYWdlKHdoYXRUb0dldCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KHdoYXRUb0dldCwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5jbGVhcihyZXNvbHZlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdyaXRlVG9TdG9yYWdlKHdoYXRUb1NldCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHdoYXRUb1NldCwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvbk1lc3NhZ2UobXNnLCBjYWxsYmFjaykge1xuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKFxuICAgIHsgbWVzc2FnZSwgZGF0YSB9LFxuICAgIHNlbmRlcixcbiAgICBzZW5kUmVzcG9uc2VcbiAgKSB7XG4gICAgaWYgKG1lc3NhZ2UgPT09IG1zZykge1xuICAgICAgc2VuZFJlc3BvbnNlKGNhbGxiYWNrKGRhdGEsIHNlbmRlcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZW5kUmVzcG9uc2UobnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7IC8vPC0tIHJldHVybiB0cnVlIHRvIGxldCB0aGUgbWVzc2FnZSBzZW5kZXIga25vdyB0aGF0IEknbSBkZWZpbml0ZWx5IGdvaW5nIHRvIGJlIGNhbGxpbmcgc2VuZFJlc3BvbnNlIChvdGhlcndpc2UsIGl0IHdpbGwgdGltZW91dClcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlVG9DdXJyZW50VGFiKG1lc3NhZ2UsIGRhdGEpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgbGV0IHsgaWQgfSA9IGF3YWl0IGdldEN1cnJlbnRUYWIoKTtcbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShpZCwgeyBtZXNzYWdlLCBkYXRhIH0sIHJlc29sdmUpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2VUb0JhY2tncm91bmQobWVzc2FnZSwgZGF0YSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IG1lc3NhZ2UsIGRhdGEgfSwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb250ZW50U2NyaXB0T2JqZWN0KHVybCwgY29udGVudFNjcmlwdHMpIHtcbiAgLy90aGlzIGZ1bmN0aW9uIGdldHMgdGhlIFwibWF0Y2hlc1wiIG9iamVjdCBmb3IgdGhlIGdpdmVuIHVybCAoaWUuIHRoZVxuICAvL29iamVjdCB0aGF0IGxvb2tzIGxpa2U6XG4gIC8ve1xuICAvLyAgICAgXCJtYXRjaGVzXCI6IFtcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vKlwiXSxcbiAgLy8gICAgIFwiZXhjbHVkZV9tYXRjaGVzXCI6IFtcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoPypcIl0sXG4gIC8vICAgICBcImpzXCI6IFtcbiAgLy8gICAgICAgICBcImpzL2NvbnRlbnRTY3JpcHRzL2dvb2dsZS5idW5kbGUuanNcIixcbiAgLy8gICAgICAgICBcImpzL2NvbnRlblNjcmlwdHMvX21haW4uanNcIlxuICAvLyAgICAgXSxcbiAgLy8gICAgIFwibXlfY3VzdG9tX3Byb3BlcnR5XCI6IFwidmFsdWVcIlxuICAvL31cblxuICBmdW5jdGlvbiBpc01hdGNoKHVybCwgdXJsR2xvYnMpIHtcbiAgICBpZiAodXJsICYmIHVybEdsb2JzKSB7XG4gICAgICBmb3IgKGxldCB1cmxHbG9iIG9mIHVybEdsb2JzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB1cmwgPT09IHVybEdsb2IgfHxcbiAgICAgICAgICB1cmxHbG9iID09PSAnPGFsbF91cmxzPicgfHxcbiAgICAgICAgICBjb252ZXJ0TWF0Y2hQYXR0ZXJuVG9SZWdFeHAodXJsR2xvYikudGVzdCh1cmwpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vaWYgY29udGVuU2NyaXB0cyBoYXMgYmVlbiBwYXNzZWQgaW4sIGdldCBpdCBmcm9tIHRoZXJlXG4gIGlmIChjb250ZW50U2NyaXB0cykge1xuICAgIGZvciAobGV0IGNvbnRlbnRTY3JpcHRPYmogb2YgY29udGVudFNjcmlwdHMpIHtcbiAgICAgIGxldCB7IG1hdGNoZXMsIGV4Y2x1ZGVfbWF0Y2hlcyB9ID0gY29udGVudFNjcmlwdE9iajtcbiAgICAgIC8vaWYgdGhlIHVybCBtYXRjaGVzIG9uZSBvZiB0aGUgdXJscyBpbiBcIm1hdGNoZXNcIiBhbmRcbiAgICAgIC8vZG9lcyBOT1QgbWF0Y2ggb25lIG9mIHRoZSB1cmxzIGluIFwiZXhjbHVkZV9tYXRjaGVzXCIsIHJldHVybiB0aGlzIG9ialxuICAgICAgaWYgKGlzTWF0Y2godXJsLCBtYXRjaGVzKSAmJiAhaXNNYXRjaCh1cmwsIGV4Y2x1ZGVfbWF0Y2hlcykpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRTY3JpcHRPYmo7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vb3RoZXJ3aXNlLCBmaXJzdCB0cnkgdG8gZ2V0IGl0IGZyb20gbWFuaWZlc3QuanNvblxuICAgIGxldCBjb250ZW50U2NyaXB0T2JqID0gYXdhaXQgZ2V0Q29udGVudFNjcmlwdE9iamVjdChcbiAgICAgIHVybCxcbiAgICAgIGdldE1hbmlmZXN0KCkuY29udGVudF9zY3JpcHRzIHx8IFtdXG4gICAgKTtcbiAgICBpZiAoY29udGVudFNjcmlwdE9iaikge1xuICAgICAgcmV0dXJuIGNvbnRlbnRTY3JpcHRPYmo7XG4gICAgfVxuXG4gICAgLy9pZiB0aGF0IGRvZXNuJ3Qgd29yaywgdGhlbiB0cnkgdG8gZ2V0IGl0IGZyb20gb3B0aW9uc1xuICAgIHJldHVybiBhd2FpdCBnZXRDb250ZW50U2NyaXB0T2JqZWN0KFxuICAgICAgdXJsLFxuICAgICAgKGF3YWl0IGxvYWRPcHRpb25zKCkpLmNvbnRlbnRfc2NyaXB0cyB8fCBbXVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXh0ZW5zaW9uSWQoKSB7XG4gIHJldHVybiBjaHJvbWUucnVudGltZS5pZDtcbn1cblxuZnVuY3Rpb24gaXNXaW5kb3dGdWxsc2NyZWVuKHdpbmRvdykge1xuICByZXR1cm4gd2luZG93LnN0YXRlID09PSAnZnVsbHNjcmVlbic7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRXaW5kb3coKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLndpbmRvd3MuZ2V0Q3VycmVudChudWxsLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFsbFdpbmRvd3MoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLndpbmRvd3MuZ2V0QWxsKFxuICAgICAge1xuICAgICAgICBwb3B1bGF0ZTogdHJ1ZSxcbiAgICAgICAgd2luZG93VHlwZXM6IFsnbm9ybWFsJ10sXG4gICAgICB9LFxuICAgICAgcmVzb2x2ZVxuICAgICk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50VGFiKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0sIGZ1bmN0aW9uKHRhYnMpIHtcbiAgICAgIHJlc29sdmUodGFic1swXSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0QWxsVGFicygpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgdGFicyA9PiB7XG4gICAgICByZXNvbHZlKHRhYnMpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldEFsbFNlbGVjdGVkVGFicygpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGhpZ2hsaWdodGVkOiB0cnVlIH0sIHRhYnMgPT4ge1xuICAgICAgcmVzb2x2ZSh0YWJzKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldERpc3BsYXlJbmZvKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zeXN0ZW0uZGlzcGxheS5nZXRJbmZvKGRpc3BsYXlzID0+IHtcbiAgICAgIHJlc29sdmUoZGlzcGxheXNbMF0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U2NyZWVuV2lkdGgoKSB7XG4gIGNvbnN0IGRpc3BsYXlJbmZvID0gYXdhaXQgZ2V0RGlzcGxheUluZm8oKTtcblxuICAvL3VzZSB3b3JrQXJlYSBzaW5jZSB0aGF0IGV4Y2x1ZGVzIHRoZSBtZW51IGJhciBhdCB0aGUgdG9wIG9mIHRoZSBzY3JlZW5cbiAgcmV0dXJuIGRpc3BsYXlJbmZvLndvcmtBcmVhLndpZHRoO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0U2NyZWVuSGVpZ2h0KCkge1xuICBjb25zdCBkaXNwbGF5SW5mbyA9IGF3YWl0IGdldERpc3BsYXlJbmZvKCk7XG5cbiAgLy91c2Ugd29ya0FyZWEgc2luY2UgdGhhdCBleGNsdWRlcyB0aGUgbWVudSBiYXIgYXQgdGhlIHRvcCBvZiB0aGUgc2NyZWVuXG4gIHJldHVybiBkaXNwbGF5SW5mby53b3JrQXJlYS5oZWlnaHQ7XG59XG5cbi8qVGhlIGJlbG93IGlzIGZyb206IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL0FkZC1vbnMvV2ViRXh0ZW5zaW9ucy9NYXRjaF9wYXR0ZXJuc1xuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgdmFsaWQgbWF0Y2ggcGF0dGVybiBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uXG4gKiB3aGljaCBtYXRjaGVzIGFsbCBVUkxzIGluY2x1ZGVkIGJ5IHRoYXQgcGF0dGVybi5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBwYXR0ZXJuICBUaGUgcGF0dGVybiB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHtSZWdFeHB9ICAgICAgICAgICBUaGUgcGF0dGVybidzIGVxdWl2YWxlbnQgYXMgYSBSZWdFeHAuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9ICAgICAgICBJZiB0aGUgcGF0dGVybiBpcyBub3QgYSB2YWxpZCBNYXRjaFBhdHRlcm5cbiAqL1xuZnVuY3Rpb24gY29udmVydE1hdGNoUGF0dGVyblRvUmVnRXhwKHBhdHRlcm4pIHtcbiAgaWYgKHBhdHRlcm4gPT09ICcnKSB7XG4gICAgcmV0dXJuIC9eKD86aHR0cHxodHRwc3xmaWxlfGZ0cHxhcHApOlxcL1xcLy87XG4gIH1cblxuICBjb25zdCBzY2hlbWVTZWdtZW50ID0gJyhcXFxcKnxodHRwfGh0dHBzfGZpbGV8ZnRwKSc7XG4gIGNvbnN0IGhvc3RTZWdtZW50ID0gJyhcXFxcKnwoPzpcXFxcKlxcXFwuKT8oPzpbXi8qXSspKT8nO1xuICBjb25zdCBwYXRoU2VnbWVudCA9ICcoLiopJztcbiAgY29uc3QgbWF0Y2hQYXR0ZXJuUmVnRXhwID0gbmV3IFJlZ0V4cChcbiAgICBgXiR7c2NoZW1lU2VnbWVudH06Ly8ke2hvc3RTZWdtZW50fS8ke3BhdGhTZWdtZW50fSRgXG4gICk7XG5cbiAgbGV0IG1hdGNoID0gbWF0Y2hQYXR0ZXJuUmVnRXhwLmV4ZWMocGF0dGVybik7XG4gIGlmICghbWF0Y2gpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBcIiR7cGF0dGVybn1cIiBpcyBub3QgYSB2YWxpZCBNYXRjaFBhdHRlcm5gKTtcbiAgfVxuXG4gIGxldCBbLCBzY2hlbWUsIGhvc3QsIHBhdGhdID0gbWF0Y2g7XG4gIGlmICghaG9zdCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFwiJHtwYXR0ZXJufVwiIGRvZXMgbm90IGhhdmUgYSB2YWxpZCBob3N0YCk7XG4gIH1cblxuICBsZXQgcmVnZXggPSAnXic7XG5cbiAgaWYgKHNjaGVtZSA9PT0gJyonKSB7XG4gICAgcmVnZXggKz0gJyhodHRwfGh0dHBzKSc7XG4gIH0gZWxzZSB7XG4gICAgcmVnZXggKz0gc2NoZW1lO1xuICB9XG5cbiAgcmVnZXggKz0gJzovLyc7XG5cbiAgaWYgKGhvc3QgJiYgaG9zdCA9PT0gJyonKSB7XG4gICAgcmVnZXggKz0gJ1teL10rPyc7XG4gIH0gZWxzZSBpZiAoaG9zdCkge1xuICAgIGlmIChob3N0Lm1hdGNoKC9eXFwqXFwuLykpIHtcbiAgICAgIHJlZ2V4ICs9ICdbXi9dKj8nO1xuICAgICAgaG9zdCA9IGhvc3Quc3Vic3RyaW5nKDIpO1xuICAgIH1cbiAgICByZWdleCArPSBob3N0LnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKTtcbiAgfVxuXG4gIGlmIChwYXRoKSB7XG4gICAgaWYgKHBhdGggPT09ICcqJykge1xuICAgICAgcmVnZXggKz0gJygvLiopPyc7XG4gICAgfSBlbHNlIGlmIChwYXRoLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICByZWdleCArPSAnLyc7XG4gICAgICByZWdleCArPSBwYXRoXG4gICAgICAgIC5yZXBsYWNlKC9cXC4vZywgJ1xcXFwuJylcbiAgICAgICAgLnJlcGxhY2UoL1xcPy9nLCAnXFxcXD8nKVxuICAgICAgICAucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICAgIHJlZ2V4ICs9ICcvPyc7XG4gICAgfVxuICB9XG5cbiAgcmVnZXggKz0gJyQnO1xuICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleCk7XG59XG5cbmV4cG9ydCB7IGNsZWFyU3RvcmFnZSwgZ2V0QWxsU2VsZWN0ZWRUYWJzLCBnZXRBbGxUYWJzLCBnZXRBbGxXaW5kb3dzLCBnZXRDb250ZW50U2NyaXB0T2JqZWN0LCBnZXRDdXJyZW50VGFiLCBnZXRDdXJyZW50V2luZG93LCBnZXRFeHRlbnNpb25JZCwgZ2V0TWFuaWZlc3QsIGdldFNjcmVlbkhlaWdodCwgZ2V0U2NyZWVuV2lkdGgsIGlzV2luZG93RnVsbHNjcmVlbiwgbG9hZE9wdGlvbnMsIG9uTWVzc2FnZSwgcmVhZEZyb21TdG9yYWdlLCBzZW5kTWVzc2FnZVRvQmFja2dyb3VuZCwgc2VuZE1lc3NhZ2VUb0N1cnJlbnRUYWIsIHdyaXRlVG9TdG9yYWdlIH07XG4iLCJpbXBvcnQge1xuICByZWFkRnJvbVN0b3JhZ2UsXG4gIHdyaXRlVG9TdG9yYWdlLFxuICBjbGVhclN0b3JhZ2UsXG59IGZyb20gJy4vaGVscGVycy9jaHJvbWUnO1xuXG5mdW5jdGlvbiBkaXNwbGF5TWVzc2FnZShlbElkLCBtc2cpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxJZCk7XG4gIGVsLnRleHRDb250ZW50ID0gbXNnO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGVsLnRleHRDb250ZW50ID0gJyc7XG4gIH0sIDc1MCk7XG59XG5cbi8vIFNhdmVzIG9wdGlvbnMgdG8gY2hyb21lLnN0b3JhZ2VcbmFzeW5jIGZ1bmN0aW9uIHNhdmVPcHRpb25zKCkge1xuICAvL3RvZG86IGhhbmRsZSBjYXNlIHdoZW4gdGhlIHRleHRhcmVhIGRvZXNudCBjb250YWluIHZhbGlkIGpzb25cbiAgYXdhaXQgd3JpdGVUb1N0b3JhZ2Uoe1xuICAgIG9wdGlvbnM6IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnNUZXh0QXJlYScpLnZhbHVlKSxcbiAgfSk7XG5cbiAgLy8gVXBkYXRlIHN0YXR1cyB0byBsZXQgdXNlciBrbm93IG9wdGlvbnMgd2VyZSBzYXZlZFxuICBkaXNwbGF5TWVzc2FnZSgnc2F2ZVN0YXR1cycsICdPcHRpb25zIHNhdmVkLicpO1xufVxuXG4vLyBSZXN0b3JlcyBwcmVmZXJlbmNlcyBzdG9yZWQgaW4gY2hyb21lLnN0b3JhZ2VcbmFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVPcHRpb25zKCkge1xuICBsZXQgeyBvcHRpb25zIH0gPSBhd2FpdCByZWFkRnJvbVN0b3JhZ2UoeyBvcHRpb25zOiB7fSB9KTtcblxuICAvL2Rpc3BsYXkgdGhlIG9wdGlvbnMgb24gdGhlIHBhZ2VcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnNUZXh0QXJlYScpLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgb3B0aW9ucyxcbiAgICBudWxsLFxuICAgICcgICAgJ1xuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjbGVhck9wdGlvbnMoKSB7XG4gIGF3YWl0IGNsZWFyU3RvcmFnZSgpO1xuICBhd2FpdCByZXN0b3JlT3B0aW9ucygpO1xuICBkaXNwbGF5TWVzc2FnZSgnY2xlYXJTdGF0dXMnLCAnT3B0aW9ucyBjbGVhcmVkLicpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmVzdG9yZU9wdGlvbnMpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmVCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVPcHRpb25zKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhckJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJPcHRpb25zKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=