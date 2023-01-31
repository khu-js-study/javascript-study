// 개발자가 세미콜론 자동 삽입 기능의 동작을 제대로 예측하지 못해 제대로 활용하지 못하는 경우

function foo () {
    return
    {}
    // 동작 결과 -> return; {};
    // 개발자의 예측 -> return {};
}

console.log(foo()); // undefined