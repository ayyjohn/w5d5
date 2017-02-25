document.addEventListener("DOMContentLoaded", function(event) {

  const GameView = require('./lib/game_view.js');

  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');


  let gameView = new GameView(c);

  gameView.start();
});
