
// Open start page
var openStartPage = function() {
  $('.startPage').css('display', 'block');
};

// Start game
var closeStartPage = function() {
  $('.startPage').css('display', 'none');
};

$(document).ready(openStartPage());

// Open winner information page
var openLightbox = function() {
  $('.lightbox').css('display', 'block');
  $('.winCountOne').text(playerOneWinCounter);
  $('.winCountTwo').text(playerTwoWinCounter);
};

// Start second Round
var closeLightbox = function() {
  $('.lightbox').css('display', 'none');
  resetGame();
};
