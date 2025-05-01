var n = null;

console.log(typeof n);             // "object" (자바스크립트의 오래된 버그)

console.log(n == undefined);       // true (느슨한 비교 == 은 값만 비교)
console.log(n == null);            // true

console.log(n === undefined);      // false (엄격한 비교 === 는 타입까지 비교)
console.log(n === null);           // true
