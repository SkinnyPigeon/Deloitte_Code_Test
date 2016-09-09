var ClothesView = function( basket, department ) {
  
  this.department = department;
  this.basket = basket;
  this.resetView();
}

ClothesView.prototype = {

  display: function() {
    var ul = document.createElement( 'ul' );
    ul.id = "display-page";

    for( var i = 0; i < this.department.length; i++ ) {

      var li = document.createElement( 'li' );
      var image = document.createElement( 'img' );
      var description = document.createElement( 'h3' );
      var price = document.createElement( 'p' );
      var salePrice = document.createElement( 'p' );
      var button = document.createElement( 'button' );

      image.src = this.department[i].image;
      description.innerText = this.department[i].name;

      var cost = this.department[i].price.toLocaleString('en-GB', {style:'currency', currency:'GBP'})

      price.innerText = cost;
      button.innerText = "Add to basket";
      button.id = i;

      button.onclick = function( e ) {
        var id = e.path[0].id;
        this.handleButtonClick( id );
      }.bind( this );

      li.appendChild( image );
      li.appendChild( description );
      li.appendChild( price );

      if( this.department[i].salePrice != null ) {
        salePrice.innerText = this.department[i].salePrice.toLocaleString('en-GB', {style:'currency', currency:'GBP'})
        price.style.textDecoration = "line-through";
        li.appendChild( price );
        li.appendChild( salePrice );
      }

      li.appendChild( button );

      ul.appendChild( li );
      this.area.appendChild( ul );
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
