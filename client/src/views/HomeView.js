var HomeView = function() {

  this.resetView();
}

HomeView.prototype = {

  display: function() {
    var women = document.createElement( 'img' );
    var men = document.createElement( 'img' );

    women.src = "./css/image/women.jpeg";
    men.src = "./css/image/men.jpeg";

    women.className = "home-images";
    women.id = 'women-image';
    men.className = "home-images";
    men.id = 'men-image';

    this.area.appendChild( women );
    this.area.appendChild( men );
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