var assert = require( 'chai' ).assert;
var stock = require( '../models/stock' );

describe( 'The Stock: ', function() {

  it( 'Should have a price', function() {
    assert.equal( 42, stock[ 'itemTwo' ].price );
  });

  it( 'Should have a description', function() {
    assert.equal( "Suede Shoes, Blue", stock[ 'itemTwo' ].name );
  });

  it( 'Should have a category', function() {
    assert.equal( "Women's Footwear", stock[ 'itemTwo' ].category );
  });

  it( 'Should have a stock level', function() {
    assert.equal( 4, stock[ 'itemTwo' ].stock );
  });

});