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
    basket.add( stock[ 0 ] );
    assert.equal( 1, basket.totalItems() );
  });

  it( 'Should be able to remove an item', function() {
    basket.add( stock[ 0 ] );
    basket.remove( stock[ 0 ] );
    assert.equal( 0, basket.totalItems() );
  });

  it( 'Should return the contents', function() {
    basket.add( stock[ 1 ] );
    assert.deepEqual( [{  name: "Suede Shoes, Blue",
                          category: "Women's Footwear",
                          price: 42,
                          stock: 4 }], basket.seeItems() );
  });

});
