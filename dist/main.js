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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_MainController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/MainController.js */ \"./src/controllers/MainController.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  new _controllers_MainController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controllers/MainController.js":
/*!*******************************************!*\
  !*** ./src/controllers/MainController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainController; });\n/* harmony import */ var _views_FormView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/FormView.js */ \"./src/views/FormView.js\");\n/* harmony import */ var _views_ResultView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/ResultView.js */ \"./src/views/ResultView.js\");\n/* harmony import */ var _views_TabView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/TabView.js */ \"./src/views/TabView.js\");\n/* harmony import */ var _views_KeywordView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/KeywordView.js */ \"./src/views/KeywordView.js\");\n/* harmony import */ var _views_HistoryView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/HistoryView.js */ \"./src/views/HistoryView.js\");\n/* harmony import */ var _models_SearchModel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/SearchModel.js */ \"./src/models/SearchModel.js\");\n/* harmony import */ var _models_KeywordModel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/KeywordModel.js */ \"./src/models/KeywordModel.js\");\n/* harmony import */ var _models_HistoryModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/HistoryModel.js */ \"./src/models/HistoryModel.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass MainController {\r\n  constructor() {\r\n    const formViewEl = document.querySelector(\"form\");\r\n    const tabViewEl = document.querySelector(\"#tabs\");\r\n    const keywordViewEl = document.querySelector(\"#search-keyword\");\r\n    const historyViewEl = document.querySelector(\"#search-history\");\r\n    const resultViewEl = document.querySelector(\"#search-result\");\r\n\r\n    this.formView = new _views_FormView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](formViewEl)\r\n      .on(\"@submit\", e => this.search(e.detail.input))\r\n      .on(\"@reset\", () => this.renderView());\r\n\r\n    this.tabView = new _views_TabView_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](tabViewEl).on(\"@change\", e =>\r\n      this.onChangeTab(e.detail.tabName)\r\n    );\r\n\r\n    this.keywordView = new _views_KeywordView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](keywordViewEl).on(\"@click\", e =>\r\n      this.search(e.detail.keyword)\r\n    );\r\n\r\n    this.historyView = new _views_HistoryView_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](historyViewEl)\r\n      .on(\"@click\", e => this.search(e.detail.keyword))\r\n      .on(\"@remove\", e => this.onRemoveHistory(e.detail.keyword));\r\n\r\n    this.resultView = new _views_ResultView_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](resultViewEl);\r\n\r\n    this.selectedTab = \"추천 검색어\";\r\n    this.renderView();\r\n  }\r\n\r\n  async search(query) {\r\n    this.formView.setValue(query);\r\n    const data = await _models_SearchModel_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].list(query);\r\n    this.onSearchResult(data);\r\n  }\r\n\r\n  onSearchResult(data) {\r\n    this.tabView.hide();\r\n    this.keywordView.hide();\r\n    this.historyView.hide();\r\n    this.resultView.mount(data);\r\n  }\r\n\r\n  onChangeTab(tabName) {\r\n    this.selectedTab = tabName;\r\n    this.renderView();\r\n  }\r\n\r\n  async renderView() {\r\n    this.tabView.setActiveTab(this.selectedTab);\r\n\r\n    if (this.selectedTab === \"추천 검색어\") {\r\n      const data = await _models_KeywordModel_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].list();\r\n      this.keywordView.mount(data);\r\n      this.historyView.hide();\r\n    } else {\r\n      const data = await _models_HistoryModel_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].list();\r\n      this.historyView.mount(data).bindRemoveBtn();\r\n      this.keywordView.hide();\r\n    }\r\n\r\n    this.resultView.hide();\r\n  }\r\n\r\n  onRemoveHistory(keyword) {\r\n    _models_HistoryModel_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].remove(keyword);\r\n    this.renderView();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/controllers/MainController.js?");

/***/ }),

/***/ "./src/models/HistoryModel.js":
/*!************************************!*\
  !*** ./src/models/HistoryModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  data: [\r\n    { keyword: \"검색기록2\", date: \"12.03\" },\r\n    { keyword: \"검색기록1\", date: \"12.02\" },\r\n    { keyword: \"검색기록0\", date: \"12.01\" }\r\n  ],\r\n\r\n  list() {\r\n    return Promise.resolve(this.data);\r\n  },\r\n\r\n  add(keyword = \"\") {\r\n    keyword = keyword.trim();\r\n    if (!keyword) return;\r\n    if (this.data.some(item => item.keyword === keyword)) {\r\n      this.remove(keyword);\r\n    }\r\n\r\n    const date = \"12.31\";\r\n    this.data = [\r\n      {\r\n        keyword,\r\n        date\r\n      },\r\n      ...this.data\r\n    ];\r\n  },\r\n\r\n  remove(keyword) {\r\n    this.data = this.data.filter(item => item.keyword !== keyword);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/models/HistoryModel.js?");

/***/ }),

/***/ "./src/models/KeywordModel.js":
/*!************************************!*\
  !*** ./src/models/KeywordModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  data: [\r\n    { keyword: \"이탈리아\" },\r\n    { keyword: \"세프의요리\" },\r\n    { keyword: \"제철\" },\r\n    { keyword: \"홈파티\" }\r\n  ],\r\n  list() {\r\n    return new Promise(res => {\r\n      setTimeout(() => {\r\n        res(this.data);\r\n      }, 200);\r\n    });\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/models/KeywordModel.js?");

/***/ }),

/***/ "./src/models/SearchModel.js":
/*!***********************************!*\
  !*** ./src/models/SearchModel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = [\r\n  {\r\n    id: 1,\r\n    name: \"[버거] 치즈버거처럼 생긴 새우버거\",\r\n    image:\r\n      \"https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\"\r\n  },\r\n  {\r\n    id: 2,\r\n    name: \"[피자] 썸네일 주소가 잘못된 상품\",\r\n    image: \"http://foo.bar/image.jpg\"\r\n  }\r\n];\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  list() {\r\n    return new Promise(res => {\r\n      setTimeout(() => {\r\n        res(data);\r\n      }, 200);\r\n    });\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/models/SearchModel.js?");

/***/ }),

/***/ "./src/views/FormView.js":
/*!*******************************!*\
  !*** ./src/views/FormView.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n\r\n\r\nclass FormView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(el) {\r\n    super(el);\r\n    this._inputEl = el.querySelector('[type=text]');\r\n    this._resetEl = el.querySelector('[type=reset]');\r\n    this.showResetBtn(false);\r\n    this.bindEvents();\r\n    return this;\r\n  }\r\n\r\n  showResetBtn(show = true) {\r\n    this._resetEl.style.display = show ? 'block' : 'none';\r\n  }\r\n\r\n  bindEvents() {\r\n    this.on('submit', (e) => e.preventDefault());\r\n    this._inputEl.addEventListener('keyup', (e) => {\r\n      alert('dd');\r\n      this.onKeyup(e);\r\n    });\r\n    this._resetEl.addEventListener('click', () => this.onClickReset());\r\n  }\r\n\r\n  onKeyup(e) {\r\n    const enter = 13;\r\n    this.showResetBtn(this._inputEl.value.length);\r\n    if (!this._inputEl.value.length) this.emit('@reset');\r\n    if (e.keyCode !== enter) return;\r\n    this.emit('@submit', { input: this._inputEl.value });\r\n  }\r\n\r\n  onClickReset() {\r\n    this.emit('@reset');\r\n    this.showResetBtn(false);\r\n  }\r\n\r\n  setValue(value = '') {\r\n    this._inputEl.value = value;\r\n    this.showResetBtn(this._inputEl.value.length);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/views/FormView.js?");

/***/ }),

/***/ "./src/views/HistoryView.js":
/*!**********************************!*\
  !*** ./src/views/HistoryView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HistoryView; });\n/* harmony import */ var _KeywordView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeywordView.js */ \"./src/views/KeywordView.js\");\n\r\n\r\nclass HistoryView extends _KeywordView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(el) {\r\n    super(el);\r\n    this._messages.NO_KEYWORDS = \"검색 이력이 없습니다\";\r\n\r\n    return this;\r\n  }\r\n\r\n  getKeywordsHtml(data) {\r\n    return (\r\n      data.reduce((html, item) => {\r\n        html += `<li data-keyword=\"${item.keyword}\">\r\n        ${item.keyword} \r\n        <span class=\"date\">${item.date}</span>\r\n        <button class=\"btn-remove\"></button>\r\n        </li>`;\r\n        return html;\r\n      }, '<ul class=\"HistoryView\">') + \"</ul>\"\r\n    );\r\n  }\r\n\r\n  bindRemoveBtn() {\r\n    Array.from(this.el.querySelectorAll(\"button.btn-remove\")).forEach(btn => {\r\n      btn.addEventListener(\"click\", e => {\r\n        e.stopPropagation();\r\n        this.onRemove(btn.parentElement.dataset.keyword);\r\n      });\r\n    });\r\n  }\r\n\r\n  onRemove(keyword) {\r\n    this.emit(\"@remove\", { keyword });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/views/HistoryView.js?");

/***/ }),

/***/ "./src/views/KeywordView.js":
/*!**********************************!*\
  !*** ./src/views/KeywordView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return KeywordView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n\r\n\r\nclass KeywordView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(el) {\r\n    super(el);\r\n\r\n    this._messages = {\r\n      NO_KEYWORDS: \"추천 검색어가 없습니다\"\r\n    };\r\n\r\n    return this;\r\n  }\r\n\r\n  mount(data = []) {\r\n    this.el.innerHTML = data.length\r\n      ? this.getKeywordsHtml(data)\r\n      : this._messages.NO_KEYWORDS;\r\n    this.show();\r\n    this._bindClickEvent();\r\n    return this;\r\n  }\r\n\r\n  getKeywordsHtml(data) {\r\n    return (\r\n      data.reduce((html, item, index) => {\r\n        html += `<li data-keyword=\"${\r\n          item.keyword\r\n        }\"><span class=\"number\">${index + 1}</span>${item.keyword}</li>`;\r\n        return html;\r\n      }, '<ul class=\"KeywordView\">') + \"</ul>\"\r\n    );\r\n  }\r\n\r\n  _bindClickEvent() {\r\n    Array.from(this.el.querySelectorAll(\"li\")).forEach(li => {\r\n      li.addEventListener(\"click\", e => this._onClickKeyword(e));\r\n    });\r\n  }\r\n\r\n  _onClickKeyword(e) {\r\n    const { keyword } = e.currentTarget.dataset;\r\n    this.emit(\"@click\", { keyword });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/views/KeywordView.js?");

/***/ }),

/***/ "./src/views/ResultView.js":
/*!*********************************!*\
  !*** ./src/views/ResultView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResultView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n\r\n\r\nclass ResultView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(el) {\r\n    super(el);\r\n\r\n    this.messages = {\r\n      NO_RESULT: \"검색 결과가 없습니다\"\r\n    };\r\n  }\r\n\r\n  mount(data = []) {\r\n    this.el.innerHTML = `<div class=\"ResultView\">\r\n      ${data.length ? this.getSearchResultsHtml(data) : this.messages.NO_RESULT}\r\n    </div>`;\r\n    this.show();\r\n  }\r\n\r\n  getSearchResultsHtml(data) {\r\n    return (\r\n      data.reduce((html, item) => {\r\n        html += this.getSearchItemHtml(item);\r\n        return html;\r\n      }, \"<ul>\") + \"</ul>\"\r\n    );\r\n  }\r\n\r\n  getSearchItemHtml(item) {\r\n    return `<li>\r\n      <img src=\"${item.image}\" onerror=\"this.src='src/images/default-image.jpg'\"/>\r\n      <p>${item.name}</p>\r\n    </li>`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/views/ResultView.js?");

/***/ }),

/***/ "./src/views/TabView.js":
/*!******************************!*\
  !*** ./src/views/TabView.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TabView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n\r\n\r\n\r\nclass TabView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(el) {\r\n    super(el);\r\n\r\n    this.mount();\r\n    this.bindEvents();\r\n  }\r\n\r\n  mount() {\r\n    this.el.innerHTML = `<ul class=\"TabView\">\r\n      <li>추천 검색어</li>\r\n      <li>최근 검색어</li>\r\n    </ul>`;\r\n  }\r\n\r\n  get tabItems() {\r\n    return Array.from(this.el.children[0].children);\r\n  }\r\n\r\n  bindEvents() {\r\n    this.tabItems.forEach(li => {\r\n      li.addEventListener(\"click\", () => this.onClick(li.innerHTML));\r\n    });\r\n  }\r\n\r\n  onClick(tabName) {\r\n    this.setActiveTab(tabName);\r\n    this.emit(\"@change\", { tabName });\r\n  }\r\n\r\n  setActiveTab(tabName) {\r\n    this.tabItems.forEach(li => {\r\n      li.className = li.innerHTML === tabName ? \"active\" : \"\";\r\n    });\r\n    this.show();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/views/TabView.js?");

/***/ }),

/***/ "./src/views/View.js":
/*!***************************!*\
  !*** ./src/views/View.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass View {\r\n  constructor(el) {\r\n    if (!el) throw el;\r\n\r\n    this.el = el;\r\n    return this;\r\n  }\r\n\r\n  on(event, handler) {\r\n    this.el.addEventListener(event, handler);\r\n    return this;\r\n  }\r\n\r\n  emit(event, data) {\r\n    const evt = new CustomEvent(event, {\r\n      detail: data\r\n    });\r\n    this.el.dispatchEvent(evt);\r\n    return this;\r\n  }\r\n\r\n  hide() {\r\n    this.el.style.display = \"none\";\r\n    return this;\r\n  }\r\n\r\n  show() {\r\n    this.el.style.display = \"\";\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/views/View.js?");

/***/ })

/******/ });