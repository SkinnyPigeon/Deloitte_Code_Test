var WomenView = function() {
  console.log( "Women View Accessed" );

  var area = document.getElementById( 'main-display' );
  area.innerText = "";
  var p = document.createElement( 'p' );
  p.innerText = "This is the women view";
  area.appendChild( p );
}

module.exports = WomenView;