/**
 * for 循环用户
 * */

console.log('==============for=============');
var num: number = 5;
var i: number;
var factorial = 1;
for (i=num; i>=1; i--) {
    factorial *= i;
}
console.log('factorial:', factorial);
console.log('==============for=============');

console.log('==============for...in=============');
var alist: Array<number> = [1,2,3,4];
for(var a in alist) {
    console.log(a)
    console.log(alist[a])
}
console.log('==============for...in=============');

console.log('==============for...of=============');
let someArray = [1, "string", false];
for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}
console.log('==============for...of=============');

console.log('==============forEach=============');
let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val, idx,array)
});
console.log('==============forEach=============');

console.log('==============every=============');
let list2 = [6,8, 9];
list2.every((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val, idx,array);
    return true; // Continues
    // Return false will quit the iteration
});
console.log('==============every=============');

console.log('==============while=============');
let while_num: number = 5;
while (while_num>=1) {
    console.log(while_num);
    while_num -= 1;
}
console.log('==============while=============');

console.log('==============do...while=============');
var n:number = 10;
do {
    console.log(n);
    n--;
} while(n>=0);
console.log('==============do...while=============');