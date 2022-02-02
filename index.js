import Game from './game.js';

 window.onload = () => {
  document.getElementById('start-button').addEventListener('click', () => {
    let container = document.querySelector('.hide-html');
    let showCanvas = document.querySelector('#game-board');
    let showScore = document.getElementById('score')
    container.style.display = 'none';
    showCanvas.style.display = 'block';
    showScore.style.display = 'block';
    
    startGame1();
  });
  document.getElementById('level1').addEventListener('click', () => {
    let container = document.querySelector('.hide-html');
    let showCanvas = document.querySelector('#game-board');
    let showScore = document.getElementById('score')
    container.style.display = 'none';
    showCanvas.style.display = 'block';
    showScore.style.display = 'block';
   
    
    startGame2();
  });
  document.getElementById('level2').addEventListener('click', () => {
    let container = document.querySelector('.hide-html');
    let showCanvas = document.querySelector('#game-board');
    let showScore = document.getElementById('score')
    container.style.display = 'none';
    showCanvas.style.display = 'block';
    showScore.style.display = 'block';
   
    
    startGame3();
  });
  
 function startGame1() {
    
    let game = new Game(5);
    game.start();
    
  }
  function startGame2() {
    
    let game = new Game(7);
    game.start();
    
  }
  function startGame3() {
    
    let game = new Game(9);
    game.start();
    
  } 
};
 