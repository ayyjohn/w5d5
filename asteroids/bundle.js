/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(1);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__ (3);
const MovingObject = __webpack_require__(2);

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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

let Game = __webpack_require__(0);

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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Function.prototype.inherits = function (ParentClass) {
//   function Filler() {}
//
//   Filler.prototype = ParentClass.prototype;
//   this.prototype = new Filler();
//   this.prototype.constructor = this;
//
// };

const Util = {
  inherits (childClass, parentClass) {
    function Filler(){}

    Filler.prototype = parentClass.prototype;
    childClass.prototype = new Filler();
    childClass.prototype.constructor = childClass;

  },

  // Return a randomly oriented vector with the given length.
  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  
  // Scale the length of a vector by the given amount.
  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener("DOMContentLoaded", function(event) {

  const GameView = __webpack_require__(5);

  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');


  let gameView = new GameView(c);

  gameView.start();
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__ (0);

class GameView{

  constructor(ctx){
    this.game = new Game();
    this.ctx = ctx;
  }

  start(){
    setInterval( () => {
      this.game.moveObjects();
      this.game.draw(this.ctx);
    }, 20);
  }

}

module.exports = GameView;


/***/ })
/******/ ]);