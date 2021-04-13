export default class Bird {
  constructor(dimensions) {
    this.velocity = 0;
    this.dimensions = dimensions;
    this.xPos = dimensions.width / 3;
    this.yPos = dimensions.height / 2;
    this.wingPos = 'up';
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

  drawWing(ctx){
    ctx.fillStyle='gold';
    ctx.strokeStyle='goldenrod';
    ctx.lineWidth='1';
    ctx.beginPath();
    if (this.wingPos === 'up') {
      ctx.moveTo(-10, 3);
      ctx.lineTo(0, 5);
      ctx.lineTo(20, 20);
      ctx.lineTo(-5, 18);
      ctx.lineTo(-10, 3);
    } else {
      ctx.moveTo(-10, 35);
      ctx.lineTo(0, 32);
      ctx.lineTo(20, 20);
      ctx.lineTo(-5, 20);
      ctx.lineTo(-10, 35);
    }
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }

  animate(ctx) {
    this.drawBird(ctx);
    this.drawWing(ctx); 
  }

  move() {
    this.yPos += this.velocity;
    this.velocity += 0.5; // gravity constant
  }

  flap() {
    this.velocity -= 8 // lift constant
    this.wingDown();
    setTimeout(this.wingUp(), 500);
  }

  wingDown() {
    return this.wingPos = 'down';
  }

  wingUp() {
    return this.wingPos = 'up';
  }

}