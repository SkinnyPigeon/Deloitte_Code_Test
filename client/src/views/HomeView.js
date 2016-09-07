var HomeView = function() {
  console.log( "Home View Accessed" );

  var clear = document.getElementById( 'choice-display' );
  clear.innerText = "";

  var clearTwo = document.getElementById( 'item-display' );
  clearTwo.innerText = "";

  var area = document.getElementById( 'main-display' );
  area.innerText = "";

  var women = document.createElement( 'img' );
  var men = document.createElement( 'img' );

  women.src = "./css/image/women.jpeg";
  men.src = "./css/image/men.jpeg";

  women.className = "home-images";
  women.id = 'women-image';
  men.className = "home-images";
  men.id = 'men-image';

  area.appendChild( women );
  area.appendChild( men );
}

module.exports = HomeView;