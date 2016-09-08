var womensCasual = require( '../models/stock/womensCasual' );

var WomenCasualView = function( basket ) {
  
  this.basket = basket;
  console.log( basket );

  var clear = document.getElementById( 'main-display' );
  clear.innerText = "";

  var clearTwo = document.getElementById( 'choice-display' );
  clearTwo.innerText = "";

  this.area = document.getElementById( 'item-display' );
  this.area.innerText = "";
}

WomenCasualView.prototype = {

  display: function() {
    for( var i = 0; i < womensCasual.length; i++ ) {

      var image = document.createElement( 'img' );
      var description = document.createElement( 'p' );
      var price = document.createElement( 'p' );
      var stock = document.createElement( 'p' );
      var button = document.createElement( 'button' );

      image.src = womensCasual[i].image;
      description.innerText = womensCasual[i].name;
      price.innerText = womensCasual[i].price;
      stock.innerText = womensCasual[i].stock;
      button.innerText = "Add to basket";
      button.id = i;
      console.log( i );

      button.onclick = function( e ) {
        var id = e.path[0].id;
        this.handleButtonClick( id );
      }.bind( this );

      this.area.appendChild( image );
      this.area.appendChild( description );
      this.area.appendChild( price );
      this.area.appendChild( stock );
      this.area.appendChild( button );
    }
  },

  handleButtonClick: function( id ) {
    this.basket.add( womensCasual[ id ]);
  }
}

module.exports = WomenCasualView;