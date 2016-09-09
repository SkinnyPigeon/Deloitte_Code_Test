var Total = function() {
  this.total = 0;
  this.basket = [];
}

Total.prototype = {
  setTotal: function( basket ) {
    this.total = 0;
    this.basket = basket;
    for( var i = 0; i < basket.length; i++ ) {
      this.total += basket[i].price;
      if( basket[i].salePrice != null ) {
        this.total -= basket[i].price;
        this.total += basket[i].salePrice;
      }
    }
    return this.total;
  },

  addVoucher: function( voucher ) {
    if( this.checkForUsedVouchers( voucher )) {
      return false;
    }

    if( !this.checkForValidVoucher( voucher )) {
      return false;
    }

    if( this.checkForUnderFifty( voucher )) {
      return false;
    }

    if( this.checkForUnderSeventyFive( voucher )) {
      return false;
    }

    if( this.checkForAboveSeventyFiveAndShoes( voucher )) {
      return false;
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
    }
    return false;
  },

  checkForUnderSeventyFive: function( voucher ) {
    if( this.total <= 75 && voucher.value === 15 ) {
      return true;
    }
    return false;
  },

  checkForOverSeventyFive: function( voucher ) {
    if( this.total >= 75 && voucher.value === 15 ) {
      return true;
    }
    return false;
  },

  checkForShoes: function() {
    for( var i = 0; i < this.basket.length; i++ ) {
      if( this.basket[ i ].subcategory === "Footwear" ) {
        return false;
      }
    } 
    return true;
  },

  checkForAboveSeventyFiveAndShoes: function( voucher ) {
    if( this.checkForOverSeventyFive( voucher ) && this.checkForShoes() ) {
      return true;
    } 
    return false;
  }
}

module.exports = Total;
