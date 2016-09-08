var Voucher = function( code ) {
  this.valid = false;
  this.value = 0;
  this.hasBeenUsed = false;
  this.fiveOff = [ "AA52721", "BC67123", "GHAD782", "a" ];
  this.tenOff = [ "BSH7824", "BCHS927", "HAJS127", "b" ];
  this.fifteenOff = [ "HASK243", "ASHH326", "ADG1260", "c" ];
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

  useVoucher: function() {
    this.hasBeenUsed = true;
  }

}

module.exports = Voucher;