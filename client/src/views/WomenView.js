var WomenView = function() {
  console.log( "Women View Accessed" );

  var area = document.getElementById( 'main-display' );
  // area.innerHtml = "";
  var p = document.createElement( 'p' );
  p.innerText = "Hello";
  area.appendChild( p );
}

module.exports = WomenView;