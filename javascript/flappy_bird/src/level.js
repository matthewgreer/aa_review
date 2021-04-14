const LEVEL_CONSTANTS = {
  X_SPACING: 220,
  GAP: 150,
  PIPE_WIDTH: 30,
  PIPE_VELOCITY: 5
};

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [];
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  randomGapTop() {
    return Math.floor(Math.random() * (
      this.dimensions.height - LEVEL_CONSTANTS.GAP
    ));
  }

  spawnPipe() {
    const pipeXPos = LEVEL_CONSTANTS.X_SPACING + (
      this.pipes.length ?
      this.pipes[this.pipes.length - 1][0] :
      this.dimensions.width
    );
    const newPipe = [
      pipeXPos,
      this.randomGapTop()
    ];
    return this.pipes.push(newPipe);
  }
  
  movePipes() {
    if (this.pipes.length < 3) this.spawnPipe();
    if (this.pipes[0][0] <= LEVEL_CONSTANTS.PIPE_WIDTH * -1) this.pipes.shift();
    this.pipes.map(function(pipe) {
      return pipe[0] -= LEVEL_CONSTANTS.PIPE_VELOCITY;
    });
  }

  drawPipes(ctx) {
    const height = this.dimensions.height
    this.pipes.forEach(function(pipe) {
      ctx.save();
      ctx.translate(pipe[0], 0);
      // full-length pipe
      ctx.fillStyle='green';
      ctx.fillRect(0, 0, LEVEL_CONSTANTS.PIPE_WIDTH, height);
      // insert gap
      ctx.fillStyle='skyblue';
      ctx.fillRect(0, pipe[1], LEVEL_CONSTANTS.PIPE_WIDTH, LEVEL_CONSTANTS.GAP);
      ctx.restore();
    })
  }

  animate(ctx) {
    this.drawBackground(ctx);
    this.movePipes();
    return this.drawPipes(ctx);
  }
}