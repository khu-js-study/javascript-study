// super 키워드 활용

class Base {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    saySum () {
        return this.a + this.b ;
    }
}

class Derived extends Base {
    constructor(a, b, c) {
        // super의 호출, 수퍼클래스의 constructor를 호출한다.
        super(a, b);
        this.c = c
    }

    saySum () {
        // super의 참조, 수퍼클래스의 메서드를 호출한다.
        return super.saySum() + this.c; 
    }
}

const derived = new Derived(1, 2, 3);
console.log(derived.saySum()); // 6