// typeof 연산자로 null 값을 연산해 보면 "null"이 아닌 "object"를 반환에 주의
// 따라서 값이 null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===) 사용

var foo = null;

typeof foo === null; // -> false
foo === null; // -> true

// 또한 선언하지 않은 식별자를 typeof 연산자로 연산하면 ReferenceError가 발생하지 않고 underfined를 반환한다.

typeof underclared; // -> underfined