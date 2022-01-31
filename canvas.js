//Canvas Settings

let canvas= document.getElementById('canvas');
let context = canvas.getContext('2d');

let window_height = 600;
let window_width = 800;

canvas.width = window_width;
canvas.height = window_height;

//canvas.style.background = '#bbf'
//Thing About Do
let imgSrcs = ['/cards.js']

/*for (let i = 0; i< cards.length ; i++){
  this.cards.push(new Card(x, y, width, height, imgSrcs[i]))
} */
 

class Rectangle {
    constructor(xpoint,ypoint,width,height){
        this.xpoint = xpoint ;
        this.ypoint = ypoint;
        this.width = width;
        this.height = height;
        this.background = new Image();

    }
     draw(context) {
        this.background.src = '/unnamed.png';
        this.background.onload = () => {
       context.drawImage(this.background, 0, 0, 90, 140);
        context.drawImage(this.background, 100, 0, 90, 140);
        context.drawImage(this.background, 200, 0, 90, 140);
        context.drawImage(this.background, 300, 0, 90, 140);
        context.drawImage(this.background, 400, 0, 90, 140);
        context.drawImage(this.background, 500, 0, 90, 140);
        context.drawImage(this.background, 0, 150, 90, 140);
        context.drawImage(this.background, 100, 150, 90, 140);
        context.drawImage(this.background, 200, 150, 90, 140);
        context.drawImage(this.background, 300, 150, 90, 140);
        context.drawImage(this.background, 400, 150, 90, 140);
        context.drawImage(this.background, 500, 150, 90, 140);
        context.drawImage(this.background, 0,300, 90, 140);
        context.drawImage(this.background, 100, 300, 90, 140);
        context.drawImage(this.background, 200, 300, 90, 140);
        context.drawImage(this.background, 300, 300, 90, 140);
        context.drawImage(this.background, 400, 300, 90, 140);
        context.drawImage(this.background, 500, 300, 90, 140);
        context.drawImage(this.background, 0, 450, 90, 140);
        context.drawImage(this.background, 100, 450, 90, 140);
        context.drawImage(this.background, 200, 450, 90, 140);
        context.drawImage(this.background, 300, 450, 90, 140);
        context.drawImage(this.background, 400, 450, 90, 140);
        context.drawImage(this.background, 500, 450, 90, 140);

       
        }; 
       
  }

clickQuads(xmouse,ymouse){

  if((xmouse > firtRect.xpoint && xmouse < firtRect.width ) && (ymouse > firtRect.ypoint && ymouse < firtRect.height)) {
    console.log('true')
    return true;
  }
  else{
    console.log('outside');
    return false;
  } 
}
}
let firtRect = new Rectangle(0,0,90,140);
firtRect.draw(context);

canvas.addEventListener('click',(event)=>{
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left; 
  const y = event.clientY - rect.top; 
  firtRect.clickQuads(x, y)

  console.log(x, y);
});
