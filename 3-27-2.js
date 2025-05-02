var obj = {
    outer: function () {
      console.log(this); // obj
  
      var innerFunc = function () {
        console.log(this); // obj
      }.bind(this);
  
      innerFunc();
    },
  };
  
  obj.outer();
  