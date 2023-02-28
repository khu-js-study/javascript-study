// 생성자 함수
function FPerson(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = () => {
    return `Hello, ${this.name}`;
  };
}

const surimF = new FPerson("surim", 100);
console.log(surimF);
console.log(surimF.sayHello());

// 클래스 ES6
class CPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, ${this.name}`;
  }
}

const surimC = new CPerson("surim", 100);
console.log(surimC);
console.log(surimC.sayHello());
