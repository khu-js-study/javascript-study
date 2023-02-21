/**
 * @description
 * 함수형 프로그래밍은 순수함수(pure function) 로 구성됩니다.
 * 함수가 순수(purity) 하다는 것은 다음의 특징을 가졌다는 것을 의미합니다.
 *
 * 1. 주어진 입력에만 의존할 뿐, 평가 도중 또는 호출 간 변경될 수 있는 숨겨진 값이나 외부 상태와 무관하게 동작
 * 2. 전역 객체나 레퍼런스로 전달된 매개변수를 수정하는 등 함수 스코프 밖에서 어떠한 변경도 일으키지 않음
 * 3. 동일한 입력을 받았을 때 동일한 출력을 반환하는 참조 투명성(referential transparency)을 지님
 *
 * @see {@link https://wormwlrm.github.io/2022/03/08/Functional-Programming-in-JavaScript.html}
 */

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 명령형, 절차적 프로그래밍
for (let i = 0; i < array.length; i++) {
  array[i] = array[i] * 2;
}

// 함수형 프로그래밍
array.map(function (value) {
  return value * 2;
});

// 람다 표현식(lambda expression)
array.map((value) => value * 2);

// 함수 외부 스코프(전역 변수)에 의존, 외부 값의 변경을 일으킴
var counter = 0;
function increment() {
  return ++counter;
}

// 호출 시마다 일정한 결과값을 반환하지 않음
function now() {
  return Date.now();
}

// 주어진 입력에만 의존하며, 변경을 일으키지도 않고,
// 동일한 입력을 받았을 때 동일한 결과를 출력함
var increment = (counter) => counter + 1;
