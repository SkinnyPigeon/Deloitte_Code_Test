var WomenShoeView = function() {
  console.log( "Women Shoe View Accessed" );

  var clear = document.getElementById( 'main-display' );
  clear.innerText = "";

  var clearTwo = document.getElementById( 'choice-display' );
  clearTwo.innerText = "";

  var area = document.getElementById( 'item-display' );
  area.innerText = "";

  var court = document.createElement( 'img' );
  var courtText = document.createElement( 'p' );

  var suede = document.createElement( 'img' );
  var suedeText = document.createElement( 'p' );

  court.src = "./css/image/court-black.jpeg";
  suede.src = "./css/image/suede-blue.jpg";

  shoeText.innerText = ;
  formalText.innerText = ;

  area.appendChild( court );
  area.appendChild( courtText );

  area.appendChild( suede );
  area.appendChild( suedeText );

  // shoes.onclick = function() {
  //   displayWomenShoes();
  // }

  // formal.onclick = function() {
  //   displayWomenFormal();
  // }

  // casual.onclick = function() {
  //   displayWomenCasual();
  // }

}


module.exports = WomenShoeView;