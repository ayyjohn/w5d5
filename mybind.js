Function.prototype.myBind = function(object, ...args) {
  let innerArgs = args;

  return (...outerArgs) => {
    this.apply(object, innerArgs.concat(outerArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}
const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says.myBind(breakfast, "meow", "Colin")();

const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
