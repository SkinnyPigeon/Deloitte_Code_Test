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

	var HomeView = __webpack_require__( 3 );
	var WomenView = __webpack_require__( 2 );
	var MenView = __webpack_require__( 4 );
	var BasketView = __webpack_require__( 5 );
	
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
	  var view = new HomeView();
	}
	
	var displayWomen = function() {
	  var view = new WomenView();
	}
	
	var displayMen = function() {
	  var view = new MenView();
	}
	
	var displayBasket = function() {
	  var view = new BasketView();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	var WomenView = function() {
	  console.log( "Women View Accessed" );
	
	  var area = document.getElementById( 'main-display' );
	  area.innerText = "";
	  var p = document.createElement( 'p' );
	  p.innerText = "This is the women view";
	  area.appendChild( p );
	}
	
	module.exports = WomenView;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var HomeView = function() {
	  console.log( "Home View Accessed" );
	
	  var area = document.getElementById( 'main-display' );
	  area.innerText = "";
	  var p = document.createElement( 'p' );
	  p.innerText = "This is the home page";
	  area.appendChild( p );
	}
	
	module.exports = HomeView;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var MenView = function() {
	  console.log( "Women View Accessed" );
	
	  var area = document.getElementById( 'main-display' );
	  area.innerText = "";
	  var p = document.createElement( 'p' );
	  p.innerText = "This is the men view";
	  area.appendChild( p );
	}
	
	module.exports = MenView;

/***/ },
/* 5 */
/***/ function(module, exports) {

	var BasketView = function() {
	  console.log( "Women View Accessed" );
	
	  var area = document.getElementById( 'main-display' );
	  area.innerText = "";
	  var p = document.createElement( 'p' );
	  p.innerText = "This is the basket view";
	  area.appendChild( p );
	}
	
	module.exports = BasketView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map