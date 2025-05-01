var obj = {
    methodA: function () {
      console.log(this);
    },
    inner: {
      methodB: function () {
        console.log(this);
      }
    }
  };
  
  obj.methodA();               // (1)
  obj['methodA']();            // (2)
  
  obj.inner.methodB();         // (3)
  obj.inner['methodB']();      // (4)
  obj['inner'].methodB();      // (5)
  obj['inner']['methodB']();   // (6)
  