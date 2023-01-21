/**
 * @desc
 * var은 선언 이후 undefined로 초기화 된다.
 * let, const는 선언 이후 메모리 공간만 할당될 뿐 초기화 되지 않는다.
 * 함수 선언문은 선언 이후 참조와 초기화가 동시에 일어난다.
 * var로 선언한 함수 표현식은 선언 이후 undefined로 초기화 된다.
 *
 * @see {@link https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html}
 * @author L2HYUNN <donghyuni98@gmail.com>
 */

console.log(test); // undefined -> Hoisting
console.log(test2); // ReferenceError: Cannot access 'test2' before initialization
console.log(test3); // ReferenceError: Cannot access 'test3' before initialization
example(); // example -> Hoisting
example2(); // TypeError: example2 is not a function

var test = "test";
let test2 = "test2";
const test3 = "test3";

function example() {
  console.log("example");
}

var example2 = function () {
  console.log("example2");
};
