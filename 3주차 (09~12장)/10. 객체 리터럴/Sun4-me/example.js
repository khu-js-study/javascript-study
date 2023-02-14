var person = {
    firstName: 'Hun-Seok',
    'last-name': 'Sun'
}
person.age = 20; // 프로퍼티 갱신
  
console.log(person);
// {firstName: "Hun-Seok", last-name: "Sun", age: 20}

delete person.age; // 프로퍼티 삭제

console.log(person);
// {firstName: "Hun-Seok", last-name: "Sun"}