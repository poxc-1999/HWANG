function a() { /* ... */ }
a();        // ✅ 실행 OK

var b = function () { /* ... */ };
b();        // ✅ 실행 OK

var c = function d() { /* ... */ };
c();        // ✅ 실행 OK
d();        // ❌ ReferenceError: d is not defined
