var HomeView = require( './views/HomeView' );
var WomenView = require( './views/WomenView' );
var MenView = require( './views/MenView' );
var BasketView = require( './views/BasketView' );

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














