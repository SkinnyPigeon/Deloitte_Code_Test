var WomenView = require( './views/WomenView' );

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














