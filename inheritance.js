Function.prototype.inherits = function (parent) {
  function Surrogate() {}

  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;

};

function MovingObject () {}

MovingObject.prototype.explode = function() {
  console.log("***BOOM***");
};

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);


let ship = new Ship();
ship.explode();
let aster = new Asteroid();
aster.explode();
