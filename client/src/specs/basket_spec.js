var Basket = require( '../models/basket' );
var stock = require( '../models/stock/stock' );
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
                          stock: 3 }], basket.items );
  });

  it( 'Should reduce the level of stock for an item', function() {
    basket.add( stock[ 2 ] );
    assert.equal( 11, stock[ 2 ].stock );
  });

  it( 'Should not be able to add an out of stock item', function() {
    assert.equal( "Out of stock", basket.add( stock[ 4 ] ));
  });

  it( 'Should make sure the stock has not dropped below zero', function() {
    basket.add( stock[ 4 ] );
    assert.equal( 0, stock[ 4 ]. stock );
  });

});
