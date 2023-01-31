console.log(tmpNum); // undefined
console.log(tmpNum1); // ReferenceError: Cannot access 'tmpNum1' before initialization

var tmpNum; // 변수 선언 (런타임 이전에 실행)
tmpNum = 1; // 값의 할당 (런타임에 실행)

tmpNum = 2; // 값의 재할당

console.log(tmpNum); // 2 (undefined -> 1 -> 2 [Hoisting])

// 카멜 케이스(camelCase) : 일반적으로 변수나 함수 이름
var firstName;

// 파스칼 케이스(PacalCase) : 일반적으로 생성자 함수, 클래스 이름
var FirstName;