var basket = require( '../models/basket' ).basket;
var stock = require( '../models/stock' );
var assert = require( 'chai' ).assert;

describe( 'The Basket', function() {

  it( 'Should be empty at start', function() {
    assert.equal( 0, basket.totalItems() );
  });

});
