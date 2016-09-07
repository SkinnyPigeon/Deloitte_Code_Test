var HomeView = function() {
  console.log( "Home View Accessed" );

  var area = document.getElementById( 'main-display' );
  area.innerText = "";

  var women = document.createElement( 'img' );
  var men = document.createElement( 'img' );

  women.className = "home-images"
  men.className = "home-images"

  women.src = "./css/image/women.jpeg";
  men.src = "./css/image/men.jpeg";
  
  area.appendChild( women );
  area.appendChild( men );
}

module.exports = HomeView;