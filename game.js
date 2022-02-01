import Cards from './cards.js';
import Card from './card.js';
import { shuffleArray } from './helpers.js';

export default class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.points = 0;
    this.selectedCards = [];
    this.cardsElement = [];
    this.currentPlay= [];
    this.correctPair = 0;

  }
  start() {
    
    this.selectedCards = this.sortCards();
    this.render();
    setTimeout(() => this.hideAllCards(), 1500);
    this.setEventListeners();
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
        if(firstClick.name === secondClick.name && secondClick.id !== firstClick.id){
        
          this.currentPlay.splice(0,2);
          this.correctPair++;
          console.log(this.correctPair);
          console.log('acertou');
         }
         else {
          setTimeout(() => this.hideAllCards(), 500)
        console.log('errou');
        this.currentPlay.splice(0,2)
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
  refresh() {
    this.cardsElement.forEach((card) => {
      card.draw();
    });
  }
  render() {
    const totalCards = this.selectedCards.length;
    const cardWidth = 130;
    const cardHeight = 180;
    const offSetPadding = 20;

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

