function a() {
    var b;
    var b = function b() {};  // 함수 표현식
  
    console.log(b);   // (1)
    b = 'bbb';
    console.log(b);   // (2)
    console.log(b);   // (3)
  }
  a();
  