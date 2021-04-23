const LEVEL_CONSTANTS = {
  X_SPACING: 400,
  GAP: 180,
  MAX_GAP_DIFF: 200,
  PIPE_WIDTH: 60,
  PIPE_VELOCITY: 3
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
    const gapTop = Math.floor(Math.random() * (
      this.dimensions.height - LEVEL_CONSTANTS.GAP
    ));
    if (this.pipes.length) {
      // limit difference in consecutive gap height
      const lastGapTop = this.pipes[this.pipes.length - 1][1];
      if (Math.abs(gapTop - lastGapTop) < LEVEL_CONSTANTS.MAX_GAP_DIFF) {
        return gapTop
      } else {
        // if not within 200px, pick another height
        return this.randomGapTop()
      } 
    } else {
      // if no pipes in array, 
      return gapTop;
    }
  }

  spawnPipe() {
    const pipeXPos = LEVEL_CONSTANTS.X_SPACING + LEVEL_CONSTANTS.PIPE_WIDTH + (
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

  collidesWith(bounds) {
    // test if bird has gone out of bounds
    const {bTop, bLeft, bRight, bBottom} = bounds;
    if (bTop < 0 || bBottom > this.dimensions.height) return true;
    let pipeCollision = false;
    this.pipes.forEach(function(pipe, index) {
      const [pLeft, pGapTop] = pipe;
      
      const pRight = pLeft + LEVEL_CONSTANTS.PIPE_WIDTH;
      const pGapBottom = pGapTop + LEVEL_CONSTANTS.GAP;
      if (pLeft <= bRight && pRight >= bLeft) {
        if (bTop <= pGapTop || bBottom >= pGapBottom) {
          pipeCollision = true;
        }
      }
    });
    return pipeCollision;
  }



  animate(ctx) {
    this.drawBackground(ctx);
    this.movePipes();
    return this.drawPipes(ctx);
  }
}