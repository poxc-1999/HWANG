// 예제 3-19 call/apply 메서드의 활용 1-3) 문자열에 배열 메서드 적용 예시

var str = 'abc def';

Array.prototype.push.call(str, ' ', 'pushed string'); // Error (문자열은 불변)

// 오류 메시지: Cannot assign to read only property 'length' of object '[object String]'

Array.prototype.concat.call(str, 'string');  
// ['abc def', 'string']

Array.prototype.every.call(str, function (c) {
    return c !== ' ';
}); 
// false

Array.prototype.some.call(str, function (c) {
    return c === ' ';
}); 
// true

var newArr = Array.prototype.map.call(str, function (c) {
    return c + '!';
});
console.log(newArr);  
// ['a!', 'b!', 'c!', ' !', 'd!', 'e!', 'f!']

var newStr = Array.prototype.reduce.apply(str, [
    function (string, char, i) {
        return string + char + i;
    },
    ''
]);
console.log(newStr);  
// 'a0b1c2 3d4e5f6'
