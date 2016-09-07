var Total = require( '../models/total' );

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