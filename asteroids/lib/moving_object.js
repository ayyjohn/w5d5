let Game = require('./game.js');

class MovingObject {
    constructor(hash) {
      this.pos = hash.pos;
      this.vel = hash.vel;
      this.radius = hash.radius;
      this.color = hash.color;
      this.game = hash.game;
    }

    draw(ctx){
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
      ctx.fill();
    }

    move(){


      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];

      this.pos[0] = this.game.wrap(this.pos[0]);
      this.pos[1] = this.game.wrap(this.pos[1]);
    }
}

// var canvas = document.getElementById('canvas');
// var c = canvas.getContext('2d');
//
// const mo = new MovingObject(
//   { pos: [100, 100], vel: [10, 10], radius: 30, color: "#00AAFF"}
// );
//
// mo.draw(c);

module.exports = MovingObject;
