function sum(...nums) {
  return nums.reduce( (accumulator, number) => {
    return accumulator + number;
  }, 0);
}

console.log(sum(1, 2, 3, 4) === 10);
console.log(sum(1, 2, 3, 4, 5) === 15);

module.exports = sum;
