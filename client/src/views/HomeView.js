var HomeView = function() {
  console.log( "Home View Accessed" );

  var area = document.getElementById( 'main-display' );
  area.innerText = "";
  var p = document.createElement( 'p' );
  p.innerText = "This is the home page";
  area.appendChild( p );
}

module.exports = HomeView;