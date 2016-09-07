var Total = function() {
  this.total = 0;
}

Total.prototype = {
  getTotal: function( basket ) {
    for( var i = 0; i < basket.length; i++ ) {
      this.total += basket[ i ].price
    }
    return this.total;
  },

}

module.exports = Total;