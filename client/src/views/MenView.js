var MenShoeView = require( './MenShoeView' );
var MenFormalView = require( './MenFormalView' );
var MenCasualView = require( './MenCasualView' );


var MenView = function( basket ) {
  console.log( "Men View Accessed" );

  var clear = document.getElementById( 'main-display' );
  clear.innerText = "";

  var clearTwo = document.getElementById( 'item-display' );
  clearTwo.innerText = "";

  var clearThree = document.getElementById( 'basket-display' );
  clearThree.innerText = "";

  var area = document.getElementById( 'choice-display' );
  area.innerText = "";

  var shoes = document.createElement( 'img' );
  var shoeText = document.createElement( 'p' );

  var formal = document.createElement( 'img' );
  var formalText = document.createElement( 'p' );

  var casual = document.createElement( 'img' );
  var casualText = document.createElement( 'p' );

  shoes.src = "./css/image/leather-tan.jpeg";
  formal.src = "./css/image/lightweight-deer.jpeg";
  casual.src = "./css/image/striped-green.jpg";

  shoeText.innerText = "Shoes";
  formalText.innerText = "Formal";
  casualText.innerText = "Casual";

  area.appendChild( shoes );
  area.appendChild( shoeText );

  area.appendChild( formal );
  area.appendChild( formalText );

  area.appendChild( casual );
  area.appendChild( casualText );



  shoes.onclick = function() {
    displayMenShoes( basket );
  }

  formal.onclick = function() {
    displayMenFormal( basket );
  }

  casual.onclick = function() {
    displayMenCasual( basket );
  }
}

var displayMenShoes = function( basket ) {
  var view = new MenShoeView(  basket );
  view.display();
}

var displayMenFormal = function( basket ) {
  var view = new MenFormalView( basket );
  view.display();
}

var displayMenCasual = function( basket ) {
  var view = new MenCasualView( basket );
  view.display();
}


module.exports = MenView;