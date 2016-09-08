var assert = require( 'chai' ).assert;
var stock = require( '../models/stock/stock' );

describe( 'The Stock: ', function() {

  it( 'Should have a price', function() {
    assert.equal( 42, stock[ 1 ].price );
  });

  it( 'Should have a description', function() {
    assert.equal( "Suede Shoes, Blue", stock[ 1 ].name );
  });

  it( 'Should have a category', function() {
    assert.equal( "Women's Footwear", stock[ 1 ].category );
  });

  it( 'Should have a stock level', function() {
    assert.equal( 4, stock[ 1 ].stock );
  });

});