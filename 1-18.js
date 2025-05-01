var copyObjectViaJSON = function (target) {
    return JSON.parse(JSON.stringify(target));
  };
  
  var obj = {
    a: 1,
    b: {
      c: null,
      d: [1, 2],
      func1: function () { console.log(3); }
    },
    func2: function () { console.log(4); }
  };
  
  var obj2 = copyObjectViaJSON(obj);
  
  obj2.a = 3;
  obj2.b.c = 4;
  obj2.b.d[1] = 3;
  
  console.log(obj);  // 원본 객체
  console.log(obj2); // 복사된 객체
  