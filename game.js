class Game {
    constructor() {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.background = new Image();
      this.cardsImage = new Image();
      this.frames = 0;
      this.x = 0;
      this.y = 0;
      this.canvasWidth = 600;
      this.canvasHeight = 600;
      this.intervalId = null;
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
    
    drawCardsImage(i){
      this.cardsImage.src='/images/bulbasaur.png';
      this.cardsImage.onload = function(){
      this.ctx.drawImage(this.cardsImage,imagePos[i][0],imagePos[i][1], 90, 140);
      }
      let imagePos=[[0,0],[100,0],[200,0],[300,0],[400,0],[500,0] ]; 
      
      for(let i = 0 ; i <12;i +=1){
        drawCardsImage(i)
      }
    }
   
        
  }