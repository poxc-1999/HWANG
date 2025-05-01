var a;
console.log(a);        // undefined: 값이 할당되지 않은 변수

var obj = { a: 1 };
console.log(obj.a);    // 1
console.log(obj.b);    // undefined: 존재하지 않는 프로퍼티

console.log(b);        // ReferenceError: b is not defined

var func = function () { };
var c = func();        // return 문이 없기 때문에 자동으로 undefined 반환
console.log(c);        // undefined
