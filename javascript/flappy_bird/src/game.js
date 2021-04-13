import Level from './level';

export default class Game {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };

    
  }

  restart() {
    this.level = new Level(this.dimensions);
    return this.animate();
  }

  animate()  {
    return this.level.animate(this.ctx);
  }
  
}