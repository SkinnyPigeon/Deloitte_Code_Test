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

    this.area.appendChild( shoes );
    this.area.appendChild( shoeText );

    this.area.appendChild( formal );
    this.area.appendChild( formalText );

    this.area.appendChild( casual );
    this.area.appendChild( casualText );

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