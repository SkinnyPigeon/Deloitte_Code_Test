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
    if( voucher.valid && this.total >= voucher.value ) {
      this.total -= voucher.value;
    }
  },

  checkForUsedVouchers: function( voucher ) {
    if( voucher.hasBeenUsed ) {
      return true;
    }
  }

}

module.exports = Total;