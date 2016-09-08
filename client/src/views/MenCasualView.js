var mensCasual = require( '../models/stock/mensCasual' );

var MenCasualView = function( basket ) {
  
  this.basket = basket;
  this.resetView();
}

MenCasualView.prototype = {

  display: function() {
    for( var i = 0; i < mensCasual.length; i++ ) {

      var image = document.createElement( 'img' );
      var description = document.createElement( 'p' );
      var price = document.createElement( 'p' );
      var stock = document.createElement( 'p' );
      var button = document.createElement( 'button' );

      image.src = mensCasual[i].image;
      description.innerText = mensCasual[i].name;
      price.innerText = mensCasual[i].price;
      stock.innerText = mensCasual[i].stock;
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

  resetView: function() {
    var clear = document.getElementById( 'main-display' );
    clear.innerText = "";

    var clearTwo = document.getElementById( 'choice-display' );
    clearTwo.innerText = "";

    var clearThree = document.getElementById( 'basket-display' );
    clearThree.innerText = "";

    this.area = document.getElementById( 'item-display' );
    this.area.innerText = "";
  },

  handleButtonClick: function( id ) {
    this.basket.add( mensCasual[ id ]);
    this.resetView();
    this.display();
  }
}

module.exports = MenCasualView;