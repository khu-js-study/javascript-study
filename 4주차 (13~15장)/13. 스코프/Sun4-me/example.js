// var
// 변수를 한 번 더 선언했음에도 불구하고, 에러가 나오지 않고 각기 다른 값이 출력되는 것을 볼 수 있다.
var name = 'Sun'
console.log(name) // Sun

var name = 'Moon'
console.log(name) // Moon

// let
// 변수 재선언 불가능, 변수 재할당 가능
let name = 'Sun'
console.log(name) // Sun

let name = 'Moon'
console.log(name) // Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'Kim'
console.log(name) // Kim

// const
// 변수 재선언, 변수 재할당 모두 불가능하다.
const name = 'Sun'
console.log(name) // Sun

const name = 'Moon'
console.log(name) // Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'Kim'
console.log(name) // Uncaught TypeError: Assignment to constant variable.