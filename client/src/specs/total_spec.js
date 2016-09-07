var assert = require( 'chai' ).assert;
var stock = require( '../models/stock' );
var Basket = require( '../models/basket' );
var Total = require( '../models/total' );

describe( 'The Total: ', function() {

  beforeEach( function() {
    runningTotal = new Total();
    basket = new Basket();
    basket.add( stock[1] );
  });

  it( 'Should start with a total of zero', function() {
    assert.equal( 0, runningTotal.total );
  });

  it( 'Should be able to add something to its total', function() {
    runningTotal.getTotal( basket.items );
    assert.equal( 42, runningTotal.total );
  });

});
