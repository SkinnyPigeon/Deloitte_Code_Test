var mensCasual = require( '../models/stock/mensCasual' );
var mensFormal = require( '../models/stock/mensFormal' );
var mensFootwear = require( '../models/stock/mensFootwear' );

var ClothesView = require( './ClothesView' );

var MenView = function( basket ) {

  this.basket = basket;
  this.resetView();
}

MenView.prototype = {

  display: function() {
    var ul = document.createElement( 'ul' );
    ul.id = "men-page";

    var picOne = document.createElement( 'li' );
    var shoes = document.createElement( 'img' );
    var shoeText = document.createElement( 'p' );

    var picTwo = document.createElement( 'li' );
    var formal = document.createElement( 'img' );
    var formalText = document.createElement( 'p' );

    var picThree = document.createElement( 'li' );
    var casual = document.createElement( 'img' );
    var casualText = document.createElement( 'p' );

    shoes.src = "./css/image/leather-tan.png";
    formal.src = "./css/image/lightweight-deer.png";
    casual.src = "./css/image/striped-green.png";

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
      this.displayDepartment( this.basket, mensFootwear );
    }.bind( this );

    formal.onclick = function() {
      this.displayDepartment( this.basket, mensFormal );
    }.bind( this );

    casual.onclick = function() {
      this.displayDepartment( this.basket, mensCasual );
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

module.exports = MenView;