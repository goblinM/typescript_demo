/*
* 不同类型赋值测试
* */
var str = '1';
var str2 = str;
console.log(str2);
// string
console.log('============string=============');
var string_message = 'string message';
console.log(string_message);
console.log('============string=============');
// number
console.log('============number=============');
var number_message = 5;
console.log(number_message);
console.log('============number=============');
// boolean
console.log('============boolean=============');
var bool_message = true;
console.log(bool_message);
console.log('============boolean=============');
// array
console.log('============array=============');
var array_message = [1, 2, 3, 4];
console.log(array_message);
var arr = [5, 6, 7, 8];
console.log(arr);
console.log('============array=============');
// tuple
console.log('============tuple=============');
var tuple_message = ['haha', 1];
console.log(tuple_message);
console.log('============tuple=============');
// enum
console.log('============enum=============');
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var enum_message = Color.Black;
console.log(enum_message);
console.log('============enum=============');
// void
console.log('============void=============');
function hello() {
    console.log('hello world');
}
hello();
console.log('============void=============');
// any类型
console.log('============any=============');
console.log('1.值动态改变');
var any_message = 1;
console.log('number:', any_message);
any_message = 'any message';
console.log('string:', any_message);
any_message = false;
console.log('boolean:', any_message);
console.log('2.改写现有代码');
var change_code = 4;
// change_code.ifItExists();
change_code.toFixed();
console.log(change_code);
console.log('3.定义存储各种类型数据的数组');
var arrayList = [1, 'hello', true];
console.log(arrayList);
console.log('=============any============');
// never
console.log('============never=============');
var x;
var y;
// 运行错误，数字类型不能转为 never 类型
// x = 123;
// 运行正确，never 类型可以赋值给 never类型
x = (function () { throw new Error('exception'); })();
// 运行正确，never 类型可以赋值给 数字类型
y = (function () { throw new Error('exception'); })();
// 返回值为 never 的函数可以是抛出异常的情况
// function error(message: string): never {
//     throw new Error(message);
// }
// 返回值为 never 的函数可以是无法被执行到的终止点的情况
// function loop(): never {
//     while (true) {}
// }
console.log('============never=============');
