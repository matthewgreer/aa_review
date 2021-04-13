import Bird from './bird';
import Level from './level';

export default class Game {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }

  restart() {
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    return this.animate();
  }

  animate()  {
    this.level.animate(this.ctx);
    return this.bird.animate(this.ctx);
  }
  
}