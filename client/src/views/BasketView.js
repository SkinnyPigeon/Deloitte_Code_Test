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
    var table = document.createElement( 'table' );
    table.id = "basket-page"
    this.area.appendChild( table );

    var tr = document.createElement( 'tr' );
    var thP = document.createElement( 'th' );
    var thD = document.createElement( 'th' );
    var thPr = document.createElement( 'th' );
    var thDe = document.createElement( 'th' );

    thP.innerText = "Product";
    thD.innerText = "Description";
    thPr.innerText = "Price";
    thDe.innerText = "Delete";

    tr.appendChild( thP );
    tr.appendChild( thD );
    tr.appendChild( thPr );
    tr.appendChild( thDe );

    table.appendChild( tr );

    for( var i = 0; i < this.basket.items.length; i ++ ) {
      var trItems = document.createElement( 'tr' );
      var thImg = document.createElement( 'th' );
      var image = document.createElement( 'img' );

      var thDesciption = document.createElement( 'th' );
      var description = document.createElement( 'p' );

      var thPrice = document.createElement( 'th' );
      var price = document.createElement( 'p' );

      var thButton = document.createElement( 'th' );
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

      thImg.appendChild( image );
      thDesciption.appendChild( description );
      thPrice.appendChild( price );
      thButton.appendChild( button );

      trItems.appendChild( thImg );
      trItems.appendChild( thDesciption );
      trItems.appendChild( thPrice );
      trItems.appendChild( thButton );

      table.appendChild( trItems );
    }

    var total = document.createElement( 'h3' );
    total.innerText = this.total;
    this.area.appendChild( total );



    var voucherButton = document.createElement( 'button' );
    voucherButton.id = "voucher-button";
    voucherButton.innerText = "Add voucher";
    this.area.appendChild( voucherButton );

    var voucherEntry = document.createElement( 'input' );
    voucherEntry.id = "voucher-entry";
    voucherEntry.type = "text";
    voucherEntry.placeholder = "Enter voucher code...";
    this.area.appendChild( voucherEntry );
    
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