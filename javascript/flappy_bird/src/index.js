import Game from './game';

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('bird-game');
  const fb = new Game(canvas);
  return fb.restart();
} )