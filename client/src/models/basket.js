var Basket = function() {
  this.items = [];
}

Basket.prototype = {

  seeItems: function() {
    return this.items;
  },

  totalItems: function() {
    return this.items.length;
  },

  add: function( item ) {
    this.items.push( item );
  },

  remove: function( item ) {
    for( basket_item of this.items ) {

      if( item.name === basket_item.name ){
        this.items.splice( basket_item.index, 1);
      }
    }
  }

}



module.exports = Basket;