var obj = {
    logThis: function () {
      console.log(this);
    },
    logThisLater1: function () {
      setTimeout(this.logThis, 500);           // (1) this → window
    },
    logThisLater2: function () {
      setTimeout(this.logThis.bind(this), 1000); // (2) this → obj
    },
  };
  
  obj.logThisLater1(); // Window { ... }
  obj.logThisLater2(); // obj { logThis: f, ... }
  