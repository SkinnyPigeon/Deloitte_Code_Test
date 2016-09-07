var assert = require( 'chai' ).assert;
var Voucher = require( '../models/voucher' );

describe( 'The Vouchers', function() {

  it( 'Should be able to make a valid voucher', function() {
    var voucher = new Voucher( "AA52721" )
    voucher.setValidation();
    assert.equal( true, voucher.valid );
  });

});

