console.log(sum(3, 4));  // (1) 출력?

function sum(x, y) {
  return x + y;
}

var a = sum(1, 2);       // (2)

function sum(x, y) {
  return x + ' + ' + y + ' = ' + (x + y);
}

var c = sum(1, 2);       // (3)
console.log(c);          // "1 + 2 = 3"
