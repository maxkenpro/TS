class Person {
  name: string; //プロパティをダイレクトに書く
  constructor(initName: string) {  //予約語
    this.name = initName; 
  }

  greeting() {
    console.log(`Hello ${this.name}`);
  }
}

const Anakin = new Person('Anakin');
Anakin.greeting();

const anotherName = {
  
}
