var HomeView = require( './views/HomeView' );
var WomenView = require( './views/WomenView' );
var MenView = require( './views/MenView' );
var BasketView = require( './views/BasketView' );

var Basket = require( './models/basket' );
var Voucher = require( './models/voucher' );


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












