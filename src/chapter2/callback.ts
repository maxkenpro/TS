function runCallback (callback: (num: number) => void): void {
  console.log('I call callbackfunction');
  callback(3);
}

const dubleNumber: (num: number) => void = (num) => {
  const answer: number = num * 2
  console.log(answer);
}

runCallback(dubleNumber);
