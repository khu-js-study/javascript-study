// 변수 호이스팅

// var
// 변수 선언문 이전에 변수를 참조하면 언제나 undefined를 반환한다

console.log(name); // undefined

var name = 'Sun';
console.log(name); // 'Sun'


// let
// let 키워드로 선언한 변수는 선언 단계와 초기화 단계가 분리되어 진행된다. 
// 즉, 런타임 이전에 자바스크립트 엔진에 의해 선언 단계가 먼저 실행되지만, 초기화 단계가 실행되지 않았을 때 해당 변수에 접근하려고 하면 참조 에러가 뜬다.

console.log(name); // output: Uncaught ReferenceError: name is not defined

let name = 'Sun';

// const
// const 키워드는 선언 단계와 초기화 단계가 동시에 진행된다.

console.log(name); // output: Uncaught ReferenceError: Cannot access 'name' before initialization

const name = 'Sun';

// let 키워드로 선언한 경우, 런타임 이전에 선언이 되어 자바스크립트 엔진에 이미 존재하지만 초기화가 되지 않았기 때문에 name is not defined라는 문구가 떴다.
// 하지만 const 키워드로 선언한 경우, 선언과 초기화가 동시에 이루어져야 하지만 런타임 이전에는 실행될 수 없다. 
// 따라서 초기화가 진행되지 않은 상태이기 때문에 Cannot access 'name' before initialization 에러 문구가 뜬다.