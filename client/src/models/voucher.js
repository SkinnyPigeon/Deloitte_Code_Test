var Voucher = function( code ) {
  this.valid = false;
  this.value = 0;
  this.hasBeenUsed = false;
  this.fiveOff = [ "AA52721", "BC67123", "GHAD782", "A" ];
  this.tenOff = [ "BSH7824", "BCHS927", "HAJS127", "B" ];
  this.fifteenOff = [ "HASK243", "ASHH326", "ADG1260", "C" ];
  this.code = code;
}

Voucher.prototype = {

  checkIfValid: function( array, value ) {
    for( var i = 0; i < array.length; i++ ) {
      if( this.code === array[ i ] ) {
        this.valid = true;
        this.value = value;
      }
    }
  },

  setValidation: function() {
    this.checkIfValid( this.fiveOff, 5 );
    this.checkIfValid( this.tenOff, 10 );
    this.checkIfValid( this.fifteenOff, 15 );
  },

  useVoucher: function( code ) {
    this.findVoucher( this.fiveOff, code );
    this.findVoucher( this.tenOff, code );
    this.findVoucher( this.fifteenOff, code );
  },

  findVoucher: function( array, code ) {
    for( var i = 0; i < array.length; i++ ) {
      if( this.code === array[i] ) {
        array.splice( array[i], 1 );
      }
    }
  }
}

module.exports = Voucher;