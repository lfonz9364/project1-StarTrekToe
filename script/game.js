console.log('game');

var playerOneScore = [];
var playerTwoScore = [];
var playerOneWinCounter = 0;
var playerTwoWinCounter = 0;
var roundNumber = 0;

  var clearNames = function() {
    $('.playerOne').val('');
    $('.playerTwo').val('');
    $('.categoryOne').val('');
    $('.categoryTwo').val('');
  };

  var resetScore = function() {
    playerOneScore = [];
    playerTwoScore = [];
  };

  var playerSelection = function(name1,name2){
    if ($('h2').attr('class') === 'playerOne') {
      $('h2').removeClass();
      $('h2').addClass('playerTwo');
      return $('h2').text(name2 + ' turn');
    } else if ($('h2').attr('class') === 'playerTwo'){
      $('h2').removeClass();
      $('h2').addClass('playerOne');
      return $('h2').text(name1 + ' turn');
    } else {
      $('h2').addClass('playerOne');
      return $('h2').text(name1 + ' turn');
    }
  };

  var playerWhoWin = function(score) {
    var x = 0;
    if (score.includes('00') && score.includes('01') && score.includes('02')){
       x = 1;
    } else if (score.includes('10') && score.includes('11') && score.includes('12')) {
      x = 1;
    } else if (score.includes('20') && score.includes('21') && score.includes('22')){
      x = 1;
    } else if (score.includes('20') && score.includes('11') && score.includes('02')) {
      x = 1;
    } else if (score.includes('00') && score.includes('11') && score.includes('22')) {
      x = 1;
    } else if (score.includes('00') && score.includes('10') && score.includes('20')) {
      x = 1;
    } else if (score.includes('01') && score.includes('11') && score.includes('21')) {
      x = 1;
    } else if (score.includes('02') && score.includes('12') && score.includes('22')) {
      x = 1;
    }
    return x;
  };

var selectCharacter = function(value) {
  if (value === '1') {
    return 'url(images/klingon_cruiser.jpg)';
  } else if (value === '2') {
    return 'url(images/borg_cube.jpg)';
  } else if (value === '3') {
    return 'url(images/romulan.jpg)';
  } else if (value === '4') {
    return 'url(images/vulcan.jpg)';
  }
}

  var startGame = function() {
    var playerOneName = $('.playerOne').val();
    var playerTwoName = $('.playerTwo').val();
    var playerOneSide = $('.categoryOne').val();
    var playerTwoSide = $('.categoryTwo').val();
    var playerOneAvatar = selectCharacter(playerOneSide);
    var playerTwoAvatar = selectCharacter(playerTwoSide);
    $('.playerOneName').text(playerOneName);
    $('.playerTwoName').text(playerTwoName);
    playerSelection(playerOneName,playerTwoName);

    $('.square').click(function(event) {
      var $target = $(event.target);
      var targetParent = $target.parent();
      var divIndex = $target.index();
      var divParentIndex = targetParent.index();
      var combIndex = String(divParentIndex) + String(divIndex);

      while ($target.css('backgroundImage') == 'none') {
        if ($('h2').attr('class') == 'playerOne') {
          playerOneScore.push(combIndex);
          $target.css({backgroundImage: playerOneAvatar});
        } else if ($('h2').attr('class') == 'playerTwo'){
          playerTwoScore.push(combIndex);
          $target.css({backgroundImage: playerTwoAvatar});
        }
        playerSelection(playerOneName,playerTwoName);
        if (playerOneScore.length > 2 || playerTwoScore.length > 2){
          if (playerWhoWin(playerOneScore) == 1 ) {
            winnerName = $("<h1 class='winnerName'>");
            winnerName.text(playerOneName);
            $('.lightboxContent').append(winnerName);
            playerOneWinCounter += 1;
            resetScore();
            return openLightbox();
          } else if (playerWhoWin(playerTwoScore) == 1) {
            winnerName = $("<h1 class='winnerName'>");
            winnerName.text(playerTwoName);
            $('.lightboxContent').append(winnerName);
            playerTwoWinCounter += 1;
            resetScore();
            return openLightbox();
          } else {
            
          }
        }
      }
  });
}

var openLightbox = function() {
  $('.lightbox').css('display', 'block');
  $('.winCountOne').text(playerOneWinCounter);
  $('.winCountTwo').text(playerTwoWinCounter);
};

var closeLightbox = function() {
  $('.lightbox').css('display', 'none');
  $('.winnerName').remove();
  resetGame();
};

var openStartPage = function() {
  $('.startPage').css('display', 'block');
};

var closeStartPage = function() {
  $('.startPage').css('display', 'none');
};

var resetGame = function() {
  roundNumber += 1;
  $('.square').css({backgroundImage: 'none'});
};

$(document).one('ready',openStartPage());
