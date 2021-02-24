/*
* 不同类型赋值测试
* */
var str = '1';
var str2:number = <number> <any> str;
console.log(str2);
// string
console.log('============string=============');
let string_message: string = 'string message';
console.log(string_message);
console.log('============string=============');

// number
console.log('============number=============');
let number_message: number = 5;
console.log(number_message);
console.log('============number=============');

// boolean
console.log('============boolean=============');
let bool_message: boolean = true;
console.log(bool_message);
function test_boolean(isBetterCode: boolean) {
    return isBetterCode? 'good': 'bed'
}
const isBetterCode: boolean = true;
test_boolean(isBetterCode);
// const isBetterCode: boolean = new Boolean(1);
// 编译出错，因为new Boolean 返回的是一个Boolean 对象，而不是一个boolean 值
const isBetterCode2: Boolean = new Boolean(1);
const isBetterCode3: boolean = Boolean(1);
console.log('============boolean=============');

// array
console.log('============array=============');
let array_message: number[] = [1,2,3,4];
console.log(array_message);
let arr: Array<number> = [5,6,7,8];
console.log(arr);
console.log('============array=============');

// tuple
console.log('============tuple=============');
let tuple_message: [string, number] = ['haha', 1];
console.log(tuple_message);
console.log('============tuple=============');

// enum
console.log('============enum=============');
enum Color { Red, Black, Blue};
let enum_message: Color = Color.Black;
console.log(enum_message);
console.log('============enum=============');

// void
console.log('============void=============');
function hello(): void {
    console.log('hello world')
}
hello();
console.log('============void=============');

// any类型
console.log('============any=============');
console.log('1.值动态改变');
let any_message: any = 1;
console.log('number:',any_message);
any_message = 'any message';
console.log('string:',any_message);
any_message = false;
console.log('boolean:',any_message);
console.log('2.改写现有代码');
let change_code: any = 4;
// change_code.ifItExists();
change_code.toFixed();
console.log(change_code);
console.log('3.定义存储各种类型数据的数组');
let arrayList: any[] = [1, 'hello', true];
console.log(arrayList);
console.log('=============any============');

// never
console.log('============never=============');
let x: never;
let y: number;
// 运行错误，数字类型不能转为 never 类型
// x = 123;
// 运行正确，never 类型可以赋值给 never类型
x = (()=>{ throw new Error('exception')})();
// 运行正确，never 类型可以赋值给 数字类型
y = (()=>{ throw new Error('exception')})();
// 返回值为 never 的函数可以是抛出异常的情况
// function error(message: string): never {
//     throw new Error(message);
// }
// 返回值为 never 的函数可以是无法被执行到的终止点的情况
// function loop(): never {
//     while (true) {}
// }
console.log('============never=============');