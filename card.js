export class Card {
  constructor(url, xPoint = 0, yPoint = 0, width = 100, height = 130) {
    this.url = url;
    this.xPoint = xPoint;
    this.yPoint = yPoint;
    this.width = width;
    this.height = height;
  }

  draw(context) {
    const image = new Image();
    image.src = this.url;
    image.onload = () => {
      context.drawImage(
        image,
        this.xPoint,
        this.yPoint,
        this.width,
        this.height,
      );
    };
  }
}
