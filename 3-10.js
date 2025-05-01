var obj = {
    outer: function () {
      console.log(this);         // (1) obj
  
      var innerFunc1 = function () {
        console.log(this);       // (2) window
      };
      innerFunc1();
  
      var self = this;
      var innerFunc2 = function () {
        console.log(self);       // (3) obj
      };
      innerFunc2();
    }
  };
  
  obj.outer();
  