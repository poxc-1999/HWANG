function a() {
    var b;          // 변수 선언 → 선언만 호이스팅됨
    function b() {} // 함수 선언 → 전체가 호이스팅됨
  
    console.log(b); // (1)
    b = 'bbb';      // 함수 참조를 문자열로 덮어씀
    console.log(b); // (2)
    console.log(b); // (3)
  }
  a();
  