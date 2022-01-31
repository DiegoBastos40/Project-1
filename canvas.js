//Canvas Settings

let canvas= document.getElementById('canvas');
let context = canvas.getContext('2d');

let window_height = 600;
let window_width = 800;

canvas.width = window_width;
canvas.height = window_height;

//canvas.style.background = '#bbf'
//Thing About Do
/* let imgSrcs = ['/unamed.png']

for (let i = 0; i< cards.length ; i++){
  this.cards.push(new Card(x, y, width, height, imgSrcs[i]))
} 
 */

class Rectangle {
    constructor(xpoint,ypoint,width,height){
        this.xpoint = xpoint ;
        this.ypoint = ypoint;
        this.width = width;
        this.height = height;
        this.background = new Image();

    }
     draw(context) {
        this.background.src = '/images/bulbasaur.png';
        this.background.onload = () => {
        context.drawImage(this.background, 0, 0, 90, 140);
       
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
