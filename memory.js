let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    
  
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
  }
  
  function unflipCards() {
    setTimeout(() => {
      firstCard;
      secondCard;
    }, 1500);
  }
  