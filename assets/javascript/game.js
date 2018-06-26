// Here we are provided an initial array of krystals.
// Use this array to dynamically create buttons on the screen.
var blue = Math.floor(Math.random() * 9) + 1;
var red = Math.floor(Math.random() * 9) + 1;
var green = Math.floor(Math.random() * 9) + 1;
var yellow = Math.floor(Math.random() * 9) + 1;
var krystals = [blue, red, green, yellow];
var score = 0;
var number = Math.floor(Math.random() * 50) + 10;
var wins = 0;
var loss = 0;

$(document).ready(function() {
  // $('#display').html(score);
  // $('#number').html(number);
  // for (i = 0; i < krystals.length; i++) {
  //   currentBtn = '#krystal-' + i;
  //   $(currentBtn).attr('value', krystals[i]);
  // }
  function reset() {
    score = 0;
    number = Math.floor(Math.random() * 50) + 10;
    blue = Math.floor(Math.random() * 9) + 1;
    red = Math.floor(Math.random() * 9) + 1;
    green = Math.floor(Math.random() * 9) + 1;
    yellow = Math.floor(Math.random() * 9) + 1;
    for (i = 0; i < krystals.length; i++) {
      currentBtn = '#krystal-' + i;
      $(currentBtn).attr('value', krystals[i]);
    }
    $('#number').html(number);
    $('#display').html(score);
    $('#loss').html(loss);
    $('#wins').html(wins);
  }
  reset();
  $('.letter-button').on('click', function() {
    score += parseInt($(this).attr('value'));
    if (score === number) {
      alert('you win!');
      wins++;
      reset();
    } else if (score > number) {
      alert('you lost!');
      loss++;
      reset();
    } else {
      $('#display').html(score);
    }
  });

  $('#clear').on('click', function() {
    $('#display').html(0);
    score = 0;
  });

  $('#reset').on('click', function() {
    reset();
  });
});
