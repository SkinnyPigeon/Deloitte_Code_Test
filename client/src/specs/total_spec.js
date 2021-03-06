var assert = require( 'chai' ).assert;
var stock = require( '../models/stock/stock' );
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

  it( 'Should not apply £15 off when total is over £75 and there are no shoes', function() {
    basket.add( stock[10] );
    runningTotal.setTotal( basket.items );
    runningTotal.addVoucher( fifteenOff );
    assert.equal( 175.5, runningTotal.total );
  });

  it( 'Should be able to take an assortment of goods and apply a voucher accordingly', function() {
    basket.add( stock[9] );
    basket.add( stock[12] );
    basket.add( stock[11] );
    runningTotal.setTotal( basket.items );
    runningTotal.addVoucher( fifteenOff );
    assert.equal( 885, runningTotal.total );
  });

  it( 'Should be able to take an assortment of goods and apply a voucher accordingly ( part 2 )', function() {
    basket.add( stock[3] );
    basket.add( stock[12] );
    basket.add( stock[5] );
    runningTotal.setTotal( basket.items );
    runningTotal.addVoucher( fakeFiveOff );
    assert.equal( 726, runningTotal.total );
  });
});
