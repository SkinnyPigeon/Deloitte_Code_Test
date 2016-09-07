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

  it( 'Should be able to add everything together', function() {
    total.add( basket );
    assert.equal( 42, runningTotal.total() );
  });
  
});
