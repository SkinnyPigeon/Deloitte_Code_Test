var Total = function() {
  this.total = 0;
}

Total.prototype = {
  setTotal: function( basket ) {
    for( var i = 0; i < basket.length; i++ ) {
      this.total += basket[ i ].price;
    }
    return this.total;
  },

  addVoucher: function( voucher ) {
    if( this.checkForUsedVouchers( voucher )) {
      return;
    }
    if( voucher.valid && this.total >= 5 ) {
      this.total -= 5;
    }
  },

  checkForUsedVouchers: function( voucher ) {
    if( voucher.hasBeenUsed ) {
      return true;
    }
  }

}

module.exports = Total;