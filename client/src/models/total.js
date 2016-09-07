var Total = function() {
  this.total = 0;
  this.basket = [];
}

Total.prototype = {
  setTotal: function( basket ) {
    this.total = 0;
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

    if( !this.checkForValidVoucher( voucher )) {
      return;
    }

    if( this.checkForUnderFifty( voucher )) {
      return;
    }

    if( this.checkForUnderSeventyFive( voucher )) {
      return;
    }

    if( this.checkForAboveSeventyFiveAndShoes( voucher )) {
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

  checkForUnderFifty: function( voucher ) {
    if( this.total <= 50 && voucher.value === 10 ) {
      return true;
    } else {
      return false;
    }
  },

  checkForUnderSeventyFive: function( voucher ) {
    if( this.total <= 75 && voucher.value === 15 ) {
      return true;
    } else {
      return false;
    }
  },

  checkForOverSeventyFive: function( voucher ) {
    if( this.total >= 75 && voucher.value === 15 ) {
      return true;
    } else {
      return false;
    }
  },

  checkForShoes: function() {
    for( var i = 0; i < this.basket.length; i++ ) {
      if( this.basket[ i ].subcategory != "Footwear" ) {
        return true;
      } else {
        return false;
      }
    } 
  },

  checkForAboveSeventyFiveAndShoes: function( voucher ) {
    if( this.checkForOverSeventyFive( voucher ) && this.checkForShoes() ) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Total;