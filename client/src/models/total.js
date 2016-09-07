var Total = function() {
  this.total = 0;
}

Total.prototype = {
  getTotal: function( basket ) {
    for( item in basket ) {
      this.total += item.price
    }
    return this.total;
  },

}

module.exports = Total;