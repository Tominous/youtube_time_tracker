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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tracker = __webpack_require__(/*! ./tracker */ "./src/tracker.js");

var _dom = __webpack_require__(/*! ./dom */ "./src/dom.js");

(0, _dom.renderTimer)();

setInterval(function () {
  (0, _tracker.incrementTime)(0.1, _dom.renderTimer);
}, 6000);

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTimer = undefined;

var _formatting = __webpack_require__(/*! ./helpers/formatting */ "./src/helpers/formatting.js");

var _date = __webpack_require__(/*! ./helpers/date */ "./src/helpers/date.js");

var _tracker = __webpack_require__(/*! ./tracker */ "./src/tracker.js");

var timerBlock = function timerBlock() {
  var logo = document.getElementById("logo");
  var timer = document.getElementById("youtube-time-tracker");

  if (!timer) {
    timer = document.createElement("div");

    timer.innerHTML = '\n      <div class="youtube-time-tracker__body">\n        <div class="youtube-time-tracker__stopwatch-icon">\n        </div>\n\n        <div class="youtube-time-tracker__time">\n        </div>\n\n        <div class="youtube-time-tracker__popup">\n          <div class="youtube-time-tracker__name">\n            Youtube Time Tracker\n          </div>\n\n          <ul class="youtube-time-tracker__stats">\n          </ul>\n        </div>\n      </div>\n    '.trim();

    timer.id = "youtube-time-tracker";
    timer.className = "youtube-time-tracker";

    logo.parentNode.insertBefore(timer, logo.nextSibling);
  }

  return timer;
};

var statsContent = function statsContent(timerData) {
  var today = (0, _date.todayDate)();
  var week = (0, _date.thisWeek)();
  var month = (0, _date.thisMonth)();
  var year = (0, _date.thisYear)();

  var yesterday = (0, _date.yesterdayDate)();
  var prevWeek = (0, _date.lastWeek)();
  var prevMonth = (0, _date.lastMonth)();
  var prevYear = (0, _date.lastYear)();

  var stats = "";

  if (timerData[week]) {
    stats += "<li>This week: " + (0, _formatting.formatTime)(timerData[week]) + "</li>";
  }

  if (timerData[month]) {
    stats += "<li>This month: " + (0, _formatting.formatTime)(timerData[month]) + "</li>";
  }

  if (timerData[year]) {
    stats += "<li>This year: " + (0, _formatting.formatTime)(timerData[year]) + "</li>";
  }

  return stats;
};

var renderTimer = exports.renderTimer = function renderTimer(timerData) {
  var logo = document.getElementById("logo");

  if (logo) {
    var timer = timerBlock();
    var timeBlock = timer.querySelector(".youtube-time-tracker__time");
    var statsBlock = timer.querySelector(".youtube-time-tracker__stats");

    var today = (0, _date.todayDate)();
    var yesterday = (0, _date.yesterdayDate)();

    if (timerData) {
      timeBlock.innerHTML = (0, _formatting.formatTime)(timerData[today], timerData[yesterday]);
      statsBlock.innerHTML = statsContent(timerData);
    } else {
      (0, _tracker.readData)(function (timerData) {
        timeBlock.innerHTML = (0, _formatting.formatTime)(timerData[today], timerData[yesterday]);
        statsBlock.innerHTML = statsContent(timerData);
      });
    }
  }
};

/***/ }),

/***/ "./src/helpers/date.js":
/*!*****************************!*\
  !*** ./src/helpers/date.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var todayDate = exports.todayDate = function todayDate() {
  return new Date().toISOString().slice(0, 10);
};

var yesterdayDate = exports.yesterdayDate = function yesterdayDate() {
  var date = new Date();

  date.setDate(date.getDate() - 1);

  return date.toISOString().slice(0, 10);
};

// https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php/6117889#6117889
var datesWeek = function datesWeek(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);

  return weekNo;
};

var thisWeek = exports.thisWeek = function thisWeek() {
  var date = new Date();

  return datesWeek(date) + '-' + date.getFullYear();
};

var lastWeek = exports.lastWeek = function lastWeek() {
  var date = new Date();

  date.setDate(date.getDate() - 7);

  return datesWeek(date) + '-' + date.getFullYear();
};

var monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

var thisMonth = exports.thisMonth = function thisMonth() {
  var date = new Date();

  return monthNames[date.getMonth()] + '-' + date.getFullYear();
};

var lastMonth = exports.lastMonth = function lastMonth() {
  var date = new Date();

  date.setMonth(date.getMonth() - 1);

  return date.getMonth() + '-' + date.getFullYear();
};

var thisYear = exports.thisYear = function thisYear() {
  var date = new Date();

  return date.getFullYear();
};

var lastYear = exports.lastYear = function lastYear() {
  var date = new Date();

  date.setDate(date.getDate() - 365);

  return date.getFullYear();
};

/***/ }),

/***/ "./src/helpers/formatting.js":
/*!***********************************!*\
  !*** ./src/helpers/formatting.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var calculateUplift = function calculateUplift(minutesToday, minutesYesterday) {
  return Math.round(100 * (minutesToday - minutesYesterday) / minutesYesterday, 1);
};

var formatTime = exports.formatTime = function formatTime(minutesToday, minutesYesterday) {
  var hours = Math.floor(minutesToday / 60);
  var min = Math.floor(minutesToday % 60);
  var result = "";
  if (hours) {
    result += hours + "h";
  }

  result += min + "min";

  if (minutesToday >= 10 && minutesYesterday) {
    if (Math.abs(calculateUplift(minutesToday, minutesYesterday)) < 100) {
      var sign = minutesToday > minutesYesterday ? "+" : "";

      result += " " + sign + calculateUplift(minutesToday, minutesYesterday) + "%";
    }
  }

  return result;
};

/***/ }),

/***/ "./src/helpers/log.js":
/*!****************************!*\
  !*** ./src/helpers/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var log = exports.log = function log(output) {
  if (true) {
    console.log(output);
  }
};

/***/ }),

/***/ "./src/tracker.js":
/*!************************!*\
  !*** ./src/tracker.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incrementTime = exports.readData = undefined;

var _log = __webpack_require__(/*! ./helpers/log */ "./src/helpers/log.js");

var _date = __webpack_require__(/*! ./helpers/date */ "./src/helpers/date.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TRACKER_STORAGE_KEY = "youtube_time_tracker_data";

var persistData = function persistData(timer) {
  chrome.storage.local.set(_defineProperty({}, TRACKER_STORAGE_KEY, timer), function () {
    (0, _log.log)('Youtube Time Tracker is set to:');
    (0, _log.log)(timer);
  });
};

var readData = exports.readData = function readData(callback) {
  chrome.storage.local.get([TRACKER_STORAGE_KEY], function (result) {
    (0, _log.log)('Youtube Time Tracker read as:');
    (0, _log.log)(result);

    var timer = result[TRACKER_STORAGE_KEY];

    if (timer) {
      callback(timer);
    } else {
      var _result = {};

      _result[(0, _date.todayDate)()] = 0;
      _result[(0, _date.thisWeek)()] = 0;
      _result[(0, _date.thisMonth)()] = 0;
      _result[(0, _date.thisYear)()] = 0;

      callback(_result);
    }
  });
};

var incrementTime = exports.incrementTime = function incrementTime(increment, callback) {
  if (document.visibilityState === "hidden") {
    return;
  }

  readData(function (timer) {
    var today = (0, _date.todayDate)();
    var week = (0, _date.thisWeek)();
    var month = (0, _date.thisMonth)();
    var year = (0, _date.thisYear)();

    [today, week, month, year].forEach(function (key) {
      if (timer[key]) {
        timer[key] += increment;
      } else {
        timer[key] = increment;
      }
    });

    persistData(timer);

    if (callback) {
      callback(timer);
    }
  });
};

/***/ })

/******/ });