var obj1 = {
    outer: function () {
      console.log(this); // (1) obj1
  
      var innerFunc = function () {
        console.log(this); // (2) window (일반 함수 호출)
      };
  
      innerFunc();
  
      var obj2 = {
        innerMethod: innerFunc
      };
  
      obj2.innerMethod(); // (3) obj2
    }
  };
  
  obj1.outer();
  