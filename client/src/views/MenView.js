var MenView = function() {
  console.log( "Men View Accessed" );

  var clear = document.getElementById( 'main-display' );
  clear.innerText = "";

  var clearTwo = document.getElementById( 'item-display' );
  clearTwo.innerText = "";

  var area = document.getElementById( 'choice-display' );
  area.innerText = "";

  var shoes = document.createElement( 'img' );
  var shoeText = document.createElement( 'p' );

  var formal = document.createElement( 'img' );
  var formalText = document.createElement( 'p' );

  var casual = document.createElement( 'img' );
  var casualText = document.createElement( 'p' );

  shoes.src = "./css/image/leather-tan.jpeg";
  formal.src = "./css/image/lightweight-deer.jpeg";
  casual.src = "./css/image/striped-green.jpg";

  shoeText.innerText = "Shoes";
  formalText.innerText = "Formal";
  casualText.innerText = "Casual";

  area.appendChild( shoes );
  area.appendChild( shoeText );

  area.appendChild( formal );
  area.appendChild( formalText );

  area.appendChild( casual );
  area.appendChild( casualText );
}

module.exports = MenView;