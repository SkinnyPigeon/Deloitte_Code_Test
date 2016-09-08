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
	var MenView = __webpack_require__( 7 );
	var BasketView = __webpack_require__( 11 );
	
	var Basket = __webpack_require__( 12 );
	var Voucher = __webpack_require__( 13 );
	
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
	    displayWomen( basket );
	  }
	
	  men.onclick = function(e) {
	    displayMen( basket );
	  }
	
	  basketLink.onclick = function(e) {
	    displayBasket( basket );
	  }
	
	  womenImage.onclick = function(e) {
	    displayWomen( basket );
	  }
	
	  menImage.onclick = function(e) {
	    displayMen( basket );
	  }
	}
	
	var displayHome = function( basket ) {
	  var view = new HomeView( basket );
	  view.display();
	}
	
	var displayWomen = function( basket ) {
	  var view = new WomenView( basket );
	  view.display();
	}
	
	var displayMen = function( basket ) {
	  var view = new MenView( basket );
	  view.display();
	}
	
	var displayBasket = function( basket ) {
	  var view = new BasketView( basket );
	  view.display();
	}
	
	
	
	
	
	
	
	
	
	
	
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	var HomeView = function() {
	
	  this.resetView();
	}
	
	HomeView.prototype = {
	
	  display: function() {
	    var women = document.createElement( 'img' );
	    var men = document.createElement( 'img' );
	
	    women.src = "./css/image/women.jpeg";
	    men.src = "./css/image/men.jpeg";
	
	    women.className = "home-images";
	    women.id = 'women-image';
	    men.className = "home-images";
	    men.id = 'men-image';
	
	    this.area.appendChild( women );
	    this.area.appendChild( men );
	  },
	
	  resetView: function() {
	    var clear = document.getElementById( 'choice-display' );
	    clear.innerText = "";
	
	    var clearTwo = document.getElementById( 'item-display' );
	    clearTwo.innerText = "";
	
	    var clearThree = document.getElementById( 'basket-display' );
	    clearThree.innerText = "";
	
	    this.area = document.getElementById( 'main-display' );
	    this.area.innerText = "";
	  }
	}
	
	module.exports = HomeView;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var womensCasual = __webpack_require__( 3 );
	var womensFormal = __webpack_require__( 4 );
	var womensFootwear = __webpack_require__( 5 );
	
	var ClothesView = __webpack_require__( 6 );
	
	var WomenView = function( basket ) {
	  this.basket = basket;
	  this.resetView();
	}
	
	WomenView.prototype = {
	
	  display: function() {
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
	
	    this.area.appendChild( shoes );
	    this.area.appendChild( shoeText );
	
	    this.area.appendChild( formal );
	    this.area.appendChild( formalText );
	
	    this.area.appendChild( casual );
	    this.area.appendChild( casualText );
	
	    shoes.onclick = function() {
	      this.displayDepartment( this.basket, womensFootwear );
	    }.bind( this );
	
	    formal.onclick = function() {
	      this.displayDepartment( this.basket, womensFormal );
	    }.bind( this );
	
	    casual.onclick = function() {
	      this.displayDepartment( this.basket, womensCasual );
	    }.bind( this );
	  },
	
	  resetView: function() {
	    var clear = document.getElementById( 'main-display' );
	    clear.innerText = "";
	
	    var clearTwo = document.getElementById( 'item-display' );
	    clearTwo.innerText = "";
	
	    var clearThree = document.getElementById( 'basket-display' );
	    clearThree.innerText = "";
	
	    this.area = document.getElementById( 'choice-display' );
	    this.area.innerText = "";
	  },
	
	  displayDepartment: function( basket, department ) {
	    var view = new ClothesView( basket, department );
	    view.display();
	  }
	}
	
	module.exports = WomenView;

/***/ },
/* 3 */
/***/ function(module, exports) {

	itemOne = {
	  name: "Gold Button Cardigan, Black",
	  category: "Women’s Casualwear",
	  subcategory: "Casualwear",
	  image: "./css/image/cardigan-gold.jpg",
	  price: 167,
	  stock: 6
	}
	
	itemTwo = {
	  name: "Cotton Shorts, Medium Red",
	  category: "Women’s Casualwear",
	  subcategory: "Casualwear",
	  image: "./css/image/shorts-red.jpg",
	  price: 30,
	  stock: 5
	}
	
	var womensCasual = [ itemOne, itemTwo ]
	
	module.exports = womensCasual;


/***/ },
/* 4 */
/***/ function(module, exports) {

	itemOne = {
	  name: "Bird Print Dress, Black",
	  category: "Women’s Formalwear",
	  subcategory: "Formalwear",
	  image: "./css/image/bird.jpeg",
	  price: 270,
	  stock: 10
	}
	
	itemTwo = {
	  name: "Mid Twist Cut-Out Dress, Pink",
	  category: "Women’s Formalwear",
	  subcategory: "Formalwear",
	  image: "./css/image/twist-pink.jpeg",
	  price: 540,
	  stock: 5
	}
	
	var womensFormal = [ itemOne, itemTwo ]
	
	module.exports = womensFormal;
	


/***/ },
/* 5 */
/***/ function(module, exports) {

	itemOne = {
	  name: "Almond Toe Court Shoes, Patent Black",
	  category: "Women’s Footwear",
	  subcategory: "Footwear",
	  image: "./css/image/court-black.jpeg",
	  price: 99,
	  stock: 5
	}
	
	itemTwo = {
	  name: "Suede Shoes, Blue",
	  category: "Women's Footwear",
	  subcategory: "Footwear",
	  image: "./css/image/suede-blue.jpg",
	  price: 42,
	  stock: 4
	}
	
	var womensFootwear = [ itemOne, itemTwo ]
	
	module.exports = womensFootwear;


/***/ },
/* 6 */
/***/ function(module, exports) {

	var ClothesView = function( basket, department ) {
	  
	  this.department = department;
	  this.basket = basket;
	  this.resetView();
	}
	
	ClothesView.prototype = {
	
	  display: function() {
	    for( var i = 0; i < this.department.length; i++ ) {
	
	      var image = document.createElement( 'img' );
	      var description = document.createElement( 'p' );
	      var price = document.createElement( 'p' );
	      var stock = document.createElement( 'p' );
	      var button = document.createElement( 'button' );
	
	      image.src = this.department[i].image;
	      description.innerText = this.department[i].name;
	      price.innerText = this.department[i].price;
	      stock.innerText = this.department[i].stock;
	      button.innerText = "Add to basket";
	      button.id = i;
	      console.log( i );
	
	      button.onclick = function( e ) {
	        var id = e.path[0].id;
	        this.handleButtonClick( id );
	      }.bind( this );
	
	      this.area.appendChild( image );
	      this.area.appendChild( description );
	      this.area.appendChild( price );
	      this.area.appendChild( stock );
	      this.area.appendChild( button );
	    }
	  },
	
	  resetView: function() {
	    var clear = document.getElementById( 'main-display' );
	    clear.innerText = "";
	
	    var clearTwo = document.getElementById( 'choice-display' );
	    clearTwo.innerText = "";
	
	    var clearThree = document.getElementById( 'basket-display' );
	    clearThree.innerText = "";
	
	    this.area = document.getElementById( 'item-display' );
	    this.area.innerText = "";
	  },
	
	  handleButtonClick: function( id ) {
	    console.log( this.basket );
	    this.handleAlert( id );
	    this.basket.add( this.department[ id ]);
	    this.resetView();
	    this.display();
	  },
	
	  handleAlert: function( id ) {
	    if( this.department[ id ].stock === 0 ) {
	      alert( "Sorry we are out of that at the moment" );      
	    }
	  }
	}
	
	module.exports = ClothesView;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var mensCasual = __webpack_require__( 8 );
	var mensFormal = __webpack_require__( 9 );
	var mensFootwear = __webpack_require__( 10 );
	
	var ClothesView = __webpack_require__( 6 );
	
	var MenView = function( basket ) {
	
	  this.basket = basket;
	  this.resetView();
	}
	
	MenView.prototype = {
	
	  display: function() {
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
	
	    this.area.appendChild( shoes );
	    this.area.appendChild( shoeText );
	
	    this.area.appendChild( formal );
	    this.area.appendChild( formalText );
	
	    this.area.appendChild( casual );
	    this.area.appendChild( casualText );
	
	    shoes.onclick = function() {
	      this.displayDepartment( this.basket, mensFootwear );
	    }.bind( this );
	
	    formal.onclick = function() {
	      this.displayDepartment( this.basket, mensFormal );
	    }.bind( this );
	
	    casual.onclick = function() {
	      this.displayDepartment( this.basket, mensCasual );
	    }.bind( this );
	  },
	
	  resetView: function() {
	    var clear = document.getElementById( 'main-display' );
	    clear.innerText = "";
	
	    var clearTwo = document.getElementById( 'item-display' );
	    clearTwo.innerText = "";
	
	    var clearThree = document.getElementById( 'basket-display' );
	    clearThree.innerText = "";
	
	    this.area = document.getElementById( 'choice-display' );
	    this.area.innerText = "";
	  },
	
	  displayDepartment: function( basket, department ) {
	    var view = new ClothesView( basket, department );
	    view.display();
	  }
	}
	
	module.exports = MenView;

/***/ },
/* 8 */
/***/ function(module, exports) {

	itemOne = {
	  name: "Fine Stripe Short Sleeve Shirt, Grey",
	  category: "Men’s Casualwear",
	  subcategory: "Casualwear",
	  image: "./css/image/striped-grey.jpg",
	  price: 49.99,
	  salePrice: null,
	  stock: 9
	}
	
	itemTwo = {
	  name: "Fine Stripe Short Sleeve Shirt, Green",
	  category: "Men’s Casualwear",
	  subcategory: "Casualwear",
	  image: "./css/image/striped-green.jpg",
	  price: 49.99,
	  salePrice: 39.99,
	  stock: 3
	}
	var mensCasual = [ itemOne, itemTwo ]
	
	
	module.exports = mensCasual;
	


/***/ },
/* 9 */
/***/ function(module, exports) {

	itemOne = {
	  name: "Sharkskin Waistcoat, Charcoal",
	  category: "Men’s Formalwear",
	  subcategory: "Formalwear",
	  image: "./css/image/waistcoat-grey-low.jpg",
	  price: 75,
	  stock: 2
	}
	
	itemTwo = {
	  name: "Lightweight Patch Pocket Blazer, Deer",
	  category: "Men’s Formalwear ",
	  subcategory: "Formalwear",
	  image: "./css/image/lightweight-deer.jpeg",
	  price: 175.5,
	  stock: 1
	}
	
	var mensFormal = [ itemOne, itemTwo ]
	
	module.exports = mensFormal;
	


/***/ },
/* 10 */
/***/ function(module, exports) {

	itemOne = {
	  name: "Leather Driver Saddle Loafers, Tan",
	  category: "Men’s Footwear",
	  subcategory: "Footwear",
	  image: "./css/image/leather-tan.jpeg",
	  price: 34,
	  stock: 12
	}
	
	itemTwo = {
	  name: "Flip Flops, Red",
	  category: "Men’s Footwear",
	  subcategory: "Footwear",
	  image: "./css/image/flipflop-red.jpg",
	  price: 19,
	  stock: 6
	}
	
	itemThree = {
	  name: "Flip Flops, Blue",
	  category: "Men’s Footwear",
	  subcategory: "Footwear",
	  image: "./css/image/flipflop-blue.jpg",
	  price: 19,
	  stock: 0
	}
	
	var mensFootwear = [ itemOne, itemTwo, itemThree ]
	
	module.exports = mensFootwear;
	


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var Total = __webpack_require__( 14 );
	var Voucher = __webpack_require__( 13 );
	
	var runningTotal = new Total();
	
	var BasketView = function( basket ) {
	
	  this.basket = basket;
	  this.resetView();
	  this.total = this.giveRunningTotal();
	  this.codes = [];
	}
	
	BasketView.prototype = {
	
	  display: function() {
	    for( var i = 0; i < this.basket.items.length; i ++ ) {
	      var image = document.createElement( 'img' );
	      var description = document.createElement( 'p' );
	      var price = document.createElement( 'p' );
	      var button = document.createElement( 'button' );
	
	      image.src = this.basket.items[i].image;
	      description.innerText = this.basket.items[i].name;
	      price.innerText = this.basket.items[i].price;
	      button.innerText = "Delete";
	      button.id = i;
	
	      button.onclick = function( e ) {
	        var id = e.path[0].id;
	        this.handleButtonClick( id );
	      }.bind( this );
	
	      this.area.appendChild( image );
	      this.area.appendChild( description );
	      this.area.appendChild( price );
	      this.area.appendChild( button );
	    }
	
	    var total = document.createElement( 'h3' );
	    total.innerText = this.total;
	    this.area.appendChild( total );
	
	    var voucherEntry = document.createElement( 'input' );
	    voucherEntry.id = "voucher-entry";
	    voucherEntry.type = "text";
	    voucherEntry.placeholder = "Enter voucher code...";
	    this.area.appendChild( voucherEntry );
	
	    var voucherButton = document.createElement( 'button' );
	    voucherButton.id = "voucher-button";
	    voucherButton.innerText = "Add voucher";
	    this.area.appendChild( voucherButton );
	    voucherButton.onclick = function() {
	      this.handleVoucherClick();
	    }.bind( this );
	  },
	
	  resetView: function() {
	    var clear = document.getElementById( 'main-display' );
	    clear.innerText = "";
	
	    var clearTwo = document.getElementById( 'item-display' );
	    clearTwo.innerText = "";
	
	    var clearThree = document.getElementById( 'choice-display' );
	    clearThree.innerText = "";
	
	    this.area = document.getElementById( 'basket-display' );
	    this.area.innerText = "";
	  },
	
	  handleButtonClick: function( id ) {
	    this.basket.remove( this.basket.items[ id ]);
	    this.giveRunningTotal();
	    this.resetView();
	    this.display();
	  },
	
	  handleVoucherClick: function() {
	    var voucherEntry = document.getElementById( 'voucher-entry' );
	    var code = voucherEntry.value.toUpperCase();
	    this.handleVoucherChecks( code );
	  },
	
	  handleVoucherChecks: function( code ) {
	    for( var i = 0; i < this.codes.length; i++ ) {
	      if( this.codes[i] === code ) {
	        alert( "Code has already been used" );
	        return
	      }
	    }
	    this.useVoucher( code );
	  },
	
	  useVoucher: function( code ) {
	    var voucher = new Voucher( code );
	    this.codes.push( code );
	    voucher.setValidation();
	    this.handleAlert( voucher );
	    voucher.useVoucher();
	    this.total = runningTotal.total;
	    this.resetView();
	    this.display();
	  },
	
	  giveRunningTotal: function() {
	    runningTotal.setTotal( this.basket.items );
	    this.total = runningTotal.total;
	    return this.total;
	  },
	
	  handleAlert: function( voucher ) {
	    if( voucher.valid === false || runningTotal.addVoucher( voucher ) === false ) {
	      alert( "Please check your voucher code and validity for use on this shop" );
	    }
	  }
	}
	
	module.exports = BasketView;

/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports) {

	var Voucher = function( code ) {
	  this.valid = false;
	  this.value = 0;
	  this.fiveOff = [ "AA52721", "BC67123", "GHAD782", "A" ];
	  this.tenOff = [ "BSH7824", "BCHS927", "HAJS127", "B" ];
	  this.fifteenOff = [ "HASK243", "ASHH326", "ADG1260", "C" ];
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
	
	  useVoucher: function( code ) {
	    this.findVoucher( this.fiveOff, code );
	    this.findVoucher( this.tenOff, code );
	    this.findVoucher( this.fifteenOff, code );
	  },
	
	  findVoucher: function( array, code ) {
	    for( var i = 0; i < array.length; i++ ) {
	      if( this.code === array[i] ) {
	        array.splice( array[i], 1 );
	      }
	    }
	  }
	}
	
	module.exports = Voucher;

/***/ },
/* 14 */
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
	      return false;
	    }
	
	    if( !this.checkForValidVoucher( voucher )) {
	      return false;
	    }
	
	    if( this.checkForUnderFifty( voucher )) {
	      return false;
	    }
	
	    if( this.checkForUnderSeventyFive( voucher )) {
	      return false;
	    }
	
	    if( this.checkForAboveSeventyFiveAndShoes( voucher )) {
	      return false;
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
	    }
	    return false;
	  },
	
	  checkForUnderSeventyFive: function( voucher ) {
	    if( this.total <= 75 && voucher.value === 15 ) {
	      return true;
	    }
	    return false;
	  },
	
	  checkForOverSeventyFive: function( voucher ) {
	    if( this.total >= 75 && voucher.value === 15 ) {
	      return true;
	    }
	    return false;
	  },
	
	  checkForShoes: function() {
	    for( var i = 0; i < this.basket.length; i++ ) {
	      if( this.basket[ i ].subcategory === "Footwear" ) {
	        return false;
	      }
	    } 
	    return true;
	  },
	
	  checkForAboveSeventyFiveAndShoes: function( voucher ) {
	    if( this.checkForOverSeventyFive( voucher ) && this.checkForShoes() ) {
	      return true;
	    } 
	    return false;
	  }
	
	}
	
	module.exports = Total;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map