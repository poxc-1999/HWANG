function a() {
    console.log(b);   // (1)
    var b = 'bbb';
    console.log(b);
    function b () {}

    console.log(b);
}
a();