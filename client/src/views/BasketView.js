var Total = require( '../models/total' );
var Voucher = require( '../models/voucher' );

var runningTotal = new Total();

var BasketView = function( basket ) {

  this.basket = basket;
  this.resetView();
  this.total = this.giveRunningTotal();
  this.codes = [];
}

BasketView.prototype = {

  display: function() {
    for( var i = 0; i < this.basket.items.length; i ++ ) {
      var image = document.createElement( 'img' );
      var description = document.createElement( 'p' );
      var price = document.createElement( 'p' );
      var button = document.createElement( 'button' );

      image.src = this.basket.items[i].image;
      description.innerText = this.basket.items[i].name;
      price.innerText = this.basket.items[i].price;
      button.innerText = "Delete";
      button.id = i;

      button.onclick = function( e ) {
        var id = e.path[0].id;
        this.handleButtonClick( id );
      }.bind( this );

      this.area.appendChild( image );
      this.area.appendChild( description );
      this.area.appendChild( price );
      this.area.appendChild( button );
    }

    var total = document.createElement( 'h3' );
    total.innerText = this.total;
    this.area.appendChild( total );

    var voucherEntry = document.createElement( 'input' );
    voucherEntry.id = "voucher-entry";
    voucherEntry.type = "text";
    voucherEntry.placeholder = "Enter voucher code...";
    this.area.appendChild( voucherEntry );

    var voucherButton = document.createElement( 'button' );
    voucherButton.id = "voucher-button";
    voucherButton.innerText = "Add voucher";
    this.area.appendChild( voucherButton );
    voucherButton.onclick = function() {
      this.handleVoucherClick();
    }.bind( this );
  },

  resetView: function() {
    var clear = document.getElementById( 'main-display' );
    clear.innerText = "";

    var clearTwo = document.getElementById( 'item-display' );
    clearTwo.innerText = "";

    var clearThree = document.getElementById( 'choice-display' );
    clearThree.innerText = "";

    this.area = document.getElementById( 'basket-display' );
    this.area.innerText = "";
  },

  handleButtonClick: function( id ) {
    this.basket.remove( this.basket.items[ id ]);
    this.giveRunningTotal();
    this.resetView();
    this.display();
  },

  handleVoucherClick: function() {
    var voucherEntry = document.getElementById( 'voucher-entry' );
    var code = voucherEntry.value.toUpperCase();
    this.handleVoucherChecks( code );
  },

  handleVoucherChecks: function( code ) {
    for( var i = 0; i < this.codes.length; i++ ) {
      if( this.codes[i] === code ) {
        alert( "Code has already been used" );
        return
      }
    }
    this.useVoucher( code );
  },

  useVoucher: function( code ) {
    var voucher = new Voucher( code );
    this.codes.push( code );
    voucher.setValidation();
    this.handleAlert( voucher );
    voucher.useVoucher();
    this.total = runningTotal.total;
    this.resetView();
    this.display();
  },

  giveRunningTotal: function() {
    runningTotal.setTotal( this.basket.items );
    this.total = runningTotal.total;
    return this.total;
  },

  handleAlert: function( voucher ) {
    if( voucher.valid === false || runningTotal.addVoucher( voucher ) === false ) {
      alert( "Please check your voucher code and validity for use on this shop" );
    }
  }
}

module.exports = BasketView;