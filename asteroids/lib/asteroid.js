const Util = require ("./utils.js");
const MovingObject = require("./moving_object.js");

// class Asteroid < MovingObject
class Asteroid extends MovingObject {
  constructor(hash) {
    super(hash);
    this.color = "#00AAFF";
    this.radius = 15;
    this.vel = Util.randomVec(1);
  }
}

// Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;
