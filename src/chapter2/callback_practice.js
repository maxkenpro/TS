//function that run callback function
//
function runCallback(callback) {
  console.log('run callback function');
  callback(1, 2);
}



const addNumbers = (num1, num2) => {
  let answer = num1 + num2;
  console.log(answer);
}
runCallback(addNumbers);
