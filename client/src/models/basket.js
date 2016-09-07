var stock = require( './stock' );

var basket = {
  items: [],

  totalItems: function() {
    return this.items.length;
  },

  add: function( item ) {
    this.items.push( item );
    this.total += item.price;
  },

  remove: function( item ) {
    for( basket_item of this.items ) {

      if( item.name === basket_item.name ){
        this.total -= basket_item.price;
      }
      
      if( item.name === basket_item.name ){
        this.items.splice( basket_item.index, 1);
      }
    }
  },
}
module.exports.basket = basket;