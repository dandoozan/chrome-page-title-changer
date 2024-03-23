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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/contentScripts/General.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/contentScripts/General.js":
/*!**************************************!*\
  !*** ./js/contentScripts/General.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_chrome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/chrome */ "./js/helpers/chrome.js");


(async function main() {
  let url = window.location.href;
  let oldTitle = document.title;

  let { fragment, newTitle } = (await Object(_helpers_chrome__WEBPACK_IMPORTED_MODULE_0__["getContentScriptObject"])(url)) || {};

  //NOTE: I have to check for the 'fragment' part of the url (ie. the part
  //after the '#') here b/c the manifest 'matches' url thing doesn't take
  //into account the url fragment
  if (!fragment || url.indexOf(fragment) > -1) {
    //handle case where title is regex replacement
    if (Array.isArray(newTitle)) {
      let [from, to] = newTitle;
      document.title = oldTitle.replace(new RegExp(from), to);
    } else {
      document.title = newTitle;
    }
  }
})();


/***/ }),

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

/***/ "./options.json":
/*!**********************!*\
  !*** ./options.json ***!
  \**********************/
/*! exports provided: content_scripts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"content_scripts\":[{\"matches\":[\"https://www.amazon.com/s/*\",\"https://www.amazon.com/s?*\"],\"js\":[\"js/contentScripts/General.bundle.js\"],\"newTitle\":[\"^Amazon\\\\.com\\\\s*:\\\\s*(.*)\",\"S: $1\"]},{\"matches\":[\"https://www.amazon.com/*\"],\"js\":[\"js/contentScripts/General.bundle.js\"],\"newTitle\":[\"^Amazon\\\\.com\\\\s*[:|]\\\\s*(.*)\",\"$1\"]},{\"matches\":[\"https://*.ws.asu.edu/*\"],\"js\":[\"js/contentScripts/ASU.bundle.js\"]},{\"matches\":[\"https://*.ddev.site/*\"],\"js\":[\"js/contentScripts/General.bundle.js\"],\"newTitle\":[\"(.*)\",\"[🏠]$1\"]},{\"matches\":[\"https://keep.google.com/*\"],\"js\":[\"js/contentScripts/GoogleKeep.bundle.js\"]},{\"matches\":[\"https://xd.adobe.com/view/*\"],\"js\":[\"js/contentScripts/XD.bundle.js\"]}]}");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QQUdFX01PRFVMRS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9QQUdFX01PRFVMRS8uL2pzL2NvbnRlbnRTY3JpcHRzL0dlbmVyYWwuanMiLCJ3ZWJwYWNrOi8vUEFHRV9NT0RVTEUvLi9qcy9oZWxwZXJzL2Nocm9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQTJEOztBQUUzRDtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxxQkFBcUIsVUFBVSw4RUFBc0I7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFPLENBQUMsMENBQW9CO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBLGtDQUFrQyxZQUFZLEVBQUU7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFNBQVMsS0FBSztBQUNkLGlDQUFpQyxnQkFBZ0I7QUFDakQsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hELEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLG9DQUFvQztBQUMzRDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlDQUF5QztBQUNoRTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGNBQWMsS0FBSyxZQUFZLEdBQUcsWUFBWTtBQUN0RDs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRTZUIiwiZmlsZSI6Ii9qcy9jb250ZW50U2NyaXB0cy9HZW5lcmFsLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvY29udGVudFNjcmlwdHMvR2VuZXJhbC5qc1wiKTtcbiIsImltcG9ydCB7IGdldENvbnRlbnRTY3JpcHRPYmplY3QgfSBmcm9tICcuLi9oZWxwZXJzL2Nocm9tZSc7XG5cbihhc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIGxldCBvbGRUaXRsZSA9IGRvY3VtZW50LnRpdGxlO1xuXG4gIGxldCB7IGZyYWdtZW50LCBuZXdUaXRsZSB9ID0gKGF3YWl0IGdldENvbnRlbnRTY3JpcHRPYmplY3QodXJsKSkgfHwge307XG5cbiAgLy9OT1RFOiBJIGhhdmUgdG8gY2hlY2sgZm9yIHRoZSAnZnJhZ21lbnQnIHBhcnQgb2YgdGhlIHVybCAoaWUuIHRoZSBwYXJ0XG4gIC8vYWZ0ZXIgdGhlICcjJykgaGVyZSBiL2MgdGhlIG1hbmlmZXN0ICdtYXRjaGVzJyB1cmwgdGhpbmcgZG9lc24ndCB0YWtlXG4gIC8vaW50byBhY2NvdW50IHRoZSB1cmwgZnJhZ21lbnRcbiAgaWYgKCFmcmFnbWVudCB8fCB1cmwuaW5kZXhPZihmcmFnbWVudCkgPiAtMSkge1xuICAgIC8vaGFuZGxlIGNhc2Ugd2hlcmUgdGl0bGUgaXMgcmVnZXggcmVwbGFjZW1lbnRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdUaXRsZSkpIHtcbiAgICAgIGxldCBbZnJvbSwgdG9dID0gbmV3VGl0bGU7XG4gICAgICBkb2N1bWVudC50aXRsZSA9IG9sZFRpdGxlLnJlcGxhY2UobmV3IFJlZ0V4cChmcm9tKSwgdG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC50aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cbiAgfVxufSkoKTtcbiIsImZ1bmN0aW9uIGdldE1hbmlmZXN0KCkge1xuICByZXR1cm4gY2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZE9wdGlvbnMoKSB7XG4gIC8vZmlyc3QgdHJ5IHRvIGdldCBvcHRpb25zIGZyb20gb3B0aW9ucy5qc29uXG4gIHRyeSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoJy4uLy4uL29wdGlvbnMuanNvbicpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vb3RoZXJ3aXNlLCBnZXQgdGhlIG9wdGlvbnMgZnJvbSBzdG9yYWdlXG4gICAgcmV0dXJuIGF3YWl0IHJlYWRGcm9tU3RvcmFnZSh7IG9wdGlvbnM6IHt9IH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlYWRGcm9tU3RvcmFnZSh3aGF0VG9HZXQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCh3aGF0VG9HZXQsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTdG9yYWdlKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuY2xlYXIocmVzb2x2ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3cml0ZVRvU3RvcmFnZSh3aGF0VG9TZXQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh3aGF0VG9TZXQsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25NZXNzYWdlKG1zZywgY2FsbGJhY2spIHtcbiAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChcbiAgICB7IG1lc3NhZ2UsIGRhdGEgfSxcbiAgICBzZW5kZXIsXG4gICAgc2VuZFJlc3BvbnNlXG4gICkge1xuICAgIGlmIChtZXNzYWdlID09PSBtc2cpIHtcbiAgICAgIHNlbmRSZXNwb25zZShjYWxsYmFjayhkYXRhLCBzZW5kZXIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VuZFJlc3BvbnNlKG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlOyAvLzwtLSByZXR1cm4gdHJ1ZSB0byBsZXQgdGhlIG1lc3NhZ2Ugc2VuZGVyIGtub3cgdGhhdCBJJ20gZGVmaW5pdGVseSBnb2luZyB0byBiZSBjYWxsaW5nIHNlbmRSZXNwb25zZSAob3RoZXJ3aXNlLCBpdCB3aWxsIHRpbWVvdXQpXG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZVRvQ3VycmVudFRhYihtZXNzYWdlLCBkYXRhKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIGxldCB7IGlkIH0gPSBhd2FpdCBnZXRDdXJyZW50VGFiKCk7XG4gICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoaWQsIHsgbWVzc2FnZSwgZGF0YSB9LCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kKG1lc3NhZ2UsIGRhdGEpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBtZXNzYWdlLCBkYXRhIH0sIHJlc29sdmUpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29udGVudFNjcmlwdE9iamVjdCh1cmwsIGNvbnRlbnRTY3JpcHRzKSB7XG4gIC8vdGhpcyBmdW5jdGlvbiBnZXRzIHRoZSBcIm1hdGNoZXNcIiBvYmplY3QgZm9yIHRoZSBnaXZlbiB1cmwgKGllLiB0aGVcbiAgLy9vYmplY3QgdGhhdCBsb29rcyBsaWtlOlxuICAvL3tcbiAgLy8gICAgIFwibWF0Y2hlc1wiOiBbXCJodHRwczovL3d3dy5nb29nbGUuY29tLypcIl0sXG4gIC8vICAgICBcImV4Y2x1ZGVfbWF0Y2hlc1wiOiBbXCJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD8qXCJdLFxuICAvLyAgICAgXCJqc1wiOiBbXG4gIC8vICAgICAgICAgXCJqcy9jb250ZW50U2NyaXB0cy9nb29nbGUuYnVuZGxlLmpzXCIsXG4gIC8vICAgICAgICAgXCJqcy9jb250ZW5TY3JpcHRzL19tYWluLmpzXCJcbiAgLy8gICAgIF0sXG4gIC8vICAgICBcIm15X2N1c3RvbV9wcm9wZXJ0eVwiOiBcInZhbHVlXCJcbiAgLy99XG5cbiAgZnVuY3Rpb24gaXNNYXRjaCh1cmwsIHVybEdsb2JzKSB7XG4gICAgaWYgKHVybCAmJiB1cmxHbG9icykge1xuICAgICAgZm9yIChsZXQgdXJsR2xvYiBvZiB1cmxHbG9icykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdXJsID09PSB1cmxHbG9iIHx8XG4gICAgICAgICAgdXJsR2xvYiA9PT0gJzxhbGxfdXJscz4nIHx8XG4gICAgICAgICAgY29udmVydE1hdGNoUGF0dGVyblRvUmVnRXhwKHVybEdsb2IpLnRlc3QodXJsKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvL2lmIGNvbnRlblNjcmlwdHMgaGFzIGJlZW4gcGFzc2VkIGluLCBnZXQgaXQgZnJvbSB0aGVyZVxuICBpZiAoY29udGVudFNjcmlwdHMpIHtcbiAgICBmb3IgKGxldCBjb250ZW50U2NyaXB0T2JqIG9mIGNvbnRlbnRTY3JpcHRzKSB7XG4gICAgICBsZXQgeyBtYXRjaGVzLCBleGNsdWRlX21hdGNoZXMgfSA9IGNvbnRlbnRTY3JpcHRPYmo7XG4gICAgICAvL2lmIHRoZSB1cmwgbWF0Y2hlcyBvbmUgb2YgdGhlIHVybHMgaW4gXCJtYXRjaGVzXCIgYW5kXG4gICAgICAvL2RvZXMgTk9UIG1hdGNoIG9uZSBvZiB0aGUgdXJscyBpbiBcImV4Y2x1ZGVfbWF0Y2hlc1wiLCByZXR1cm4gdGhpcyBvYmpcbiAgICAgIGlmIChpc01hdGNoKHVybCwgbWF0Y2hlcykgJiYgIWlzTWF0Y2godXJsLCBleGNsdWRlX21hdGNoZXMpKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50U2NyaXB0T2JqO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvL290aGVyd2lzZSwgZmlyc3QgdHJ5IHRvIGdldCBpdCBmcm9tIG1hbmlmZXN0Lmpzb25cbiAgICBsZXQgY29udGVudFNjcmlwdE9iaiA9IGF3YWl0IGdldENvbnRlbnRTY3JpcHRPYmplY3QoXG4gICAgICB1cmwsXG4gICAgICBnZXRNYW5pZmVzdCgpLmNvbnRlbnRfc2NyaXB0cyB8fCBbXVxuICAgICk7XG4gICAgaWYgKGNvbnRlbnRTY3JpcHRPYmopIHtcbiAgICAgIHJldHVybiBjb250ZW50U2NyaXB0T2JqO1xuICAgIH1cblxuICAgIC8vaWYgdGhhdCBkb2Vzbid0IHdvcmssIHRoZW4gdHJ5IHRvIGdldCBpdCBmcm9tIG9wdGlvbnNcbiAgICByZXR1cm4gYXdhaXQgZ2V0Q29udGVudFNjcmlwdE9iamVjdChcbiAgICAgIHVybCxcbiAgICAgIChhd2FpdCBsb2FkT3B0aW9ucygpKS5jb250ZW50X3NjcmlwdHMgfHwgW11cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEV4dGVuc2lvbklkKCkge1xuICByZXR1cm4gY2hyb21lLnJ1bnRpbWUuaWQ7XG59XG5cbmZ1bmN0aW9uIGlzV2luZG93RnVsbHNjcmVlbih3aW5kb3cpIHtcbiAgcmV0dXJuIHdpbmRvdy5zdGF0ZSA9PT0gJ2Z1bGxzY3JlZW4nO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50V2luZG93KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQobnVsbCwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBbGxXaW5kb3dzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS53aW5kb3dzLmdldEFsbChcbiAgICAgIHtcbiAgICAgICAgcG9wdWxhdGU6IHRydWUsXG4gICAgICAgIHdpbmRvd1R5cGVzOiBbJ25vcm1hbCddLFxuICAgICAgfSxcbiAgICAgIHJlc29sdmVcbiAgICApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFRhYigpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9LCBmdW5jdGlvbih0YWJzKSB7XG4gICAgICByZXNvbHZlKHRhYnNbMF0pO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldEFsbFRhYnMoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlIH0sIHRhYnMgPT4ge1xuICAgICAgcmVzb2x2ZSh0YWJzKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRBbGxTZWxlY3RlZFRhYnMoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBoaWdobGlnaHRlZDogdHJ1ZSB9LCB0YWJzID0+IHtcbiAgICAgIHJlc29sdmUodGFicyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXREaXNwbGF5SW5mbygpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUuc3lzdGVtLmRpc3BsYXkuZ2V0SW5mbyhkaXNwbGF5cyA9PiB7XG4gICAgICByZXNvbHZlKGRpc3BsYXlzWzBdKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNjcmVlbldpZHRoKCkge1xuICBjb25zdCBkaXNwbGF5SW5mbyA9IGF3YWl0IGdldERpc3BsYXlJbmZvKCk7XG5cbiAgLy91c2Ugd29ya0FyZWEgc2luY2UgdGhhdCBleGNsdWRlcyB0aGUgbWVudSBiYXIgYXQgdGhlIHRvcCBvZiB0aGUgc2NyZWVuXG4gIHJldHVybiBkaXNwbGF5SW5mby53b3JrQXJlYS53aWR0aDtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldFNjcmVlbkhlaWdodCgpIHtcbiAgY29uc3QgZGlzcGxheUluZm8gPSBhd2FpdCBnZXREaXNwbGF5SW5mbygpO1xuXG4gIC8vdXNlIHdvcmtBcmVhIHNpbmNlIHRoYXQgZXhjbHVkZXMgdGhlIG1lbnUgYmFyIGF0IHRoZSB0b3Agb2YgdGhlIHNjcmVlblxuICByZXR1cm4gZGlzcGxheUluZm8ud29ya0FyZWEuaGVpZ2h0O1xufVxuXG4vKlRoZSBiZWxvdyBpcyBmcm9tOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9BZGQtb25zL1dlYkV4dGVuc2lvbnMvTWF0Y2hfcGF0dGVybnNcbi8qKlxuICogVHJhbnNmb3JtcyBhIHZhbGlkIG1hdGNoIHBhdHRlcm4gaW50byBhIHJlZ3VsYXIgZXhwcmVzc2lvblxuICogd2hpY2ggbWF0Y2hlcyBhbGwgVVJMcyBpbmNsdWRlZCBieSB0aGF0IHBhdHRlcm4uXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgcGF0dGVybiAgVGhlIHBhdHRlcm4gdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7UmVnRXhwfSAgICAgICAgICAgVGhlIHBhdHRlcm4ncyBlcXVpdmFsZW50IGFzIGEgUmVnRXhwLlxuICogQHRocm93cyB7VHlwZUVycm9yfSAgICAgICAgSWYgdGhlIHBhdHRlcm4gaXMgbm90IGEgdmFsaWQgTWF0Y2hQYXR0ZXJuXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRNYXRjaFBhdHRlcm5Ub1JlZ0V4cChwYXR0ZXJuKSB7XG4gIGlmIChwYXR0ZXJuID09PSAnJykge1xuICAgIHJldHVybiAvXig/Omh0dHB8aHR0cHN8ZmlsZXxmdHB8YXBwKTpcXC9cXC8vO1xuICB9XG5cbiAgY29uc3Qgc2NoZW1lU2VnbWVudCA9ICcoXFxcXCp8aHR0cHxodHRwc3xmaWxlfGZ0cCknO1xuICBjb25zdCBob3N0U2VnbWVudCA9ICcoXFxcXCp8KD86XFxcXCpcXFxcLik/KD86W14vKl0rKSk/JztcbiAgY29uc3QgcGF0aFNlZ21lbnQgPSAnKC4qKSc7XG4gIGNvbnN0IG1hdGNoUGF0dGVyblJlZ0V4cCA9IG5ldyBSZWdFeHAoXG4gICAgYF4ke3NjaGVtZVNlZ21lbnR9Oi8vJHtob3N0U2VnbWVudH0vJHtwYXRoU2VnbWVudH0kYFxuICApO1xuXG4gIGxldCBtYXRjaCA9IG1hdGNoUGF0dGVyblJlZ0V4cC5leGVjKHBhdHRlcm4pO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgXCIke3BhdHRlcm59XCIgaXMgbm90IGEgdmFsaWQgTWF0Y2hQYXR0ZXJuYCk7XG4gIH1cblxuICBsZXQgWywgc2NoZW1lLCBob3N0LCBwYXRoXSA9IG1hdGNoO1xuICBpZiAoIWhvc3QpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBcIiR7cGF0dGVybn1cIiBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgaG9zdGApO1xuICB9XG5cbiAgbGV0IHJlZ2V4ID0gJ14nO1xuXG4gIGlmIChzY2hlbWUgPT09ICcqJykge1xuICAgIHJlZ2V4ICs9ICcoaHR0cHxodHRwcyknO1xuICB9IGVsc2Uge1xuICAgIHJlZ2V4ICs9IHNjaGVtZTtcbiAgfVxuXG4gIHJlZ2V4ICs9ICc6Ly8nO1xuXG4gIGlmIChob3N0ICYmIGhvc3QgPT09ICcqJykge1xuICAgIHJlZ2V4ICs9ICdbXi9dKz8nO1xuICB9IGVsc2UgaWYgKGhvc3QpIHtcbiAgICBpZiAoaG9zdC5tYXRjaCgvXlxcKlxcLi8pKSB7XG4gICAgICByZWdleCArPSAnW14vXSo/JztcbiAgICAgIGhvc3QgPSBob3N0LnN1YnN0cmluZygyKTtcbiAgICB9XG4gICAgcmVnZXggKz0gaG9zdC5yZXBsYWNlKC9cXC4vZywgJ1xcXFwuJyk7XG4gIH1cblxuICBpZiAocGF0aCkge1xuICAgIGlmIChwYXRoID09PSAnKicpIHtcbiAgICAgIHJlZ2V4ICs9ICcoLy4qKT8nO1xuICAgIH0gZWxzZSBpZiAocGF0aC5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgcmVnZXggKz0gJy8nO1xuICAgICAgcmVnZXggKz0gcGF0aFxuICAgICAgICAucmVwbGFjZSgvXFwuL2csICdcXFxcLicpXG4gICAgICAgIC5yZXBsYWNlKC9cXD8vZywgJ1xcXFw/JylcbiAgICAgICAgLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgICByZWdleCArPSAnLz8nO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2V4ICs9ICckJztcbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgpO1xufVxuXG5leHBvcnQgeyBjbGVhclN0b3JhZ2UsIGdldEFsbFNlbGVjdGVkVGFicywgZ2V0QWxsVGFicywgZ2V0QWxsV2luZG93cywgZ2V0Q29udGVudFNjcmlwdE9iamVjdCwgZ2V0Q3VycmVudFRhYiwgZ2V0Q3VycmVudFdpbmRvdywgZ2V0RXh0ZW5zaW9uSWQsIGdldE1hbmlmZXN0LCBnZXRTY3JlZW5IZWlnaHQsIGdldFNjcmVlbldpZHRoLCBpc1dpbmRvd0Z1bGxzY3JlZW4sIGxvYWRPcHRpb25zLCBvbk1lc3NhZ2UsIHJlYWRGcm9tU3RvcmFnZSwgc2VuZE1lc3NhZ2VUb0JhY2tncm91bmQsIHNlbmRNZXNzYWdlVG9DdXJyZW50VGFiLCB3cml0ZVRvU3RvcmFnZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==