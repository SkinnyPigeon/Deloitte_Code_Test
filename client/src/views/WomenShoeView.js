var womensFootwear = require( '../models/stock/womensFootwear' );

var WomenShoeView = function( basket ) {

  this.basket = basket;

  var clear = document.getElementById( 'main-display' );
  clear.innerText = "";

  var clearTwo = document.getElementById( 'choice-display' );
  clearTwo.innerText = "";

  this.area = document.getElementById( 'item-display' );
  this.area.innerText = "";

}

WomenShoeView.prototype = {

  display: function() {
    for( var i = 0; i < womensFootwear.length; i++ ) {

      var image = document.createElement( 'img' );
      var description = document.createElement( 'p' );
      var price = document.createElement( 'p' );
      var stock = document.createElement( 'p' );
      var button = document.createElement( 'button' );

      image.src = womensFootwear[i].image;
      description.innerText = womensFootwear[i].name;
      price.innerText = womensFootwear[i].price;
      stock.innerText = womensFootwear[i].stock;
      button.innerText = "Add to basket";
      button.id = i;

      button.onclick = function() {
        var i = button.id;
        console.log( "button clicked" );
        console.log( womensFootwear[i] );
        this.basket.add( womensFootwear[i] );
      }.bind( this );

      this.area.appendChild( image );
      this.area.appendChild( description );
      this.area.appendChild( price );
      this.area.appendChild( stock );
      this.area.appendChild( button );
    }
  },


}

module.exports = WomenShoeView;