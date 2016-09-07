var BasketView = function() {
  console.log( "Women View Accessed" );

  var area = document.getElementById( 'main-display' );
  area.innerText = "";
  var p = document.createElement( 'p' );
  p.innerText = "This is the basket view";
  area.appendChild( p );
}

module.exports = BasketView;