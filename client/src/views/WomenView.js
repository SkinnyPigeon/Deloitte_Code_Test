var WomenShoeView = require( './WomenShoeView' );
var WomenFormalView = require( './WomenFormalView' );
var WomenCasualView = require( './WomenCasualView' );

var WomenView = function( basket ) {
  console.log( "Women View Accessed" );

  var clear = document.getElementById( 'main-display' );
  clear.innerText = "";

  var clearTwo = document.getElementById( 'item-display' );
  clearTwo.innerText = "";

  var area = document.getElementById( 'choice-display' );
  area.innerText = "";

  var shoes = document.createElement( 'img' );
  var shoeText = document.createElement( 'p' );

  var formal = document.createElement( 'img' );
  var formalText = document.createElement( 'p' );

  var casual = document.createElement( 'img' );
  var casualText = document.createElement( 'p' );

  shoes.src = "./css/image/court-black.jpeg";
  formal.src = "./css/image/bird.jpeg";
  casual.src = "./css/image/cardigan-gold.jpg";

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
    displayWomenShoes( basket );
  }

  formal.onclick = function() {
    displayWomenFormal();
  }

  casual.onclick = function() {
    displayWomenCasual();
  }
}

var displayWomenShoes = function( basket ) {
  var view = new WomenShoeView(  basket );
  view.display();
}

var displayWomenFormal = function() {
  var view = new WomenFormalView();
  view.display();
}

var displayWomenCasual = function() {
  var view = new WomenCasualView();
  view.display();
}









module.exports = WomenView;