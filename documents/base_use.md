1.javascript 是动态类型语言，不需要声明类型； TypeScript是JavaScript的超集，看上去像是一种新的静态类型语言。

2.JavaScript 有7种数据类型：Boolean, String, Number, Null, undefined, Object, Symbol；TypeScript 支持所有JavaScript的数据类型，并且提供enum(枚举类型)。

    2.1 Boolean 布尔值
        const isBoolean: boolean = true;
        const isBoolean2: boolean = Boolean(1);
        const isBoolean3: Boolean = new Boolean(1);
        因为new Boolean()返回的是一个布尔对象而不是一个布尔值，所以这一种的写法是会编译出错的：
            const isBoolean4: boolean = new Boolean(1);
			
    2.2 number 数字
        const isNum: number = 1;
        所有数字都是浮点数，支持10进制，16进制，NaN以及Infinity.
		
    2.3 string 字符串
        const isStr: string = 'hello';
        const isStr2: string = `My name is ${isStr}`;
        支持单双引号，也支持ES6模板字符串。
		
    2.4 void 空
        可用于默认不返回值的函数
        function isReturn: void {  
            console.log('hello typescript');
        }
		
    2.5 null 和 undefined 空
        const u: undefined = undefined; // undefined
        const n: null = null; // null
        undefined类型的变量只能被赋值为undefined，null类型的变量只能被赋值为null。
		
    2.6 any 任意值
        any类型的变量可以被赋予任意类型的值
        声明变量（没赋值）的时候会被识别为any类型
        声明变量同时赋值了，会进行类型推导：
            声明变量的时候，对变量赋值但是没有明确指定类型，TypeScript会推测出一个类型。
			
    2.7 array 数组
        通过 Array<type> or type[] 语法为数组内的元素指定类型
        数组是通过[类型+方括号] 来定义
            const isArray: string[] = ['1','2']
        使用泛型
            const isArray2: Array<number> = [1,2,3,4]
			
    2.8 tuple 元组
        需要定义一个已知元素和类型的数组，但是各个元素的类型不相同，可以使用tuple元组
        const me:[string, number, boolean] = ['hello', 1, ture];
		
    2.9 enum 枚举
        列出所有可用值，一个枚举的默认初始值是0。你可以调整一开始的范围：
        enum Role {Employee = 3, Manager, Admin}
        let role: Role = Role.Employee
        console.log(role) // 3
		
3.函数 function

    3.1 函数指定类型：
        function test(): string {  
            return 'hello'
        }
		
    3.2 可选参数和默认参数
        可选参数：在参数名旁使用?实现
        function buildName(first: string, last?:string) {}
        默认参数：
        function buildName2(first:string='mo', last?:string) {}
		
4.类 class

    4.1 基础类
        class person {  
            name: string;
            age: number;
            constructor(name:string, age:number|string) {}
        }
    4.2 继承类:extends
        class student extends person {  
            gender: string;
            constructor(gender:string) {  
                super('mary', 23);
                this.gender = gender;
            }
        }
    4.3 存储器
        TypeScript支持通过getters/setters 来截取对象成员的访问。能帮助你有效的控制对象成员的访问。
		
5.接口 interface
    TypeScript的核心原则之一是对值所具有的结构进行类型检查。在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约.
	
    5.1 基础接口
        interface LabelValue {  
            label: string  
        }
		
    5.2 可选属性,只读属性
        可选属性名字定义的后面加一个 ? 符号。可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。
        只读属性使用关键字readonly定义属性值，不可以进行修改，强制修改会报错。
        interface Person {
            name?:string;
            age?:number|string;
            readonly born: string;
        }
		
    5.3 函数类型
        使用type 来定义一个函数的类型；type 可以声明基本类型别名，联合类型，元组等类型
        接口能够描述 JavaScript 中对象拥有的各种各样的外形。  
        除了描述带有属性的普通对象外，接口也可以描述函数类型。  
        定义的函数类型接口就像是一个只有参数列表和返回值类型的函数定义。  
        参数列表里的每个参数都需要名字和类型。  
        定义后完成后，我们可以像使用其它接口一样使用这个函数类型的接口。
		
    5.4 可索引类型
        可索引类型具有一个索引签名，它描述了对象索引的类型，还有相应的索引返回值类型
        interface StringArray {  
            [index: number]: string;
        }
		
    5.5 类类型
        implements
        interface ClockInterface{}
        class Clock implements ClockInterface {}
		
    5.6 继承接口
        和类一样，接口也可以相互继承。  
        这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
		
6.模块

    任何包含顶级import或者export的文件都被当成一个模块
    export interface StringValidator{}
    export class letterValidator implements StringValidator{}
    export class zipCode implements StringValidator{}
	

7.泛型

    组件不仅能够支持当前的数据类型，同时也能支持未来额数据类型。
    function Hello<T>(arg:T):T{
        return arg;
    }
    let outPut = Hello<string>('Hello Generic');
    let output2 = Hello('Hello Generic') // 用了类型推导
    console.log(outPut);
    console.log(outPut2);













