/**
 * 基本函数用法
 * */

console.log('==============基础函数=============');
function test(){
    console.log('基础函数')
}
test();
console.log('==============基础函数=============');

console.log('==============return函数=============');
function test_return(): string {
    return 'hello'
}
console.log(test_return());
console.log('函数完整类型');
let add3: (x: string, y: string) => string = function(x: string, y: string): string{
    return `${x}, Hello ${y}`;
}
console.log(add3('mary', 'TypeScript'));
console.log('==============return函数=============');

console.log('==============带参函数=============');
function test_param(name: string, num: number): string {
    console.log(name, num);
    var msg = name+'is '+num+'years old';
    return msg
}
console.log(test_param('mary', 16));
console.log('==============带参函数=============');

console.log('==============默认函数=============');
function test_default(msg,send_flag:boolean=false) {
    console.log(send_flag);
    if(send_flag) {
        console.log(msg)
    } else{
        console.log('permission denied')
    }
}
test_default('say hi');
test_default('say hi', true);
console.log('==============默认函数=============');

console.log('==============可选参数=============');
function test_select(msg: string, other?:any) {
    console.log(msg, other)
}
test_select('other no');
test_select('可选参数','ddddddddddddd');
console.log('==============可选参数=============');

console.log('==============剩余参数=============');
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
console.log('==============剩余参数=============');

console.log('==============匿名参数=============');
var res = function test_hide() {
    console.log('匿名参数')
}
res();
var res2 = function(a:number,b:number) {
    return a*b;
};
console.log(res2(12,2));

(function () {
    var x = "Hello!!";
    console.log(x)
 })()
console.log('==============匿名参数=============');

console.log('==============构造参数=============');
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
console.log('==============构造参数=============');

console.log('==============lambda参数=============');
var foo = (x:number)=>10 + x
console.log(foo(100))

var func = (x)=> {
    if(typeof x=="number") {
        console.log(x+" 是一个数字")
    } else if(typeof x=="string") {
        console.log(x+" 是一个字符串")
    }
}
func(12)
func("Tom")
var disp = function () {
    console.log("调用函数");
};
disp();
console.log('==============lambda参数=============');

console.log('==============函数重载=============');
function test_override(s1:string):void;
function test_override(n1:number,s1:string):void;
function test_override(x:any,y?:any):void {
    console.log(x);
    console.log(y);
}
test_override("abc")
test_override(1,"xyz");
console.log('==============函数重载=============');

console.log('==============prototype=============');
function Lucky(id: number, name: string) {
    this.id = id;
    this.name = name;
}
Lucky.prototype = {
    getName: function () {
        return this.name
    },
    getInformation: function () {
        return 'the name is '+ this.name + ', the id is ' + this.id;
    }
};
var dog = new Lucky(1, 'santa');
console.log(dog.getName());
console.log(dog.getInformation());
console.log('==============prototype=============');