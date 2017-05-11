
// Check for empty input boxes on start
var inputValidation = function() {
  if(!$('.playerOne').val() || !$('.playerTwo').val() || !$('.categoryOne').val() || !$('.categoryTwo').val() || !$('.maxRound').val()){
    alert('Please complete all information');
  } else {
    closeStartPage();
    startGame();
  }
};

// Clear names on start page input boxes
var clearNames = function() {
  $('.playerOne').val('');
  $('.playerTwo').val('');
  $('.categoryOne').val('');
  $('.categoryTwo').val('');
};

// Change player turn
var playerSelection = function(name1, name2) {
  if ($('h2').attr('class') === 'playerOne') {
    $('h2').attr('class', 'playerTwo');
    return $('h2').text(name2 + ' turn');
  } else {
    $('h2').attr('class', 'playerOne');
    return $('h2').text(name1 + ' turn');
  }
};

// Check for winning conditions
var includeAll = function(indexCombination, playerArray) {
  for (var i = 0, len = indexCombination.length; i < len; i++) {
    if ($.inArray(indexCombination[i], playerArray) === -1) {
      return false;
    };
  };
  return true;
};

var playerWhoWin = function(score) {
  if (includeAll(['00', '01', '02'], score)) {
    return true;
  } else if (includeAll(['10', '11', '12'], score)) {
    return true;
  } else if (includeAll(['20', '21', '22'], score)) {
    return true;
  } else if (includeAll(['02', '11', '20'], score)) {
    return true;
  } else if (includeAll(['00', '11', '22'], score)) {
    return true;
  } else if (includeAll(['00', '10', '20'], score)) {
    return true;
  } else if (includeAll(['01', '11', '21'], score)) {
    return true;
  } else if (includeAll(['02', '12', '22'], score)) {
    return true;
  } else {
    return false;
  }
};

// Image selection for each player
var selectCharacter = function(value) {
  if (value === '1') {
    return 'url(images/klingon_cruiser.jpg)';
  } else if (value === '2') {
    return 'url(images/borg_cube.jpg)';
  } else if (value === '3') {
    return 'url(images/romulan.jpg)';
  } else if (value === '4') {
    return 'url(images/vulcan.jpg)';
  } else if (value === '5') {
    return 'url(images/klingon_2.jpg)';
  } else if (value === '6') {
    return 'url(images/borg_sphere.png)';
  } else if (value === '7') {
    return 'url(images/romulan_2.jpg)';
  } else {
    return 'url(images/vulcan_2.jpg)';
  }
};

var uniqueCharacter = function(playerOne, playerTwo) {
  if (playerOne === playerTwo) {
    playerTwo = +playerTwo + 4;
    return playerTwo.toString();
  } else {
    return playerTwo;
  }
};
