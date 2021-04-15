import Bird from './bird';
import Level from './level';

export default class Game {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.running = false;
  }

  restart() {
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.running = false;
    this.canvas.addEventListener("click", this.click.bind(this), false);
    return this.animate();
  }

  play() {
    this.running = true;
    return this.animate();
  }

  animate()  {
    console.log(this.level.collidesWith(this.bird.bounds()));
    console.log(this.running);
    if (this.level.collidesWith(this.bird.bounds) === true) {
      debugger
      this.running = false;
      return this.gameOver(this.ctx);
    } else {
      debugger
      this.level.animate(this.ctx);
      this.bird.animate(this.ctx);
      const self = this;
      requestAnimationFrame(function() {
        if (self.running === true) {
          return self.animate();
        }
      });
    }
  }

  gameOver(ctx) {
    debugger
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'red';
    ctx.fillText('GAME OVER', this.dimensions.width / 2, this.dimensions.height / 4);
    return this.restart();
  }

  click() {
    if (this.running === false) {
      this.play();
    }
    return this.bird.flap();
  }
  
}