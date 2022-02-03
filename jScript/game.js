import Cards from './cards.js';
import Card from './card.js';
import { shuffleArray } from './helpers.js';

export default class Game {
  constructor(numberOfCards) {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.points = 0;
    this.selectedCards = [];
    this.cardsElement = [];
    this.currentPlay= [];
    this.correctPair = 0;
    this.wrongPair = 0;
    this.attempts = document.getElementById('attempt');
    this.over = document.getElementById('game-over');
     this.intervalID = ''; 
    this.numberOfCards = numberOfCards;
    this.sound1 = new Audio;
    this.sound1.src = './docs/assets/Audio/Breaking Through the Trap.mp3'
    this.sound2 = new Audio;
    this.sound2.src = './docs/assets/Audio/PokÃ©mon X and Y - Title Theme.mp3'
    this.sound3 = new Audio;
    this.sound3.src = './docs/assets/Audio/PokÃ©mon Pinball OST - Game Over.mp3'
  
 

  }
  start() {
   
    this.selectedCards = this.sortCards(this.numberOfCards);
    this.render();
    setTimeout(() => this.hideAllCards(), 2000);
    this.setEventListeners();
    this.sound1.play();
    this.sound1.loop = true;
   
  }
   stop() {
    clearInterval(this.intervalId);
  }
 
  
     handleClickEvent(x, y) {
      
    const card = this.cardsElement.find((card) => {
    return card.clicked(x, y);
    });
    if (card) {
      card.data.reveled = true;
      card.update(card.data);
      //this.currentPlay.push(card.data);
      console.log(this.currentPlay);
      
      if(this.currentPlay.length === 1){
        if(card.id !== this.currentPlay[0].id){
          this.currentPlay.push(card.data);
        }}
        else if (this.currentPlay.length === 0){
          this.currentPlay.push(card.data);
          
        }

     if(this.currentPlay.length === 2){
       
        let firstClick =  this.currentPlay[0];
        let secondClick = this.currentPlay[1];
         let notFound = (this.selectedCards.find( ({ reveled }) => reveled === false ))
        if(!notFound){
          alert('WON THE GAME');
          this.sound1.pause();
          this.sound2.play();
          this.sound2.loop = true;
        
        
          
        
         
         

        
          }
   if(firstClick.name === secondClick.name && secondClick.id !== firstClick.id){
        
          this.currentPlay.splice(0,2);
          this.correctPair++;
         
        
          console.log(this.correctPair);
          //console.log(this.selectedCards);
         }
         
         else {
          setTimeout(() => this.hideAllCards(), 500)
        
        this.currentPlay.splice(0,2)
        this.wrongPair++;
        this.attempts.innerHTML = (6-this.wrongPair);
        if(this.wrongPair >= 6){
          alert('Game Over');
          this.sound1.pause();
          this.sound3.play();
          this.sound3.loop = true;
          



                    
          document.getElementById('canvas').remove(); 
          
        }
        console.log(this.wrongPair);
        console.log('errou');
        }
      }
        

       }
       
   }
 
 
  setEventListeners() {
    this.canvas.addEventListener('click', (event) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      this.handleClickEvent(x, y);
    });
  }
  hideAllCards() {
    this.selectedCards.forEach((card) => {
      card.reveled = false;
    });
    this.refresh();
  }
  
  sortCards(limit = 5) {
    let cards = [];
    while (cards.length < limit) {
      const random = Math.floor(Math.random() * Cards.length);
      if (cards.findIndex((card) => card.name === Cards[random].name) === -1) {
        const card = Object.assign({}, Cards[random]);
        card.reveled = true;
        cards.push(card);
      }
    }

    return shuffleArray(
      cards.concat(cards).map((card, index) => Object.assign({}, card, { id: index })),
    );
  }
  drawBackground() {
    this.ctx.drawImage(backgroundElement, 0, 0, 800, 600);
  }
  stop() {
    clearInterval(this.intervalId);
  }
  refresh() {
    this.cardsElement.forEach((card) => {
      card.draw();
    });
  }
  render() {
    const totalCards = this.selectedCards.length;
    
   let cardWidth = 110;
   let cardHeight = 180; 
  let offSetPadding = 8;

    const startDrawingX =
      this.canvas.offsetWidth / 2 -
      (cardWidth * (totalCards / 2) + offSetPadding * (totalCards / 2 - 1)) / 2;
    const startDrawingY =
      this.canvas.offsetHeight / 2 - (cardHeight * 2 + offSetPadding) / 2;

    let nextStartPointX = startDrawingX;
    let nextStartPointY = startDrawingY;

    this.selectedCards.forEach((card, index) => {
      const select = new Card(
        this.ctx,
        card,
        nextStartPointX,
        nextStartPointY,
        cardWidth,
        cardHeight,
      );
      select.draw();
      this.cardsElement.push(select);

      nextStartPointX = nextStartPointX + cardWidth + offSetPadding;
      if (this.selectedCards.length / 2 === index + 1) {
        nextStartPointY = nextStartPointY + cardHeight + offSetPadding;
        nextStartPointX = startDrawingX;
      }
    });    
  }
 
  
}