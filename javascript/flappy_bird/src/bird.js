
const CONSTANTS = {
  GRAVITY: 0.5,
  FLAP_LIFT: -8,
  TERMINAL_VEL: 10,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 30
}
export default class Bird {
  constructor(dimensions) {
    this.velocity = 0;
    this.dimensions = dimensions;
    this.xPos = dimensions.width / 3;
    this.yPos = dimensions.height / 2;
    // this.wingPos = 'up';
  }

  drawBird(ctx) {
    ctx.save();
    // body
    ctx.translate(this.xPos, this.yPos);
    ctx.fillStyle='yellow';
    ctx.fillRect(0, 0, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
    // beak
    ctx.fillStyle='orange';
    ctx.beginPath()
    ctx.moveTo(CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT * .4);
    ctx.lineTo(CONSTANTS.BIRD_WIDTH * 1.375, CONSTANTS.BIRD_HEIGHT * .67);
    ctx.lineTo(CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT * .83);
    ctx.closePath();
    ctx.fill();
    // eye
    ctx.fillStyle='black';
    ctx.beginPath();
    ctx.arc(
      CONSTANTS.BIRD_WIDTH * .75, 
      CONSTANTS.BIRD_HEIGHT * .33, 
      CONSTANTS.BIRD_WIDTH * .05,
      0,
      2 * Math.PI
    );
    ctx.fill();
    ctx.closePath();
    this.drawWing(ctx); 
    ctx.restore();
  }

  drawWing(ctx){
    ctx.fillStyle='gold';
    ctx.strokeStyle='goldenrod';
    ctx.shadowColor='gray';
    ctx.shadowBlur=3;
    ctx.shadowOffsetX=3;
    ctx.shadowOffsetY=3;    
    ctx.lineWidth='1';
    ctx.beginPath();
    if (this.wingPos === 'up') {
      ctx.moveTo(CONSTANTS.BIRD_WIDTH * -.25, CONSTANTS.BIRD_HEIGHT * .1);
      ctx.lineTo(0, CONSTANTS.BIRD_HEIGHT * .17);
      ctx.lineTo(CONSTANTS.BIRD_WIDTH * .5, CONSTANTS.BIRD_HEIGHT * .67);
      ctx.lineTo(CONSTANTS.BIRD_WIDTH * -.13, CONSTANTS.BIRD_HEIGHT * .6);
      ctx.lineTo(CONSTANTS.BIRD_WIDTH * -.25, CONSTANTS.BIRD_HEIGHT * .1);
    } else {
      ctx.shadowOffsetY=0;
      ctx.moveTo(CONSTANTS.BIRD_WIDTH * -0.13, CONSTANTS.BIRD_HEIGHT * 1.17);
      ctx.lineTo(0, CONSTANTS.BIRD_HEIGHT * 1.27);
      ctx.lineTo(CONSTANTS.BIRD_WIDTH * .5, CONSTANTS.BIRD_HEIGHT * .67);
      ctx.lineTo(CONSTANTS.BIRD_WIDTH * -0.05, CONSTANTS.BIRD_HEIGHT * 0.67);
      ctx.lineTo(CONSTANTS.BIRD_WIDTH * -.13, CONSTANTS.BIRD_HEIGHT * 1.17);
    }
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }

  animate(ctx) {
    this.move();
    this.drawBird(ctx);
  }

  move() {
    if (this.velocity > 12) this.velocity = 12;
    this.yPos += this.velocity;
    this.velocity += CONSTANTS.GRAVITY
  }

  flap() {
    this.wingDown();
    setTimeout(this.wingUp.bind(this), 100);
    return this.velocity += CONSTANTS.FLAP_LIFT
  }

  wingDown() {
    return this.wingPos = 'down';
  }

  wingUp() {
    return this.wingPos = 'up';
  }

}