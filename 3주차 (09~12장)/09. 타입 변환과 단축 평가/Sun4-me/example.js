// Object.prototype.toString 메서드를 사용하는 방법

// 숫자 타입 => 문자열 타입
(1).toString(); // "1"
(NaN).toString(); // "NaN"
(Infinity).toString(); // "Infinity"
// 불리언 타입 => 문자열 타입
(true).toString(); // "true"
(false).toString(); // "false"

// parselnt, parseFloat 함수를 사용하는 방법（문자열만 변환 가능）
// 문자열 타입 => 숫자 타입
parselnt('0'); // 0
parselnt('-1'); // -1
parseFloat('10.53'); // 10.53