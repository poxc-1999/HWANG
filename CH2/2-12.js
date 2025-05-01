console.log(sum(3, 4));  // ❌ TypeError: sum is not a function

var sum = function(x, y) {
  return x + y;
};

var a = sum(1, 2);

// 아래는 중복되었지만 영향 없음 (이미 호출된 이후)
var sum = function(x, y) {
  return x + ' + ' + y + ' = ' + (x + y);
};

var c = sum(1, 2);
console.log(c);  // "1 + 2 = 3"
