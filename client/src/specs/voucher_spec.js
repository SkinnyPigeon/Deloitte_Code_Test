var assert = require( 'chai' ).assert;
var Voucher = require( '../models/voucher' );

describe( 'The Vouchers', function() {

  it( 'Should be able to make a valid voucher', function() {
    voucher = new Voucher( "AA52721" )
    voucher.setValidation();
    assert.equal( true, voucher.valid );
  });

  it( 'Should be not set an invalid code to true on a voucher', function() {
     voucher = new Voucher( "AA52741" )
     voucher.setValidation();
     assert.equal( false, voucher.valid );
  });

  it( 'Should be able to set the voucher to the right value', function() {
    voucher = new Voucher( "ASHH326" )
    voucher.setValidation();
    assert.equal( 15, voucher.value );
  });
});
