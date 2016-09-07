var Basket = require( '../models/basket' );
var stock = require( '../models/stock' );
var assert = require( 'chai' ).assert;

describe( 'The Basket', function() {

  beforeEach( function() {
    basket = new Basket();
  });

  it( 'Should be empty at start', function() {
    assert.equal( 0, basket.totalItems() );
  });

  it( 'Should be able to add an item', function() {
    basket.add( stock[ 'itemOne' ] );
    assert.equal( 1, basket.totalItems() );
  });

  it( 'Should be able to remove an item', function() {
    basket.add( stock[ 'itemOne' ] );
    basket.remove( stock[ 'itemOne' ] );
    assert.equal( 0, basket.totalItems() );
  });

});
