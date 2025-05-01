setTimeout(function () {
    console.log(this);}        // (1) 브라우저에서는 window, Node.js에서는 Timeout
  , 300);
  
  [1, 2, 3, 4, 5].forEach(function (x) {
    console.log(this, x);      // (2) 일반 함수이므로 undefined (strict mode), or window (non-strict)
  });
  
  document.body.innerHTML += '<button id="a">클릭</button>';
  document.body.querySelector('#a')
    .addEventListener('click', function (e) {
      console.log(this, e);    // (3) this는 이벤트를 발생시킨 element (버튼)
    });
  