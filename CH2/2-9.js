console.log(sum(1, 2));       // ✅ OK
console.log(multiply(3, 4));  // ❌ ReferenceError

function sum(a, b) {
  return a + b;
}

var multiply = function(a, b) {
  return a * b;
};
