function add(num1: number, num2: number): number {
  return num1 + num2
}

function sayHello() {
  console.log("Hello");
}

const anotherAdd: (n1: number, n2: number) => number = add;
const anotherAdd2: (n1: number, n2: number) => number = function (num1: number, num2: number): number {
  return num1 + num2
}

//arrow function

const doubleNumber = (number: number) => number * 2;
const doubleNumber2: (num: number) => number = num => num * 2;
