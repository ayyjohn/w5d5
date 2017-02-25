const Asteroid = require("./asteroid.js");

class Game {

  constructor(){
    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.NUM_ASTEROIDS = 20;
    this.asteroids = [];
    this.addAsteroids();
  }

  addAsteroids() {
    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
      this.asteroids.push(
        new Asteroid(
          {pos: this.randomPosition(), game: this}
        ));
    }
  }

  randomPosition() {
    let x = Math.floor(Math.random() * this.DIM_X);
    let y = Math.floor(Math.random() * this.DIM_Y);
    return [x, y];
  }

  draw(ctx) {
    let that = this;
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    this.asteroids.forEach((aster) => aster.draw(ctx));
  }

  moveObjects() {
    this.asteroids.forEach((aster) => {
      aster.move();
    });
  }

  wrap(pos){
    if (pos > this.DIM_X){
      pos = 0;
    } else if(pos < 0){
      pos = 500;
    }
    return pos;
  }
}

module.exports = Game;
