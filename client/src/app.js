var HomeView = require( './views/HomeView' );
var WomenView = require( './views/WomenView' );
var MenView = require( './views/MenView' );
var BasketView = require( './views/BasketView' );

var Basket = require( './models/basket' );
var stock = require( './models/stock' );
var Voucher = require( './models/voucher' );

var MenShoeView = require( './views/MenShoeView' );
var MenCasualView = require( './views/MenCasualView' );
var MenFormalView = require( './views/MenFormalView' );

var basket = new Basket();

window.onload = function() {
  main()
}

var main = function() {

  displayHome( basket, stock );

  var home = document.getElementById( 'home' );
  var women = document.getElementById( 'women' );
  var womenImage = document.getElementById( 'women-image' );
  var men = document.getElementById( 'men' );
  var menImage = document.getElementById( 'men-image' );
  var basketLink = document.getElementById( 'basket' );

  home.onclick = function(e) {
    displayHome( basket, stock );
    main();
  }

  women.onclick = function(e) {
    console.log( stock );
    displayWomen( basket, stock );
  }

  men.onclick = function(e) {
    displayMen( basket, stock );
  }

  basketLink.onclick = function(e) {
    displayBasket( basket );
  }

  womenImage.onclick = function(e) {
    displayWomen( basket, stock );
  }

  menImage.onclick = function(e) {
    displayMen( basket, stock );
  }
}

var displayHome = function( basket, stock ) {
  var view = new HomeView( basket, stock );
}

var displayWomen = function( basket, stock ) {
  console.log( stock );
  var view = new WomenView( basket, stock );
}

var displayMen = function( basket, stock ) {
  var view = new MenView( basket, stock );
}

var displayBasket = function( basket ) {
  var view = new BasketView( basket );
}












