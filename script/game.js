console.log('game');

var playerOneName = $('input.playerOne').val();
var playerTwoName = $('input.playerTwo').val();
var playerOneSide = $('input.playerTwo').val();
var playerTwoSide = $('input.playerTwo').val();
var playerOneWinCounter = 0;
var playerTwoWinCounter = 0;
var roundNumber = 0;

  var clearNames = function() {
    $('input.playerOne').val('');
    $('input.playerTwo').val('');
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

  var clickEvent = function(event) {
    var playerOneScore = [];
    var playerTwoScore = [];
    var $target = $(event.target);
    var targetParent = $target.parent();
    var targetPop = targetParent.parent();
    var divIndex = targetParent.index();
    var divParentIndex = targetPop.index();
    var combIndex = String(divParentIndex) + String(divIndex);

    if ($('h2').attr('class') == 'playerOne') {
      playerOneScore.push(combIndex);
      $target.attr('src', 'images/klingon_cruiser.jpg');
    } else if ($('h2').attr('class') == 'playerTwo'){
      playerTwoScore.push(combIndex);
      $target.attr('src', 'images/borg_cube.jpg');
    }
    playerSelection(playerOneName,playerTwoName);
    if (playerOneScore.length > 2 || playerTwoScore.length > 2){
      if (playerWhoWin(playerOneScore) == 1 ) {
        $('.winner').text(playerOneName + " is the winner");
        playerOneWinCounter += 1;
        return openLightbox();
      } else if (playerWhoWin(playerTwoScore) == 1) {
        $('.winner').text(playerTwoName + " is the winner");
        playerTwoWinCounter += 1;
        return openLightbox();
      }
    }
    return $target.off('click');
  };

  var startGame = function() {
    $('.playerOneName').text(playerOneName);
    $('.playerTwoName').text(playerTwoName);
    playerSelection(playerOneName,playerTwoName);

    $('div.square img').click(clickEvent(event));
  };

var openLightbox = function() {
  $('.lightbox').css('display', 'block');
  $('.winCountOne').text(playerOneWinCounter);
  $('.winCountTwo').text(playerTwoWinCounter);
};

var closeLightbox = function() {
  $('.lightbox').css('display', 'none');
  resetGame();
};

var openStartPage = function() {
  $('.startPage').css('display', 'block');
};

var closeStartPage = function() {
  $('.startPage').css('display', 'none');
};

var resetGame = function() {
  debugger;
  sessionStorage.clear();
  localStorage.clear();
  roundNumber += 1;

  $('h2').removeClass();
  $('div.square img').attr('src', ' ');
  $('div.square img').on('click',clickEvent(event));
  startGame();
};

$(document).one('ready',openStartPage());
