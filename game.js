class Game {
    constructor() {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.car = null;
      this.obstacles = [];
      this.background = new Image();
      this.frames = 0;
      this.x = 0;
      this.y = 0;
      this.canvasWidth = 600;
      this.canvasHeight = 600;
      this.intervalId = null;
    }
}