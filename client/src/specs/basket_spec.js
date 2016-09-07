var basket = require( '../models/basket' ).basket;
var stock = require( '../models/stock' );
var assert = require( 'chai' ).assert;

describe( 'The Basket', function() {

  it( 'Should be empty at start', function() {
    assert.equal( 0, basket.totalItems() );
  });

  it( 'Should be able to add an item', function() {
    basket.add( stock[ 'itemOne' ] );
    assert.equal( 1, basket.totalItems() );
  });

});
