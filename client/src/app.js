window.onload = function() {

  var home = document.getElementById( 'home' );
  var women = document.getElementById( 'women' );
  var men = document.getElementById( 'men' );
  var basket = document.getElementById( 'basket' );

  home.onclick = function(e) {
    console.log( "clicked home" );
  }

  women.onclick = function(e) {
    console.log( "clicked women")
  }

  men.onclick = function(e) {
    console.log( "clicked men")
  }

  basket.onclick = function(e) {
    console.log( "clicked basket")
  }
}

