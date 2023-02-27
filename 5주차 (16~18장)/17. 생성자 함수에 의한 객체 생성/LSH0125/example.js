// Scope-Safe Constructor Pattern : 
function Circle(radius){
    
    // new 연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체 window를 가리킨다.
    // 즉, this와 Circle은 프로토타입에 의해 연결되지 않는다.
    if (!(this instanceof Circle)) {
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle1 = new Circle (5); // 정석적인 방법
const circle2 = Circle (5); // new 연산자와 함께 호출되지 않더라도 재귀 호출을 통해 의도한대로 작동

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 10 생성자 함수로서 호출된다.