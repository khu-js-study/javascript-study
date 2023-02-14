var name = "Lee";
var age = 21;

var person = {name, age,
sayHi() {
    console.log('Hi! ' + this.name)
}
}; // 프로퍼티 축약 표현, 메서드 축약 표현 (134p ~ 136p)

console.log(person); // -> { name: 'Lee', age: 21, sayHi: [Function: sayHi] }
person.sayHi() // -> Hi! Lee