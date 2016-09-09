var HomeView = function() {

  this.resetView();
}

HomeView.prototype = {

  display: function() {
    var ul = document.createElement( 'ul' );
    ul.id = 'home-page';

    var picOne = document.createElement( 'li' );
    var women = document.createElement( 'img' );

    var picTwo = document.createElement( 'li' );
    var men = document.createElement( 'img' );

    women.src = "./css/image/women.jpeg";
    picOne.appendChild( women )

    men.src = "./css/image/men.jpeg";
    picTwo.appendChild( men );

    women.className = "home-images";
    women.id = 'women-image';
    men.className = "home-images";
    men.id = 'men-image';

    ul.appendChild( picOne );
    ul.appendChild( picTwo );

    this.area.appendChild( ul );
  },

  resetView: function() {
    var clear = document.getElementById( 'choice-display' );
    clear.innerText = "";

    var clearTwo = document.getElementById( 'item-display' );
    clearTwo.innerText = "";

    var clearThree = document.getElementById( 'basket-display' );
    clearThree.innerText = "";

    this.area = document.getElementById( 'main-display' );
    this.area.innerText = "";
  }
}

module.exports = HomeView;
