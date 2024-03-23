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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/background/injectCustomContentScripts.js":
/*!*****************************************************!*\
  !*** ./js/background/injectCustomContentScripts.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

(async () => {
  const { content_scripts: contentScripts } = await loadOptions();
  chrome.tabs.onUpdated.addListener(async function(tabId, { status }, { url }) {
    if (status === 'complete') {
      //get the content scripts to inject for this url
      //NOTE: make sure an array is passed in for contentScripts to force it to search
      //there (and not go looking for the contentScriptObj elsewhere (ie. in manifest.json)).
      let contentScriptObj = await getContentScriptObject(
        url,
        contentScripts || []
      );
      if (contentScriptObj && contentScriptObj.js) {
        //inject the scripts in "js"
        contentScriptObj.js.forEach(file => {
          chrome.tabs.executeScript(tabId, {
            file,
          });
        });
      }
    }
  });
})();


/***/ }),

/***/ "./js/background/listenForReload.js":
/*!******************************************!*\
  !*** ./js/background/listenForReload.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(() => {
  const CRX_RELOADER_EXTENSION_ID = 'paocmaifdmfljmoolediklemnlnmdefb';
  const RELOAD_MESSAGE = 'reloadExtension';
  const BADGE_MESSAGE = 'RLD'; //for 'reloaded'
  const BADGE_COLOR = '#4cb749'; //green
  const BADGE_TIMEOUT_IN_MS = 1000;

  function showBadge(msgOf4CharsOrLess, colorAsCSSCompatibleString) {
    chrome.browserAction.setBadgeText({ text: msgOf4CharsOrLess });
    chrome.browserAction.setBadgeBackgroundColor({
      color: colorAsCSSCompatibleString,
    });
  }

  function removeBadge() {
    //i guess just set the badge text to '' to remove it; i don't see anything in
    //the documentation for how to remove a badge, and I can't think of any other way
    //to do it
    chrome.browserAction.setBadgeText({ text: '' });
  }

  function flashBadge(
    msgOf4CharsOrLess,
    colorAsCSSCompatibleString,
    timeoutInMs
  ) {
    showBadge(msgOf4CharsOrLess, colorAsCSSCompatibleString);
    setTimeout(removeBadge, timeoutInMs);
  }

  function handleOnInstalled() {
    flashBadge(BADGE_MESSAGE, BADGE_COLOR, BADGE_TIMEOUT_IN_MS);
  }

  function reloadThisExtension() {
    chrome.runtime.reload();
  }

  function handleOnMessageExternal(request, sender, sendResponse) {
    if (
      sender.id === CRX_RELOADER_EXTENSION_ID &&
      request.msg === RELOAD_MESSAGE
    ) {
      reloadThisExtension();

      //send response of true on success to let sender know the message was received and handled
      sendResponse(true);
    }
  }

  chrome.runtime.onInstalled.addListener(handleOnInstalled);
  chrome.runtime.onMessageExternal.addListener(handleOnMessageExternal);
})();


/***/ }),

/***/ "./options.json":
/*!**********************!*\
  !*** ./options.json ***!
  \**********************/
/*! exports provided: content_scripts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"content_scripts\":[{\"matches\":[\"https://www.amazon.com/s/*\",\"https://www.amazon.com/s?*\"],\"js\":[\"js/contentScripts/General.bundle.js\"],\"newTitle\":[\"^Amazon\\\\.com\\\\s*:\\\\s*(.*)\",\"S: $1\"]},{\"matches\":[\"https://www.amazon.com/*\"],\"js\":[\"js/contentScripts/General.bundle.js\"],\"newTitle\":[\"^Amazon\\\\.com\\\\s*[:|]\\\\s*(.*)\",\"$1\"]},{\"matches\":[\"https://*.ws.asu.edu/*\"],\"js\":[\"js/contentScripts/ASU.bundle.js\"]},{\"matches\":[\"https://*.ddev.site/*\"],\"js\":[\"js/contentScripts/General.bundle.js\"],\"newTitle\":[\"(.*)\",\"[🏠]$1\"]},{\"matches\":[\"https://keep.google.com/*\"],\"js\":[\"js/contentScripts/GoogleKeep.bundle.js\"]},{\"matches\":[\"https://xd.adobe.com/view/*\"],\"js\":[\"js/contentScripts/XD.bundle.js\"]}]}");

/***/ }),

/***/ 0:
/*!**********************************************************************************************!*\
  !*** multi ./js/background/injectCustomContentScripts.js ./js/background/listenForReload.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/dan/Desktop/GitRepos/chrome-page-title-changer/src/js/background/injectCustomContentScripts.js */"./js/background/injectCustomContentScripts.js");
module.exports = __webpack_require__(/*! /Users/dan/Desktop/GitRepos/chrome-page-title-changer/src/js/background/listenForReload.js */"./js/background/listenForReload.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QQUdFX01PRFVMRS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9QQUdFX01PRFVMRS8uL2pzL2JhY2tncm91bmQvaW5qZWN0Q3VzdG9tQ29udGVudFNjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vUEFHRV9NT0RVTEUvLi9qcy9iYWNrZ3JvdW5kL2xpc3RlbkZvclJlbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFPLENBQUMsMENBQW9CO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBLGtDQUFrQyxZQUFZLEVBQUU7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGNBQWMsS0FBSyxZQUFZLEdBQUcsWUFBWTtBQUN0RDs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLGtDQUFrQztBQUMzQywyREFBMkQsU0FBUyxHQUFHLE1BQU07QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcktEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQSx1Q0FBdUMsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoianMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIGdldE1hbmlmZXN0KCkge1xuICByZXR1cm4gY2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZE9wdGlvbnMoKSB7XG4gIC8vZmlyc3QgdHJ5IHRvIGdldCBvcHRpb25zIGZyb20gb3B0aW9ucy5qc29uXG4gIHRyeSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoJy4uLy4uL29wdGlvbnMuanNvbicpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vb3RoZXJ3aXNlLCBnZXQgdGhlIG9wdGlvbnMgZnJvbSBzdG9yYWdlXG4gICAgcmV0dXJuIGF3YWl0IHJlYWRGcm9tU3RvcmFnZSh7IG9wdGlvbnM6IHt9IH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlYWRGcm9tU3RvcmFnZSh3aGF0VG9HZXQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCh3aGF0VG9HZXQsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29udGVudFNjcmlwdE9iamVjdCh1cmwsIGNvbnRlbnRTY3JpcHRzKSB7XG4gIC8vdGhpcyBmdW5jdGlvbiBnZXRzIHRoZSBcIm1hdGNoZXNcIiBvYmplY3QgZm9yIHRoZSBnaXZlbiB1cmwgKGllLiB0aGVcbiAgLy9vYmplY3QgdGhhdCBsb29rcyBsaWtlOlxuICAvL3tcbiAgLy8gICAgIFwibWF0Y2hlc1wiOiBbXCJodHRwczovL3d3dy5nb29nbGUuY29tLypcIl0sXG4gIC8vICAgICBcImV4Y2x1ZGVfbWF0Y2hlc1wiOiBbXCJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD8qXCJdLFxuICAvLyAgICAgXCJqc1wiOiBbXG4gIC8vICAgICAgICAgXCJqcy9jb250ZW50U2NyaXB0cy9nb29nbGUuYnVuZGxlLmpzXCIsXG4gIC8vICAgICAgICAgXCJqcy9jb250ZW5TY3JpcHRzL19tYWluLmpzXCJcbiAgLy8gICAgIF0sXG4gIC8vICAgICBcIm15X2N1c3RvbV9wcm9wZXJ0eVwiOiBcInZhbHVlXCJcbiAgLy99XG5cbiAgZnVuY3Rpb24gaXNNYXRjaCh1cmwsIHVybEdsb2JzKSB7XG4gICAgaWYgKHVybCAmJiB1cmxHbG9icykge1xuICAgICAgZm9yIChsZXQgdXJsR2xvYiBvZiB1cmxHbG9icykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdXJsID09PSB1cmxHbG9iIHx8XG4gICAgICAgICAgdXJsR2xvYiA9PT0gJzxhbGxfdXJscz4nIHx8XG4gICAgICAgICAgY29udmVydE1hdGNoUGF0dGVyblRvUmVnRXhwKHVybEdsb2IpLnRlc3QodXJsKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvL2lmIGNvbnRlblNjcmlwdHMgaGFzIGJlZW4gcGFzc2VkIGluLCBnZXQgaXQgZnJvbSB0aGVyZVxuICBpZiAoY29udGVudFNjcmlwdHMpIHtcbiAgICBmb3IgKGxldCBjb250ZW50U2NyaXB0T2JqIG9mIGNvbnRlbnRTY3JpcHRzKSB7XG4gICAgICBsZXQgeyBtYXRjaGVzLCBleGNsdWRlX21hdGNoZXMgfSA9IGNvbnRlbnRTY3JpcHRPYmo7XG4gICAgICAvL2lmIHRoZSB1cmwgbWF0Y2hlcyBvbmUgb2YgdGhlIHVybHMgaW4gXCJtYXRjaGVzXCIgYW5kXG4gICAgICAvL2RvZXMgTk9UIG1hdGNoIG9uZSBvZiB0aGUgdXJscyBpbiBcImV4Y2x1ZGVfbWF0Y2hlc1wiLCByZXR1cm4gdGhpcyBvYmpcbiAgICAgIGlmIChpc01hdGNoKHVybCwgbWF0Y2hlcykgJiYgIWlzTWF0Y2godXJsLCBleGNsdWRlX21hdGNoZXMpKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50U2NyaXB0T2JqO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvL290aGVyd2lzZSwgZmlyc3QgdHJ5IHRvIGdldCBpdCBmcm9tIG1hbmlmZXN0Lmpzb25cbiAgICBsZXQgY29udGVudFNjcmlwdE9iaiA9IGF3YWl0IGdldENvbnRlbnRTY3JpcHRPYmplY3QoXG4gICAgICB1cmwsXG4gICAgICBnZXRNYW5pZmVzdCgpLmNvbnRlbnRfc2NyaXB0cyB8fCBbXVxuICAgICk7XG4gICAgaWYgKGNvbnRlbnRTY3JpcHRPYmopIHtcbiAgICAgIHJldHVybiBjb250ZW50U2NyaXB0T2JqO1xuICAgIH1cblxuICAgIC8vaWYgdGhhdCBkb2Vzbid0IHdvcmssIHRoZW4gdHJ5IHRvIGdldCBpdCBmcm9tIG9wdGlvbnNcbiAgICByZXR1cm4gYXdhaXQgZ2V0Q29udGVudFNjcmlwdE9iamVjdChcbiAgICAgIHVybCxcbiAgICAgIChhd2FpdCBsb2FkT3B0aW9ucygpKS5jb250ZW50X3NjcmlwdHMgfHwgW11cbiAgICApO1xuICB9XG59XG5cbi8qVGhlIGJlbG93IGlzIGZyb206IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL0FkZC1vbnMvV2ViRXh0ZW5zaW9ucy9NYXRjaF9wYXR0ZXJuc1xuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgdmFsaWQgbWF0Y2ggcGF0dGVybiBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uXG4gKiB3aGljaCBtYXRjaGVzIGFsbCBVUkxzIGluY2x1ZGVkIGJ5IHRoYXQgcGF0dGVybi5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBwYXR0ZXJuICBUaGUgcGF0dGVybiB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHtSZWdFeHB9ICAgICAgICAgICBUaGUgcGF0dGVybidzIGVxdWl2YWxlbnQgYXMgYSBSZWdFeHAuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9ICAgICAgICBJZiB0aGUgcGF0dGVybiBpcyBub3QgYSB2YWxpZCBNYXRjaFBhdHRlcm5cbiAqL1xuZnVuY3Rpb24gY29udmVydE1hdGNoUGF0dGVyblRvUmVnRXhwKHBhdHRlcm4pIHtcbiAgaWYgKHBhdHRlcm4gPT09ICcnKSB7XG4gICAgcmV0dXJuIC9eKD86aHR0cHxodHRwc3xmaWxlfGZ0cHxhcHApOlxcL1xcLy87XG4gIH1cblxuICBjb25zdCBzY2hlbWVTZWdtZW50ID0gJyhcXFxcKnxodHRwfGh0dHBzfGZpbGV8ZnRwKSc7XG4gIGNvbnN0IGhvc3RTZWdtZW50ID0gJyhcXFxcKnwoPzpcXFxcKlxcXFwuKT8oPzpbXi8qXSspKT8nO1xuICBjb25zdCBwYXRoU2VnbWVudCA9ICcoLiopJztcbiAgY29uc3QgbWF0Y2hQYXR0ZXJuUmVnRXhwID0gbmV3IFJlZ0V4cChcbiAgICBgXiR7c2NoZW1lU2VnbWVudH06Ly8ke2hvc3RTZWdtZW50fS8ke3BhdGhTZWdtZW50fSRgXG4gICk7XG5cbiAgbGV0IG1hdGNoID0gbWF0Y2hQYXR0ZXJuUmVnRXhwLmV4ZWMocGF0dGVybik7XG4gIGlmICghbWF0Y2gpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBcIiR7cGF0dGVybn1cIiBpcyBub3QgYSB2YWxpZCBNYXRjaFBhdHRlcm5gKTtcbiAgfVxuXG4gIGxldCBbLCBzY2hlbWUsIGhvc3QsIHBhdGhdID0gbWF0Y2g7XG4gIGlmICghaG9zdCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFwiJHtwYXR0ZXJufVwiIGRvZXMgbm90IGhhdmUgYSB2YWxpZCBob3N0YCk7XG4gIH1cblxuICBsZXQgcmVnZXggPSAnXic7XG5cbiAgaWYgKHNjaGVtZSA9PT0gJyonKSB7XG4gICAgcmVnZXggKz0gJyhodHRwfGh0dHBzKSc7XG4gIH0gZWxzZSB7XG4gICAgcmVnZXggKz0gc2NoZW1lO1xuICB9XG5cbiAgcmVnZXggKz0gJzovLyc7XG5cbiAgaWYgKGhvc3QgJiYgaG9zdCA9PT0gJyonKSB7XG4gICAgcmVnZXggKz0gJ1teL10rPyc7XG4gIH0gZWxzZSBpZiAoaG9zdCkge1xuICAgIGlmIChob3N0Lm1hdGNoKC9eXFwqXFwuLykpIHtcbiAgICAgIHJlZ2V4ICs9ICdbXi9dKj8nO1xuICAgICAgaG9zdCA9IGhvc3Quc3Vic3RyaW5nKDIpO1xuICAgIH1cbiAgICByZWdleCArPSBob3N0LnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKTtcbiAgfVxuXG4gIGlmIChwYXRoKSB7XG4gICAgaWYgKHBhdGggPT09ICcqJykge1xuICAgICAgcmVnZXggKz0gJygvLiopPyc7XG4gICAgfSBlbHNlIGlmIChwYXRoLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICByZWdleCArPSAnLyc7XG4gICAgICByZWdleCArPSBwYXRoXG4gICAgICAgIC5yZXBsYWNlKC9cXC4vZywgJ1xcXFwuJylcbiAgICAgICAgLnJlcGxhY2UoL1xcPy9nLCAnXFxcXD8nKVxuICAgICAgICAucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICAgIHJlZ2V4ICs9ICcvPyc7XG4gICAgfVxuICB9XG5cbiAgcmVnZXggKz0gJyQnO1xuICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleCk7XG59XG5cbihhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgY29udGVudF9zY3JpcHRzOiBjb250ZW50U2NyaXB0cyB9ID0gYXdhaXQgbG9hZE9wdGlvbnMoKTtcbiAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKGFzeW5jIGZ1bmN0aW9uKHRhYklkLCB7IHN0YXR1cyB9LCB7IHVybCB9KSB7XG4gICAgaWYgKHN0YXR1cyA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgLy9nZXQgdGhlIGNvbnRlbnQgc2NyaXB0cyB0byBpbmplY3QgZm9yIHRoaXMgdXJsXG4gICAgICAvL05PVEU6IG1ha2Ugc3VyZSBhbiBhcnJheSBpcyBwYXNzZWQgaW4gZm9yIGNvbnRlbnRTY3JpcHRzIHRvIGZvcmNlIGl0IHRvIHNlYXJjaFxuICAgICAgLy90aGVyZSAoYW5kIG5vdCBnbyBsb29raW5nIGZvciB0aGUgY29udGVudFNjcmlwdE9iaiBlbHNld2hlcmUgKGllLiBpbiBtYW5pZmVzdC5qc29uKSkuXG4gICAgICBsZXQgY29udGVudFNjcmlwdE9iaiA9IGF3YWl0IGdldENvbnRlbnRTY3JpcHRPYmplY3QoXG4gICAgICAgIHVybCxcbiAgICAgICAgY29udGVudFNjcmlwdHMgfHwgW11cbiAgICAgICk7XG4gICAgICBpZiAoY29udGVudFNjcmlwdE9iaiAmJiBjb250ZW50U2NyaXB0T2JqLmpzKSB7XG4gICAgICAgIC8vaW5qZWN0IHRoZSBzY3JpcHRzIGluIFwianNcIlxuICAgICAgICBjb250ZW50U2NyaXB0T2JqLmpzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWJJZCwge1xuICAgICAgICAgICAgZmlsZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pKCk7XG4iLCIoKCkgPT4ge1xuICBjb25zdCBDUlhfUkVMT0FERVJfRVhURU5TSU9OX0lEID0gJ3Bhb2NtYWlmZG1mbGptb29sZWRpa2xlbW5sbm1kZWZiJztcbiAgY29uc3QgUkVMT0FEX01FU1NBR0UgPSAncmVsb2FkRXh0ZW5zaW9uJztcbiAgY29uc3QgQkFER0VfTUVTU0FHRSA9ICdSTEQnOyAvL2ZvciAncmVsb2FkZWQnXG4gIGNvbnN0IEJBREdFX0NPTE9SID0gJyM0Y2I3NDknOyAvL2dyZWVuXG4gIGNvbnN0IEJBREdFX1RJTUVPVVRfSU5fTVMgPSAxMDAwO1xuXG4gIGZ1bmN0aW9uIHNob3dCYWRnZShtc2dPZjRDaGFyc09yTGVzcywgY29sb3JBc0NTU0NvbXBhdGlibGVTdHJpbmcpIHtcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBtc2dPZjRDaGFyc09yTGVzcyB9KTtcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7XG4gICAgICBjb2xvcjogY29sb3JBc0NTU0NvbXBhdGlibGVTdHJpbmcsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVCYWRnZSgpIHtcbiAgICAvL2kgZ3Vlc3MganVzdCBzZXQgdGhlIGJhZGdlIHRleHQgdG8gJycgdG8gcmVtb3ZlIGl0OyBpIGRvbid0IHNlZSBhbnl0aGluZyBpblxuICAgIC8vdGhlIGRvY3VtZW50YXRpb24gZm9yIGhvdyB0byByZW1vdmUgYSBiYWRnZSwgYW5kIEkgY2FuJ3QgdGhpbmsgb2YgYW55IG90aGVyIHdheVxuICAgIC8vdG8gZG8gaXRcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiAnJyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsYXNoQmFkZ2UoXG4gICAgbXNnT2Y0Q2hhcnNPckxlc3MsXG4gICAgY29sb3JBc0NTU0NvbXBhdGlibGVTdHJpbmcsXG4gICAgdGltZW91dEluTXNcbiAgKSB7XG4gICAgc2hvd0JhZGdlKG1zZ09mNENoYXJzT3JMZXNzLCBjb2xvckFzQ1NTQ29tcGF0aWJsZVN0cmluZyk7XG4gICAgc2V0VGltZW91dChyZW1vdmVCYWRnZSwgdGltZW91dEluTXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25JbnN0YWxsZWQoKSB7XG4gICAgZmxhc2hCYWRnZShCQURHRV9NRVNTQUdFLCBCQURHRV9DT0xPUiwgQkFER0VfVElNRU9VVF9JTl9NUyk7XG4gIH1cblxuICBmdW5jdGlvbiByZWxvYWRUaGlzRXh0ZW5zaW9uKCkge1xuICAgIGNocm9tZS5ydW50aW1lLnJlbG9hZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25NZXNzYWdlRXh0ZXJuYWwocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICBpZiAoXG4gICAgICBzZW5kZXIuaWQgPT09IENSWF9SRUxPQURFUl9FWFRFTlNJT05fSUQgJiZcbiAgICAgIHJlcXVlc3QubXNnID09PSBSRUxPQURfTUVTU0FHRVxuICAgICkge1xuICAgICAgcmVsb2FkVGhpc0V4dGVuc2lvbigpO1xuXG4gICAgICAvL3NlbmQgcmVzcG9uc2Ugb2YgdHJ1ZSBvbiBzdWNjZXNzIHRvIGxldCBzZW5kZXIga25vdyB0aGUgbWVzc2FnZSB3YXMgcmVjZWl2ZWQgYW5kIGhhbmRsZWRcbiAgICAgIHNlbmRSZXNwb25zZSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBjaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihoYW5kbGVPbkluc3RhbGxlZCk7XG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZUV4dGVybmFsLmFkZExpc3RlbmVyKGhhbmRsZU9uTWVzc2FnZUV4dGVybmFsKTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9