console.log('game');


var playerOneWinCounter;
var playerTwoWinCounter;
var playerOneScore = [];
var playerTwoScore = [];



  var clearNames = function() {
    $('input.playerOne').val('');
    $('input.playerTwo').val('');
  }

  var resetScore = function() {
    playerOneScore = [];
    playerTwoScore = [];
  }

  var playerSelection = function(name1,name2){
    if ($('h2').attr('class') === 'playerOne') {
      $('h2').removeClass();
      $('h2').addClass('playerTwo');
      $('h2').text(name2 + ' turn');
    } else if ($('h2').attr('class') === 'playerTwo'){
      $('h2').removeClass();
      $('h2').addClass('playerOne');
      $('h2').text(name1 + ' turn');
    } else {
      $('h2').addClass('playerOne');
      $('h2').text(name1 + ' turn');
    }
  }

  var playerWhoWin = function(score) {
    var winCondition = [['00','01','02'],['10','11','12'],['20','21','22'],
                        ['20','11','22'],['00','11','22'],['00','10','20'],
                        ['01','11','21'],['02','12','22']];
    var x = false;
    for (var i = 0; i < winCondition.length; i++){
      if (score.join('') === winCondition[i].join('')) {
        return x=true;
      }
    }
    return x;
  }

  var winOrLose = function(score1,score2,player1,player2) {
    if (playerWhoWin(score1) === true) {
      $('.winner').text(player1 + " is the winner");
      playerOneWinCounter += 1;
      return true;
    } else if(playerWhoWin(score2) === true) {
      $('.winner').text(player2 + " is the winner");
      playerTwoWinCounter += 1;
      return true;
    } else {
      if(score1.length > 2){
        playerOneScore.pop();
      } else if (score2.length > 2) {
        playerTwoScore.pop();
      }
      return false;
    }
  }

  var startGame = function() {
    var playerOneName = $('input.playerOne').val();
    var playerTwoName = $('input.playerTwo').val();
    var playerOneSide = $('input.playerTwo').val();
    var playerTwoSide = $('input.playerTwo').val();
    playerSelection(playerOneName,playerTwoName);

    $('div.square img').click(function(event) {
      var $target = $(event.target);
      var targetParent = $target.parent();
      var targetPop = targetParent.parent();
      var divIndex = String(targetParent.index());
      var divParentIndex = String(targetPop.index());
      var combIndex = divParentIndex + divIndex;
        debugger;
      if ($('h2').attr('class') == 'playerOne') {
        playerOneScore.push(combIndex);
        $target.attr('src', 'images/klingon_cruiser.jpg');
        playerOneScore.sort('');
      } else if ($('h2').attr('class') == 'playerTwo'){
        playerTwoScore.push(combIndex);
        $target.attr('src', 'images/borg_cube.jpg');
        playerTwoScore.sort('');
      }
      playerSelection(playerOneName,playerTwoName);
      if (playerOneScore.length > 2 || playerTwoScore.length > 2){
        if(winOrLose(playerOneScore,playerTwoScore,playerOneName,playerTwoName)) {
          return openLightbox();
        }
      }
      $target.off('click');
    });
  }

var openLightbox = function() {
  $('.lightbox').css('display', 'block');
}

var closeLightbox = function() {
  $('.lightbox').css('display', 'none');
  $('div.square img').attr('src', ' ');
  $('div.square img').on('click',startGame());
}

var openStartPage = function() {
  $('.startPage').css('display', 'block');
}

var closeStartPage = function() {
  $('.startPage').css('display', 'none');
}

$(document).one('ready',openStartPage());
