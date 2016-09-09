var womensCasual = require( '../models/stock/womensCasual' );
var womensFormal = require( '../models/stock/womensFormal' );
var womensFootwear = require( '../models/stock/womensFootwear' );

var ClothesView = require( './ClothesView' );

var WomenView = function( basket ) {
  this.basket = basket;
  this.resetView();
}

WomenView.prototype = {

  display: function() {
    var ul = document.createElement( 'ul' );
    ul.id = "women-page";

    var picOne = document.createElement( 'li' );
    var shoes = document.createElement( 'img' );
    var shoeText = document.createElement( 'p' );

    var picTwo = document.createElement( 'li' );
    var formal = document.createElement( 'img' );
    var formalText = document.createElement( 'p' );

    var picThree = document.createElement( 'li' );
    var casual = document.createElement( 'img' );
    var casualText = document.createElement( 'p' );

    shoes.src = "./css/image/court-black.png";
    formal.src = "./css/image/bird.png";
    casual.src = "./css/image/cardigan-gold.png";

    shoeText.innerText = "Shoes";
    formalText.innerText = "Formal";
    casualText.innerText = "Casual";

    picOne.appendChild( shoes );
    picOne.appendChild( shoeText );

    picTwo.appendChild( formal );
    picTwo.appendChild( formalText );

    picThree.appendChild( casual );
    picThree.appendChild( casualText );

    ul.appendChild( picOne );
    ul.appendChild( picTwo );
    ul.appendChild( picThree );

    this.area.appendChild( ul );

    shoes.onclick = function() {
      this.displayDepartment( this.basket, womensFootwear );
    }.bind( this );

    formal.onclick = function() {
      this.displayDepartment( this.basket, womensFormal );
    }.bind( this );

    casual.onclick = function() {
      this.displayDepartment( this.basket, womensCasual );
    }.bind( this );
  },

  resetView: function() {
    var clear = document.getElementById( 'main-display' );
    clear.innerText = "";

    var clearTwo = document.getElementById( 'item-display' );
    clearTwo.innerText = "";

    var clearThree = document.getElementById( 'basket-display' );
    clearThree.innerText = "";

    this.area = document.getElementById( 'choice-display' );
    this.area.innerText = "";
  },

  displayDepartment: function( basket, department ) {
    var view = new ClothesView( basket, department );
    view.display();
  }
}

module.exports = WomenView;
