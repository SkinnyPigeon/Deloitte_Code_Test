/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var WomenView = __webpack_require__( 2 );
	
	window.onload = function() {
	
	  displayHome();
	
	  var home = document.getElementById( 'home' );
	  var women = document.getElementById( 'women' );
	  var men = document.getElementById( 'men' );
	  var basket = document.getElementById( 'basket' );
	
	  home.onclick = function(e) {
	    displayHome();
	  }
	
	  women.onclick = function(e) {
	    displayWomen();
	  }
	
	  men.onclick = function(e) {
	    displayMen();
	  }
	
	  basket.onclick = function(e) {
	    displayBasket();
	  }
	}
	
	var displayHome = function() {
	  console.log( "home displayed" );
	}
	
	var displayWomen = function() {
	  var view = new WomenView();
	  console.log( "women displayed" );
	}
	
	var displayMen = function() {
	  console.log( "men displayed" );
	}
	
	var displayBasket = function() {
	  console.log( "basket displayed" );
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	var WomenView = function() {
	  console.log( "Women View Accessed" );
	
	  var area = document.getElementById( 'main-display' );
	  // area.innerHtml = "";
	  var p = document.createElement( 'p' );
	  p.innerText = "Hello";
	  area.appendChild( p );
	}
	
	module.exports = WomenView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map