var WomenShoeView = require( './views/WomenShoeView' );
var WomenFormalView = require( './views/WomenFormalView' );
var WomenCasualView = require( './views/WomenCasualView' );

var WomenView = function() {
  console.log( "Women View Accessed" );

  var clear = document.getElementById( 'main-display' );
  clear.innerText = "";

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
    displayWomenShoes();
  }

  formal.onclick = function() {
    displayWomenFormal();
  }

  casual.onclick = function() {
    displayWomenCasual();
  }

}

var displayWomenShoes = function() {
  var view = new WomenShoeView();
}

var displayWomenFormal = function() {
  var view = new WomenFormalView();
}

var displayWomenCasual = function() {
  var view = new WomenCasualView();
}









module.exports = WomenView;