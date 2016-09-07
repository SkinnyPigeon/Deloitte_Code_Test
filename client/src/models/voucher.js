var Voucher = function( code ) {
  this.valid = false;
  this.value = 0;
  this.fiveOff = [ "AA52721", "BC67123", "GHAD782" ];
  this.tenOff = [ "BSH7824", "BCHS927", "HAJS127" ];
  this.fifteenOff = [ "HASK243", "ASHH326", "ADG1260" ];
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
  }

}

module.exports = Voucher;