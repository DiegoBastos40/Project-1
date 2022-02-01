 const cardBackground = new Image();
cardBackground.src = './unnamed.png';

export default class Card {
  constructor(
    context,
    data,
    xPoint = 0,
    yPoint = 0,
    width = 100,
    height = 130,
  ) {
    this.context = context;
    this.data = data;
    this.xPoint = xPoint;
    this.yPoint = yPoint;
    this.width = width;
    this.height = height;
    
  }

  draw() {
    if (this.data.reveled) {
      this.context.drawImage(
        cardBackground,
        this.xPoint,
        this.yPoint,
        this.width,
        this.height,
      );
      const image = new Image();
      image.src = this.data.img;
      image.onload = () => {
        this.context.drawImage(
          image,
          this.xPoint,
          this.yPoint,
          this.width,
          this.height,
        );
      };
    } else {
      this.context.drawImage(
        cardBackground,
        this.xPoint,
        this.yPoint,
        this.width,
        this.height,
      );
    }
  }

  update(data) {
    this.data = data;
    this.draw();
    
  }
  clicked(x, y) {
    if (
      x > this.xPoint &&
      x < this.xPoint + this.width &&
      y > this.yPoint &&
      y < this.yPoint + this.height
    ) {
       return true;
    }
    return false;
  }
}