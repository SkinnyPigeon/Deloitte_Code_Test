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
	
	var WomenShoeView = __webpack_require__( 12 );
	var WomenCasualView = __webpack_require__( 7 );
	var WomenFormalView = __webpack_require__( 8 );
	
	var MenShoeView = __webpack_require__( 9 );
	var MenCasualView = __webpack_require__( 10 );
	var MenFormalView = __webpack_require__( 11 );
	
	window.onload = function() {
	  main()
	}
	
	var main = function() {
	
	  displayHome();
	
	  var home = document.getElementById( 'home' );
	  var women = document.getElementById( 'women' );
	  var womenImage = document.getElementById( 'women-image' );
	  var men = document.getElementById( 'men' );
	  var menImage = document.getElementById( 'men-image' );
	  var basket = document.getElementById( 'basket' );
	
	  home.onclick = function(e) {
	    displayHome();
	    main();
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
	
	  womenImage.onclick = function(e) {
	    displayWomen();
	  }
	
	  menImage.onclick = function(e) {
	    displayMen();
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
	
	  var clear = document.getElementById( 'main-display' );
	  clear.innerText = "";
	
	  var area = document.getElementById( 'choice-display' );
	  area.innerText = "";
	
	  var shoes = document.createElement( 'img' );
	  var shoeText = document.createElement( 'p' );
	
	  var formal = document.createElement( 'img' );
	  var formalText = document.createElement( 'p' );
	
	  var casual = document.createElement( 'img' );
	  var casualText = document.createElement( 'p' );
	
	  shoes.src = "./css/image/court-black.jpeg";
	  formal.src = "./css/image/bird.jpeg";
	  casual.src = "./css/image/cardigan-gold.jpg";
	
	  shoeText.innerText = "Shoes";
	  formalText.innerText = "Formal";
	  casualText.innerText = "Casual";
	
	  area.appendChild( shoes );
	  area.appendChild( shoeText );
	
	  area.appendChild( formal );
	  area.appendChild( formalText );
	
	  area.appendChild( casual );
	  area.appendChild( casualText );
	
	}
	
	module.exports = WomenView;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var HomeView = function() {
	  console.log( "Home View Accessed" );
	
	  var clear = document.getElementById( 'choice-display' );
	  clear.innerText = "";
	
	  var area = document.getElementById( 'main-display' );
	  area.innerText = "";
	
	  var women = document.createElement( 'img' );
	  var men = document.createElement( 'img' );
	
	  women.src = "./css/image/women.jpeg";
	  men.src = "./css/image/men.jpeg";
	
	  women.className = "home-images";
	  women.id = 'women-image';
	  men.className = "home-images";
	  men.id = 'men-image';
	
	  area.appendChild( women );
	  area.appendChild( men );
	}
	
	module.exports = HomeView;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var MenView = function() {
	  console.log( "Men View Accessed" );
	
	  var clear = document.getElementById( 'main-display' );
	  clear.innerText = "";
	
	  var area = document.getElementById( 'choice-display' );
	  area.innerText = "";
	
	  var shoes = document.createElement( 'img' );
	  var shoeText = document.createElement( 'p' );
	
	  var formal = document.createElement( 'img' );
	  var formalText = document.createElement( 'p' );
	
	  var casual = document.createElement( 'img' );
	  var casualText = document.createElement( 'p' );
	
	  shoes.src = "./css/image/leather-tan.jpeg";
	  formal.src = "./css/image/lightweight-deer.jpeg";
	  casual.src = "./css/image/striped-green.jpg";
	
	  shoeText.innerText = "Shoes";
	  formalText.innerText = "Formal";
	  casualText.innerText = "Casual";
	
	  area.appendChild( shoes );
	  area.appendChild( shoeText );
	
	  area.appendChild( formal );
	  area.appendChild( formalText );
	
	  area.appendChild( casual );
	  area.appendChild( casualText );
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

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports) {



/***/ },
/* 8 */
/***/ function(module, exports) {



/***/ },
/* 9 */
/***/ function(module, exports) {



/***/ },
/* 10 */
/***/ function(module, exports) {



/***/ },
/* 11 */
/***/ function(module, exports) {



/***/ },
/* 12 */
/***/ function(module, exports) {



/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map