var a = 1;

function outer() {
  function inner() {
    console.log(a);  // undefined
    var a = 3;
  }

  inner();           // 호출 시점
  console.log(a);    // 1
}

outer();
console.log(a);      // 1
