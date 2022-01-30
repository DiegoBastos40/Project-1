const cards = [
    { name:'bulbasur' , img:'/images/bulbasaur.png'},
    { name:'butterfree' , img:'/images/butterfree.png'},
    { name:'caterpie' , img:'/images/caterpie.png'},
    { name:'chansey' , img:'/images/chansey.png'},
    { name:'charizard' , img:'/images/charizard.png'},
    { name:'charmander' , img:'/images/charmander.png'},
    { name:'charmeleon' , img:'/images/charmeleon.png'},
    { name:'clefairy' , img:'/images/clefairy.png'},
    { name:'cloyster' , img:'/images/cloyster.png'},
    { name:'cubone' , img:'/images/cubone.png'},
     { name:'dewgong' , img:'/images/dewgong.png'},
    { name:'diglett' , img:'/images/diglett.png'},
    { name:'bulbasur' , img:'/images/bulbasaur.png'},
    { name:'butterfree' , img:'/images/butterfree.png'},
    { name:'caterpie' , img:'/images/caterpie.png'},
    { name:'chansey' , img:'/images/chansey.png'},
    { name:'charizard' , img:'/images/charizard.png'},
    { name:'charmander' , img:'/images/charmander.png'},
    { name:'charmeleon' , img:'/images/charmeleon.png'},
    { name:'clefairy' , img:'/images/clefairy.png'},
    { name:'cloyster' , img:'/images/cloyster.png'},
    { name:'cubone' , img:'/images/cubone.png'},
     { name:'dewgong' , img:'/images/dewgong.png'},
    { name:'diglett' , img:'/images/diglett.png'}]

let hasFlippedCard = false;
let firstCard, secondCard;

let lockBoard = false;
function flipCard() {
    if (lockBoard) return;
  
    if (!hasFlippedCard) {
    
      hasFlippedCard = true;
      firstCard = this;
  
      return;
    }
  
 
    hasFlippedCard = false;
    secondCard = this;
  
    checkForMatch();
  }
  
  function checkForMatch() {
    let isMatch = firstCard === secondCard ;
    
    if(isMatch){
        disableCards();
  }  
  else{
    unflipCards();
  }
  }
  
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
  }
  
  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard;
      secondCard;
      resetBoard();
    }, 1500);
  }
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
  
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
})();

  canvas.addEventListener('click', drawBackground(), false);
  canvas.addEventListener('click', drawCardsImage(), false);
