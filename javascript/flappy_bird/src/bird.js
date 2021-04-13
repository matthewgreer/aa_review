export default class Bird {
  constructor(dimensions) {
    this.velocity = 0;
    this.dimensions = dimensions;
    this.xPos = dimensions.width / 3;
    this.yPos = dimensions.height / 2;

  }

  drawBird(ctx) {
    ctx.translate(this.xPos, this.yPos);
    ctx.fillStyle='yellow';
    ctx.fillRect(0, 0, 40, 30);
    ctx.fillStyle='orange';
    ctx.fillRect(40, 15, 15, 10);
    ctx.fillStyle='black';
    ctx.fillRect(30, 10, 5, 5)
  }

  animate(ctx) {
    this.drawBird(ctx);
  }

}