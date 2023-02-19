//불변 객체 구현 함수

function deepFreeze(target) {
    // 객체가 아니거나 동결된 객체는 무시하고 객체이고 동결되지 않은 객체만 동결한다.
    if (target && typeof target === 'object' && !Object.isFrozen(target)){
        Object.freeze(target);
        /*
        모든 프로퍼티를 순화하여 재귀적으로 동결한다.
        Object.keys 메서드 : 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환-> 19.14.2절
        forEach 메서드 : 배열을 순화하여 각 요소에 대하여 콜백 함수를 실행 -> 27.9.2절
        */
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}
