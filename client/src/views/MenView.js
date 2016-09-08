var mensCasual = require( '../models/stock/mensCasual' );
var mensFormal = require( '../models/stock/mensFormal' );
var mensFootwear = require( '../models/stock/mensFootwear' );

var ClothesView = require( './ClothesView' );

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
    displayDepartment( basket, mensFootwear );
  }

  formal.onclick = function() {
    displayDepartment( basket, mensFormal );
  }

  casual.onclick = function() {
    displayDepartment( basket, mensCasual );
  }
}

var displayDepartment = function( basket, department ) {
  var view = new ClothesView( basket, department );
  view.display();
}

module.exports = MenView;