var Basket = function() {
  this.items = [];
}

Basket.prototype = {

  totalItems: function() {
    return this.items.length;
  },

  add: function( item ) {
    if( item.stock === 0 ) {
      return this.error();
    }
    this.items.push( item );
    item.stock -= 1;
  },

  remove: function( item ) {
    for( basketItem in this.items ) {
      if( item.name === this.items[ basketItem ].name ){
        this.items.splice( basketItem, 1);
      }
    }
  },

  error: function() {
    return "Out of stock";
  }
}

module.exports = Basket;
