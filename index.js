import Game from './game.js';

window.onload = () => {
  document.getElementById('start-button').addEventListener('click', () => {
    let container = document.querySelector('.hide-html');
    let showCanvas = document.querySelector('#game-board');
    container.style.display = 'none';
    showCanvas.style.display = 'block';
    startGame();
  });

  function startGame() {
    const game = new Game();
    game.start();
  }
};
