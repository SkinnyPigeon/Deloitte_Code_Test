var assert = require( 'chai' ).assert;
var stock = require( '../models/stock' );
var Basket = require( '../models/basket' );
var Total = require( '../models/total' );
var Voucher = require( '../models/voucher' );

describe( 'The Total: ', function() {

  beforeEach( function() {
    runningTotal = new Total();
    basket = new Basket();
    basket.add( stock[1] );
    fiveOff = new Voucher( "GHAD782" );
    fiveOff.setValidation();
  });

  it( 'Should start with a total of zero', function() {
    assert.equal( 0, runningTotal.total );
  });

  it( 'Should be able to add something to its total', function() {
    runningTotal.getTotal( basket.items );
    assert.equal( 42, runningTotal.total );
  });

  it( 'Should be able to add multiple items to its total', function() {
    basket.add( stock[2] );
    runningTotal.getTotal( basket.items );
    assert.equal( 76, runningTotal.total );
  });

  it( 'Should be able to subtract a valid voucher', function() {
    runningTotal.getTotal( basket.items );
    runningTotal.addVoucher( fiveOff );
    assert.equal( 37, runningTotal.total );
  })

});
