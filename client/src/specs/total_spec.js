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

    fakeFiveOff = new Voucher( "ASHKDHS" );
    fakeFiveOff.setValidation();

    tenOff = new Voucher( "BCHS927" );
    tenOff.setValidation();

    fifteenOff = new Voucher( "ASHH326" );
    fifteenOff.setValidation();
  });

  it( 'Should start with a total of zero', function() {
    assert.equal( 0, runningTotal.total );
  });

  it( 'Should be able to add something to its total', function() {
    runningTotal.setTotal( basket.items );
    assert.equal( 42, runningTotal.total );
  });

  it( 'Should be able to add multiple items to its total', function() {
    basket.add( stock[2] );
    runningTotal.setTotal( basket.items );
    assert.equal( 76, runningTotal.total );
  });

  it( 'Should be able to subtract a valid voucher', function() {
    runningTotal.setTotal( basket.items );
    runningTotal.addVoucher( fiveOff );
    assert.equal( 37, runningTotal.total );
  });

  it( 'Should not subtract an invalid voucher', function() {
    basket.add( stock[0] );
    runningTotal.setTotal( basket.items );
    runningTotal.addVoucher( fakeFiveOff );
    assert.equal( 99, runningTotal.total );
  });

  it( 'Should not take a used voucher', function() {
    basket.add( stock[0] );
    runningTotal.setTotal( basket.items );
    fiveOff.useVoucher();
    runningTotal.addVoucher( fiveOff );
    assert.equal( 99, runningTotal.total );
  });

  it( 'Should apply £10 off when total is over £50', function() {
    basket.add( stock[0] );
    runningTotal.setTotal( basket.items );
    runningTotal.addVoucher( tenOff );
    assert.equal( 89, runningTotal.total );
  });

  it( 'Should not apply £10 off when total is under £50', function() {
    basket.add( stock[3] );
    runningTotal.setTotal( basket.items );
    runningTotal.addVoucher( tenOff );
    assert.equal( 19, runningTotal.total );
  });

  it( 'Should apply £15 off when total is over £75 and there are shoes', function() {
    basket.add( stock[0] );
    basket.add( stock[3] );
    runningTotal.setTotal( basket.items );
    runningTotal.addVoucher( fifteenOff );
    assert.equal( 103, runningTotal.total );
  });

  it( 'Should not apply £15 off when total is under £75 and there are no shoes', function() {
    basket.add( stock[0] );
    basket.add( stock[3] );
    runningTotal.setTotal( basket.items );
    runningTotal.addVoucher( fifteenOff );
    assert.equal( 118, runningTotal.total );
  });

});









