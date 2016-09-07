var WomenShoeView = function( basket, stock ) {
  console.log( stock )
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

  courtText.innerText = stock[0].name;
  suedeText.innerText = "Shoe 2";

  area.appendChild( court );
  area.appendChild( courtText );

  area.appendChild( suede );
  area.appendChild( suedeText );

  court.onclick = function() {
    basket.add( stock[0] );
  }

  // formal.onclick = function() {
  //   displayWomenFormal();
  // }

  // casual.onclick = function() {
  //   displayWomenCasual();
  // }

}




module.exports = WomenShoeView;