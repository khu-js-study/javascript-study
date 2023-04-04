// 클로저의 활용

// 함수(counter을 기억하는 클로저)를 반환하는 고차 함수
const counter = (function () {

    // counter : 안전하게 은닉하여 특정 함수에게만 상태 변경 허용
    let counter = 0;

    return function (aux) {
        counter = aux(counter);
        return counter;
    };
}());

function increase(n) {
    return ++n;
}

function decrease(n) {
    return --n;
}

console.log(counter(increase)); // 1
console.log(counter(increase)); // 2

// 자유 변수를 공유한다 !
console.log(counter(decrease)); // 1
console.log(counter(decrease)); // 0