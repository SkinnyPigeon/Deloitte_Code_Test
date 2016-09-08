var ClothesView = function( basket, department ) {
  
  this.department = department;
  this.basket = basket;
  this.resetView();
}

ClothesView.prototype = {

  display: function() {
    for( var i = 0; i < this.department.length; i++ ) {

      var image = document.createElement( 'img' );
      var description = document.createElement( 'p' );
      var price = document.createElement( 'p' );
      var stock = document.createElement( 'p' );
      var button = document.createElement( 'button' );

      image.src = this.department[i].image;
      description.innerText = this.department[i].name;
      price.innerText = this.department[i].price;
      stock.innerText = this.department[i].stock;
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
    console.log( this.basket );
    this.handleAlert( id );
    this.basket.add( this.department[ id ]);
    this.resetView();
    this.display();
  },

  handleAlert: function( id ) {
    if( this.department[ id ].stock === 0 ) {
      alert( "Sorry we are out of that at the moment" );      
    }
  }
}

module.exports = ClothesView;