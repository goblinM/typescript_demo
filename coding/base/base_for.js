/**
 * for 循环用户
 * */
console.log('==============for=============');
var num = 5;
var i;
var factorial = 1;
for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log('factorial:', factorial);
console.log('==============for=============');
console.log('==============for...in=============');
var alist = [1, 2, 3, 4];
for (var a in alist) {
    console.log(a);
    console.log(alist[a]);
}
console.log('==============for...in=============');
console.log('==============for...of=============');
var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry); // 1, "string", false
}
console.log('==============for...of=============');
console.log('==============forEach=============');
var list = [4, 5, 6];
list.forEach(function (val, idx, array) {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val, idx, array);
});
console.log('==============forEach=============');
console.log('==============every=============');
var list2 = [6, 8, 9];
list2.every(function (val, idx, array) {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val, idx, array);
    return true; // Continues
    // Return false will quit the iteration
});
console.log('==============every=============');
console.log('==============while=============');
var while_num = 5;
while (while_num >= 1) {
    console.log(while_num);
    while_num -= 1;
}
console.log('==============while=============');
console.log('==============do...while=============');
var n = 10;
do {
    console.log(n);
    n--;
} while (n >= 0);
console.log('==============do...while=============');
