
var playerOneWinCounter = 0;
var playerTwoWinCounter = 0;
var roundNumber = 1;
var playerOneScore;
var playerTwoScore;
var maxRound;

// Start a new game
  var startGame = function() {
    var playerOneName = $('.playerOne').val();
    var playerTwoName = $('.playerTwo').val();
    var playerOneSide = $('.categoryOne').val();
    var playerTwoSide = uniqueCharacter(playerOneSide, $('.categoryTwo').val());
    var playerOneAvatar = selectCharacter(playerOneSide);
    var playerTwoAvatar = selectCharacter(playerTwoSide);
    maxRound = Number($('.maxRound').val());
    playerOneScore = [];
    playerTwoScore = [];

    $('.playerOneName').text(playerOneName);
    $('.playerTwoName').text(playerTwoName);
    $('.roundNumber').text(roundNumber);

    $('.square').unbind().click(function(event) {
      event.preventDefault();
      var $target = $(event.target);
      var combIndex = $target[0].dataset.value;

      $target.off('click');

      playerSelection(playerOneName,playerTwoName);

      if ($('h2').attr('class') === 'playerOne') {
        playerOneScore.push(combIndex);
        $target.css({backgroundImage: playerOneAvatar});
      } else {
        playerTwoScore.push(combIndex);
        $target.css({backgroundImage: playerTwoAvatar});
      };

      if (playerWhoWin(playerOneScore)) {
        $('.winner').text(playerOneName);
        playerOneWinCounter += 1;
        return openLightbox();
      } else if (playerWhoWin(playerTwoScore)) {
        $('.winner').text(playerTwoName);
        playerTwoWinCounter += 1;
        return openLightbox();
      };
  });
};

// Reset game
var resetGame = function() {
  roundNumber += 1;
  $('.square').css({backgroundImage: ''});
  $('.winnerName').remove();
  $('h2').removeClass();

  while(roundNumber <= maxRound){
    return startGame();
  };

  location.reload();
};
