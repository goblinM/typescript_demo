declare var test_id: number | string;
declare const test_const = 200;

declare function testMethod(id: number | string, name: string): string;

// 参数可选使用?
declare function testMethod2(age?: number | string): string;

declare function render(callback?: () => void): string;

render(function () {
    console.log('test')
})

// 使用interface声明函数
declare interface GET {
    (id: string): string

    (name: string, age: number | string): string
}

declare var get: GET
get('1');
get('mary', 18)

// 类
declare class Person {
    static maxAge: number  // 静态变量
    static getMaxAge(): number  // 静态方法
    constructor(name: string, age: number) //构造函数
    getName(id: number): string
}

let p = new Person('lisi', 18)
console.log(p.getName(1))
Person.maxAge = 100;
console.log(Person.getMaxAge())

// 对象
declare namespace Pobject {
    var aaa: number | string

    function getName(id: number | string): string

    class Person {
        static maxAge: number //静态变量
        static getMaxAge(): number //静态方法
        constructor(name: string, age: number) //构造函数
        getName(id: number): string //实例方法
    }

    namespace Animal {
        let legs: number
        let color: string

        function getLegs(): number

    }
}

Pobject.getName(1)
Pobject.Animal.legs = 4
Pobject.Animal.getLegs = function () {
    return Pobject.Animal.legs
}

// 混合类型，既是函数，又是类，又是对象
// 实例方法
interface People{
    name: string
    age: number
    getName(): string
    getAge():number
}
interface People_Static{
    /** 构造函数 */
    new (name: string, age: number): People
    new (id:number): People

    /** 作为对象，调用对象上的方法或者变量 */
    staticA():number
    aaa:string

    /** 作为函数使用 */
    (w:number):number
    (w:string):number
}
declare var People:People_Static
// 函数使用
People(123)
// 静态方法
People.staticA = function () {
    return 123
}
//类构造函数
let P = new People('mary', 18)
console.log(P.age)
//类实例方法
P.getAge()

// 枚举
declare enum ColorEnum {
    White = 1,
    Black = 2,
    Blue = 3,
    Red = 4
}

console.log(ColorEnum.Black)

