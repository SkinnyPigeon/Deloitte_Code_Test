var mensCasual = require( '../models/stock/mensCasual' );
var mensFormal = require( '../models/stock/mensFormal' );
var mensFootwear = require( '../models/stock/mensFootwear' );

var ClothesView = require( './ClothesView' );

var MenView = function( basket ) {

  this.resetView();
}

MenView.prototype = {

  display: function() {
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

    this.area.appendChild( shoes );
    this.area.appendChild( shoeText );

    this.area.appendChild( formal );
    this.area.appendChild( formalText );

    this.area.appendChild( casual );
    this.area.appendChild( casualText );

    shoes.onclick = function() {
      this.displayDepartment( basket, mensFootwear );
    }.bind( this );

    formal.onclick = function() {
      this.displayDepartment( basket, mensFormal );
    }.bind( this );

    casual.onclick = function() {
      this.displayDepartment( basket, mensCasual );
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