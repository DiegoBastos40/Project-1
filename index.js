import Game from './game.js';

window.onload = () => {
  document.getElementById('start-button').addEventListener('click', () => {
    let container = document.querySelector('.hide-html');
    let showCanvas = document.querySelector('#game-board');
    let showScore = document.getElementById('score')
    container.style.display = 'none';
    showCanvas.style.display = 'block';
    showScore.style.display = 'block';
    startGame();
  });

  function startGame() {
    const game = new Game();
    game.start();
    
  }
};