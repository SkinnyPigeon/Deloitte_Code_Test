var Total = function() {
  this.total = 0;
  this.basket = [];
}

Total.prototype = {
  setTotal: function( basket ) {
    this.basket = basket;
    for( var i = 0; i < basket.length; i++ ) {
      this.total += basket[ i ].price;
    }
    return this.total;
  },

  addVoucher: function( voucher ) {
    if( this.checkForUsedVouchers( voucher )) {
      return;
    }

    if( !this.checkForValidVoucher( voucher ) ) {
      return;
    }

    if( this.checkForAboveFifty( voucher ) ) {
      return;
    }

    if( !this.checkForShoes() && !this.checkForAboveSeventyFive( voucher )  ) {
      return;
    }

    if( this.total >= voucher.value ) {
      this.total -= voucher.value;
    }
  },

  checkForUsedVouchers: function( voucher ) {
    if( voucher.hasBeenUsed ) {
      return true;
    }
  },

  checkForValidVoucher: function( voucher ) {
    if( voucher.valid ) {
      return true;
    }
  },

  checkForAboveFifty: function( voucher ) {
    if( this.total <= 50 && voucher.value === 10 ) {
      return true;
    }
  },

  checkForAboveSeventyFive: function( voucher ) {
    if( this.total <= 75 && voucher.value === 15 ) {
      return true;
    }
  },

  checkForShoes: function() {
    for( var i = 0; i < this.basket.length; i++ ) {
      if( this.basket[ i ].subcategory === "Footwear" ) {
        return true;
      }
    } 
  }



}

module.exports = Total;