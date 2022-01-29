class Game {
    constructor() {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.background = new Image();
      this.cardsImage = new Image(); 
      this.cardsImage2= new Image(); 
      this.cardsImage3= new Image(); 
      this.cardsImage4= new Image(); 
      this.cardsImage5= new Image(); 
      this.cardsImage6= new Image(); 
      this.cardsImage7= new Image(); 
      this.cardsImage8= new Image();
       this.cardsImage9= new Image();
        this.cardsImage10= new Image(); 
        this.cardsImage11= new Image();
         this.cardsImage12= new Image();
      this.frames = 0;
      this.x = 0;
      this.y = 0;
      this.canvasWidth = 600;
      this.canvasHeight = 600;
      this.intervalId = null;
      this.revealed = false;
    }
    start(){
      this.intervalId = setInterval(() => {
        this.update();
      }, 1500);
    }
    update(){
    this.drawBackground();
    this.drawCardsImage();
    }
    drawBackground(){
      this.background.src = '/unnamed.png';
      this.ctx.drawImage(this.background,0, 0, 90, 140);
      this.ctx.drawImage(this.background,100, 0, 90, 140);
      this.ctx.drawImage(this.background,200, 0, 90, 140);
      this.ctx.drawImage(this.background,300, 0, 90, 140);
      this.ctx.drawImage(this.background,400, 0, 90, 140);
      this.ctx.drawImage(this.background,500, 0, 90, 140);
      this.ctx.drawImage(this.background,0, 150, 90, 140);
      this.ctx.drawImage(this.background,100, 150, 90, 140);
      this.ctx.drawImage(this.background,200, 150, 90, 140);
      this.ctx.drawImage(this.background,300, 150, 90, 140);
      this.ctx.drawImage(this.background,400, 150, 90, 140);
      this.ctx.drawImage(this.background,500, 150, 90, 140);
      this.ctx.drawImage(this.background,0, 300, 90, 140);
      this.ctx.drawImage(this.background,100, 300, 90, 140);
      this.ctx.drawImage(this.background,200, 300, 90, 140);
      this.ctx.drawImage(this.background,300, 300, 90, 140);
      this.ctx.drawImage(this.background,400, 300, 90, 140);
      this.ctx.drawImage(this.background,500, 300, 90, 140);
      this.ctx.drawImage(this.background,0,450, 90, 140);
      this.ctx.drawImage(this.background,100, 450, 90, 140);
      this.ctx.drawImage(this.background,200, 450, 90, 140);
      this.ctx.drawImage(this.background,300, 450, 90, 140);
      this.ctx.drawImage(this.background,400, 450, 90, 140);
      this.ctx.drawImage(this.background,500, 450, 90, 140);
      
      
    }
    
    drawCardsImage(){
      this.cardsImage.src = '/images/bulbasaur.png';
      this.ctx.drawImage(this.cardsImage,0, 0, 90, 140);
      this.ctx.drawImage(this.cardsImage,100, 0, 90, 140);
      this.cardsImage3.src = '/images/butterfree.png';
      this.ctx.drawImage(this.cardsImage3,200, 0, 90, 140);
      this.ctx.drawImage(this.cardsImage3,300, 0, 90, 140);
      this.cardsImage4.src = '/images/caterpie.png';
      this.ctx.drawImage(this.cardsImage4,400, 0, 90, 140);
      this.ctx.drawImage(this.cardsImage4,500, 0, 90, 140);
      this.cardsImage5.src = '/images/chansey.png';
      this.ctx.drawImage(this.cardsImage5,0, 150, 90, 140);
      this.ctx.drawImage(this.cardsImage5,100, 150, 90, 140);
      this.cardsImage6.src = '/images/charizard.png';
      this.ctx.drawImage(this.cardsImage6,200, 150, 90, 140);
      this.ctx.drawImage(this.cardsImage6,300, 150, 90, 140);
      this.cardsImage7.src = '/images/charmander.png';
      this.ctx.drawImage(this.cardsImage7,400, 150, 90, 140);
      this.ctx.drawImage(this.cardsImage7,500, 150, 90, 140);
      this.cardsImage8.src = '/images/charmeleon.png';
      this.ctx.drawImage(this.cardsImage8,0, 300, 90, 140);
      this.ctx.drawImage(this.cardsImage8,100, 300, 90, 140);
      this.cardsImage9.src = '/images/clefairy.png';
      this.ctx.drawImage(this.cardsImage9,200, 300, 90, 140);
      this.ctx.drawImage(this.cardsImage9,300, 300, 90, 140);
      this.cardsImage10.src = '/images/cloyster.png';
      this.ctx.drawImage(this.cardsImage10,400, 300, 90, 140);
      this.ctx.drawImage(this.cardsImage10,500, 300, 90, 140);
      this.cardsImage11.src = '/images/cubone.png';
     this.ctx.drawImage(this.cardsImage11,0,450, 90, 140);
      this.ctx.drawImage(this.cardsImage11,100, 450, 90, 140);
      this.cardsImage12.src = '/images/dewgong.png';
      this.ctx.drawImage(this.cardsImage12,200, 450, 90, 140);
      this.ctx.drawImage(this.cardsImage12,300, 450, 90, 140);
      this.cardsImage2.src = '/images/diglett.png';
      this.ctx.drawImage(this.cardsImage2,400, 450, 90, 140);
      this.ctx.drawImage(this.cardsImage2,500, 450, 90, 140);
   



     /* this.cardsImage.src='/images';
      this.cardsImage.onload = function(){
      this.ctx.drawImage(this.cardsImage,imagePos[i][0],imagePos[i][1], 90, 140);
      }
      let imagePos=[[0,0],[100,0],[200,0],[300,0],[400,0],[500,0],
      [0,150],[100,150],[200,150],[300,150],[400,150],[500,150],
      [0,300],[100,300],[200,300],[300,300],[400,300],[500,300]
      [0,450],[100,450],[200,450],[300,450],[400,450],[500,450] ]; 
      
      for(let i = 0 ; i<24;i++){
        drawCardsImage(i)
      }*/
    }
   

        
  }