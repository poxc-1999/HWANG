var a = 1;
delete window.a;                   // false
console.log(a, window.a, this.a);  // 1 1 1

var b = 2;
delete b;                          // false
console.log(b, window.b, this.b);  // 2 2 2

window.c = 3;
delete window.c;                   // true
console.log(c, window.c, this.c);  // ReferenceError: c is not defined

window.d = 4;
