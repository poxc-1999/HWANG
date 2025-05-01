var a = 1;

var outer = function () {
  var inner = function () {
    console.log(a);  // (1)
    var a = 3;
  };
  inner();
  console.log(a);    // (2)
};

outer();
console.log(a);      // (3)
