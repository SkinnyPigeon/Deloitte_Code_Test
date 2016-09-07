var HomeView = require( './views/HomeView' );
var WomenView = require( './views/WomenView' );
var MenView = require( './views/MenView' );
var BasketView = require( './views/BasketView' );

var WomenShoeView = require( './views/WomenShoeView' );
var WomenCasualView = require( './views/WomenCasualView' );
var WomenFormalView = require( './views/WomenFormalView' );

var MenShoeView = require( './views/MenShoeView' );
var MenCasualView = require( './views/MenCasualView' );
var MenFormalView = require( './views/MenFormalView' );

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












