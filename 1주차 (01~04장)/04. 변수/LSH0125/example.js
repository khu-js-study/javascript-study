console.log(variable); 
// 1. ReferenceError(참조 에러)가 발생하지 않은 이유 -> 호이스팅
// 2. undefined이 출력되는 이유 -> 변수 선언과 동시에 초기화

var variable = "var1";
variable = "var2" // 값의 재할당

console.log(variable); // line1과 출력값의 차이 이유? -> 변수 선언과 할당의 시점이 다르다.