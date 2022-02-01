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
    }

    /* 
      -> se não estiver nenhuma carta guardada, quer dizer que foi o primeiro click
        -> guarda a carta clicada
      -> se já existir uma carta guardada, quer dizer que é o segundo click
       -> comparar as duas
        -> se forem iguais, remover as cartas e dar pontuação
      -> se forem diferentes, esconder as cartas de novo

      -> só permitir o click quando o jogo tiver pronto para jogar;
    */
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
      cards
        .concat(cards)
        .map((card, index) => Object.assign({}, card, { id: index })),
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
      const c = new Card(
        this.ctx,
        card,
        nextStartPointX,
        nextStartPointY,
        cardWidth,
        cardHeight,
      );
      c.draw();
      this.cardsElement.push(c);

      nextStartPointX = nextStartPointX + cardWidth + offSetPadding;
      if (this.selectedCards.length / 2 === index + 1) {
        nextStartPointY = nextStartPointY + cardHeight + offSetPadding;
        nextStartPointX = startDrawingX;
      }
    });
    console.log(this.cardsElement);
  }
}
