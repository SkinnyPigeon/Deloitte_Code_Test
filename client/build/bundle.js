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

	var HomeView = __webpack_require__( 1 );
	var WomenView = __webpack_require__( 2 );
	var MenView = __webpack_require__( 4 );
	var BasketView = __webpack_require__( 5 );
	
	var Basket = __webpack_require__( 7 );
	// var stock = require( './models/stock' );
	var Voucher = __webpack_require__( 9 );
	
	var MenShoeView = __webpack_require__( 10 );
	var MenCasualView = __webpack_require__( 11 );
	var MenFormalView = __webpack_require__( 12 );
	
	var basket = new Basket();
	
	window.onload = function() {
	  main()
	}
	
	var main = function() {
	
	  displayHome( basket );
	
	  var home = document.getElementById( 'home' );
	  var women = document.getElementById( 'women' );
	  var womenImage = document.getElementById( 'women-image' );
	  var men = document.getElementById( 'men' );
	  var menImage = document.getElementById( 'men-image' );
	  var basketLink = document.getElementById( 'basket' );
	
	  home.onclick = function(e) {
	    displayHome( basket );
	    main();
	  }
	
	  women.onclick = function(e) {
	    console.log( stock );
	    displayWomen( basket );
	  }
	
	  men.onclick = function(e) {
	    displayMen( basket, stock );
	  }
	
	  basketLink.onclick = function(e) {
	    displayBasket( basket );
	  }
	
	  womenImage.onclick = function(e) {
	    displayWomen( basket );
	  }
	
	  menImage.onclick = function(e) {
	    displayMen( basket, stock );
	  }
	}
	
	var displayHome = function( basket, stock ) {
	  var view = new HomeView( basket, stock );
	}
	
	var displayWomen = function( basket, stock ) {
	  var view = new WomenView( basket, stock );
	}
	
	var displayMen = function( basket, stock ) {
	  var view = new MenView( basket, stock );
	}
	
	var displayBasket = function( basket ) {
	  var view = new BasketView( basket );
	}
	
	
	
	
	
	
	
	
	
	
	
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	var HomeView = function() {
	  console.log( "Home View Accessed" );
	
	  var clear = document.getElementById( 'choice-display' );
	  clear.innerText = "";
	
	  var clearTwo = document.getElementById( 'item-display' );
	  clearTwo.innerText = "";
	
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var WomenShoeView = __webpack_require__( 3 );
	// var WomenFormalView = require( './WomenFormalView' );
	// var WomenCasualView = require( './WomenCasualView' );
	
	var WomenView = function( basket ) {
	  // console.log( stock );
	  console.log( "Women View Accessed" );
	
	  var clear = document.getElementById( 'main-display' );
	  clear.innerText = "";
	
	  var clearTwo = document.getElementById( 'item-display' );
	  clearTwo.innerText = "";
	
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
	
	  shoes.onclick = function() {
	    // console.log( stock );
	    displayWomenShoes( basket );
	  }
	
	  formal.onclick = function() {
	    displayWomenFormal();
	  }
	
	  casual.onclick = function() {
	    displayWomenCasual();
	  }
	}
	
	var displayWomenShoes = function( basket ) {
	  var view = new WomenShoeView(  basket );
	}
	
	// var displayWomenFormal = function() {
	//   var view = new WomenFormalView();
	// }
	
	// var displayWomenCasual = function() {
	//   var view = new WomenCasualView();
	// }
	
	
	
	
	
	
	
	
	
	module.exports = WomenView;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var womensFootwear = __webpack_require__( 8 );
	
	var WomenShoeView = function( basket ) {
	  console.log( womensFootwear )
	  console.log( "Women Shoe View Accessed" );
	
	  var clear = document.getElementById( 'main-display' );
	  clear.innerText = "";
	
	  var clearTwo = document.getElementById( 'choice-display' );
	  clearTwo.innerText = "";
	
	  var area = document.getElementById( 'item-display' );
	  area.innerText = "";
	
	  var court = document.createElement( 'img' );
	  var courtText = document.createElement( 'p' );
	
	  var suede = document.createElement( 'img' );
	  var suedeText = document.createElement( 'p' );
	
	  court.src = "./css/image/court-black.jpeg";
	  suede.src = "./css/image/suede-blue.jpg";
	
	  // courtText.innerText = stock[0].name;
	  // suedeText.innerText = "Shoe 2";
	
	  // area.appendChild( court );
	  // area.appendChild( courtText );
	
	  // area.appendChild( suede );
	  // area.appendChild( suedeText );
	
	  // court.onclick = function() {
	  //   basket.add( stock[0] );
	  // }
	
	  // formal.onclick = function() {
	  //   displayWomenFormal();
	  // }
	
	  // casual.onclick = function() {
	  //   displayWomenCasual();
	  // }
	
	}
	
	
	
	
	module.exports = WomenShoeView;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var MenView = function() {
	  console.log( "Men View Accessed" );
	
	  var clear = document.getElementById( 'main-display' );
	  clear.innerText = "";
	
	  var clearTwo = document.getElementById( 'item-display' );
	  clearTwo.innerText = "";
	
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
/***/ function(module, exports, __webpack_require__) {

	var Total = __webpack_require__( 6 );
	
	var runningTotal = new Total();
	
	var BasketView = function( basket ) {
	
	  console.log( basket );
	
	  runningTotal.setTotal( basket.items );
	
	  console.log( runningTotal.total );
	
	  console.log( "Basket View Accessed" );
	  console.log( basket.totalItems() );
	  var area = document.getElementById( 'main-display' );
	  area.innerText = "";
	  var p = document.createElement( 'p' );
	  p.innerText = "This is the basket view";
	  area.appendChild( p );
	}
	
	module.exports = BasketView;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var Total = function() {
	  this.total = 0;
	  this.basket = [];
	}
	
	Total.prototype = {
	  setTotal: function( basket ) {
	    this.total = 0;
	    this.basket = basket;
	    for( var i = 0; i < basket.length; i++ ) {
	      this.total += basket[ i ].price;
	    }
	    return this.total;
	  },
	
	  addVoucher: function( voucher ) {
	    if( this.checkForUsedVouchers( voucher )) {
	      return;
	    }
	
	    if( !this.checkForValidVoucher( voucher )) {
	      return;
	    }
	
	    if( this.checkForUnderFifty( voucher )) {
	      return;
	    }
	
	    if( this.checkForUnderSeventyFive( voucher )) {
	      return;
	    }
	
	    if( this.checkForAboveSeventyFiveAndShoes( voucher )) {
	      return;
	    }
	
	    if( this.total >= voucher.value ) {
	      this.total -= voucher.value;
	    }
	  },
	
	  checkForUsedVouchers: function( voucher ) {
	    if( voucher.hasBeenUsed ) {
	      return true;
	    }
	  },
	
	  checkForValidVoucher: function( voucher ) {
	    if( voucher.valid ) {
	      return true;
	    }
	  },
	
	  checkForUnderFifty: function( voucher ) {
	    if( this.total <= 50 && voucher.value === 10 ) {
	      return true;
	    } else {
	      return false;
	    }
	  },
	
	  checkForUnderSeventyFive: function( voucher ) {
	    if( this.total <= 75 && voucher.value === 15 ) {
	      return true;
	    } else {
	      return false;
	    }
	  },
	
	  checkForOverSeventyFive: function( voucher ) {
	    if( this.total >= 75 && voucher.value === 15 ) {
	      return true;
	    } else {
	      return false;
	    }
	  },
	
	  checkForShoes: function() {
	    for( var i = 0; i < this.basket.length; i++ ) {
	      if( this.basket[ i ].subcategory != "Footwear" ) {
	        return true;
	      } else {
	        return false;
	      }
	    } 
	  },
	
	  checkForAboveSeventyFiveAndShoes: function( voucher ) {
	    if( this.checkForOverSeventyFive( voucher ) && this.checkForShoes() ) {
	      return true;
	    } else {
	      return false;
	    }
	  }
	
	}
	
	module.exports = Total;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var Basket = function() {
	  this.items = [];
	}
	
	Basket.prototype = {
	
	  totalItems: function() {
	    return this.items.length;
	  },
	
	  add: function( item ) {
	    if( item.stock === 0 ) {
	      return this.error();
	    }
	    this.items.push( item );
	    item.stock -= 1;
	  },
	
	  remove: function( item ) {
	    for( basketItem of this.items ) {
	
	      if( item.name === basketItem.name ){
	        this.items.splice( basketItem.index, 1);
	      }
	    }
	  },
	
	  error: function() {
	    return "Out of stock";
	  }
	
	}
	
	
	
	module.exports = Basket;

/***/ },
/* 8 */
/***/ function(module, exports) {

	itemOne = {
	  name: "Almond Toe Court Shoes, Patent Black",
	  category: "Women’s Footwear",
	  subcategory: "Footwear",
	  price: 99,
	  stock: 5
	}
	
	itemTwo = {
	  name: "Suede Shoes, Blue",
	  category: "Women's Footwear",
	  subcategory: "Footwear",
	  price: 42,
	  stock: 4
	}
	
	itemThree = {
	  name: "Leather Driver Saddle Loafers, Tan",
	  category: "Men’s Footwear",
	  subcategory: "Footwear",
	  price: 34,
	  stock: 12
	}
	
	itemFour = {
	  name: "Flip Flops, Red",
	  category: "Men’s Footwear",
	  subcategory: "Footwear",
	  price: 19,
	  stock: 6
	}
	
	itemFive = {
	  name: "Flip Flops, Blue",
	  category: "Men’s Footwear",
	  subcategory: "Footwear",
	  price: 19,
	  stock: 0
	}
	
	itemSix = {
	  name: "Gold Button Cardigan, Black",
	  category: "Women’s Casualwear",
	  subcategory: "Casualwear",
	  price: 167,
	  stock: 6
	}
	
	itemSeven = {
	  name: "Cotton Shorts, Medium Red",
	  category: "Women’s Casualwear",
	  subcategory: "Casualwear",
	  price: 30,
	  stock: 5
	}
	
	itemEight = {
	  name: "Fine Stripe Short Sleeve Shirt, Grey",
	  category: "Men’s Casualwear",
	  subcategory: "Casualwear",
	  price: 49.99,
	  stock: 9
	}
	
	itemNine = {
	  name: "Fine Stripe Short Sleeve Shirt, Green",
	  category: "Men’s Casualwear",
	  subcategory: "Casualwear",
	  price: 39.99,
	  stock: 3
	}
	
	itemTen = {
	  name: "Sharkskin Waistcoat, Charcoal",
	  category: "Men’s Formalwear",
	  subcategory: "Formalwear",
	  price: 75,
	  stock: 2
	}
	
	itemEleven = {
	  name: "Lightweight Patch Pocket Blazer, Deer",
	  category: "Men’s Formalwear ",
	  subcategory: "Formalwear",
	  price: 175.5,
	  stock: 1
	}
	
	itemTwelve = {
	  name: "Bird Print Dress, Black",
	  category: "Women’s Formalwear",
	  subcategory: "Formalwear",
	  price: 270,
	  stock: 10
	}
	
	itemThirteen = {
	  name: "Mid Twist Cut-Out Dress, Pink",
	  category: "Women’s Formalwear",
	  subcategory: "Formalwear",
	  price: 540,
	  stock: 5
	}
	
	var womensFootwear = [ itemOne, itemTwo ]
	var mensFootwear = [ itemThree, itemFour, itemFive ]
	var womensCasual = [ itemSix, itemSeven ]
	var mensCasual = [ itemEight, itemNine ]
	var mensFormal = [ itemTen, itemEleven ]
	var womensFormal = [ itemTwelve, itemThirteen ]
	
	module.exports = womensFootwear
	// , mensFootwear, womensCasual, mensCasual, mensFormal, womensFormal;
	


/***/ },
/* 9 */
/***/ function(module, exports) {

	var Voucher = function( code ) {
	  this.valid = false;
	  this.value = 0;
	  this.hasBeenUsed = false;
	  this.fiveOff = [ "AA52721", "BC67123", "GHAD782" ];
	  this.tenOff = [ "BSH7824", "BCHS927", "HAJS127" ];
	  this.fifteenOff = [ "HASK243", "ASHH326", "ADG1260" ];
	  this.code = code;
	}
	
	Voucher.prototype = {
	
	  checkIfValid: function( array, value ) {
	    for( var i = 0; i < array.length; i++ ) {
	      if( this.code === array[ i ] ) {
	        this.valid = true;
	        this.value = value;
	      }
	    }
	  },
	
	  setValidation: function() {
	    this.checkIfValid( this.fiveOff, 5 );
	    this.checkIfValid( this.tenOff, 10 );
	    this.checkIfValid( this.fifteenOff, 15 );
	  },
	
	  useVoucher: function() {
	    this.hasBeenUsed = true;
	  }
	
	}
	
	module.exports = Voucher;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var MenShoeView = function() {
	  console.log( "Men Shoe View Accessed" );
	
	  var clear = document.getElementById( 'main-display' );
	  clear.innerText = "";
	
	  var clearTwo = document.getElementById( 'choice-display' );
	  clearTwo.innerText = "";
	
	  var area = document.getElementById( 'item-display' );
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
	
	  shoes.onclick = function() {
	    displayWomenShoes();
	  }
	
	  formal.onclick = function() {
	    displayWomenFormal();
	  }
	
	  casual.onclick = function() {
	    displayWomenCasual();
	  }
	
	}
	
	
	module.exports = MenShoeView;

/***/ },
/* 11 */
/***/ function(module, exports) {



/***/ },
/* 12 */
/***/ function(module, exports) {



/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map