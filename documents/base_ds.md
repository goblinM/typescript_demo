### 声明文件(d.ts)

#### 第三方声明文件：
    1.typings
        npm install typings -g
        npm install dt~async --global    
        dt 是指源，表示这个 Definition 的来源    
        typings 需要使用一个名为 typings.json 文件来记录我们安装过的 Definition 
        typings init
        初始化了 typings.json 文件，内容是一个空的 Definition 依赖记录表：
        {
          "dependencies": {}
        }
        安装 Definition ，并记录到表中：
        typings install env~node dt~async --global --save
        后面的 --save（可简写为 -S） 会将 Definition 信息添加到 Definition 依赖记录表                       
        
	2.使用@types统一管理的第三方库的声明文件
	    比如安装jquery的声明文件：
	    npm install @types/jquery --save-dev
        
#### 声明文件：            
把声明语句放到一个单独的文件（XXX.d.ts）中，这个文件就叫声明文件

1.declare var 声明全局变量

```
declare var test:number|string; // let和var 在这里区别不大
declare const test2 = 200; // 常量用const
```

           
2.declare function 声明全局方法
```
declare function testMethod(id:number|string, name:string):string;
//当参数可选的时候，加上?即可
declare function testMethod2(age?:number|string): string;
declare function render(callback?:()=>void):string;                                
```    
        
3.declare class 声明全局类
```
declare class Person {
	static maxAge:number  // 静态变量
	static getMaxAge():number  // 静态方法
	constructor(name:string, age:number) //构造函数
	getName(id:number):string                                    
}
let p = new Person('lisi', 18)
console.log(p.getName(1))           
Person.maxAge = 100;       
console.log(Person.getMaxAge())              
```    
        
4.declare namespace 声明（含有子属性的）全局对象
```
//这个对象可以有变量，有函数，有类，也可以嵌套对象    
declare namespace PObject{
	var aaa: number | string
	function getName(id: number | string): string
	class Person {

		static maxAge: number //静态变量
		static getMaxAge(): number //静态方法

		constructor(name: string, age: number) //构造函数
		getName(id: number): string //实例方法
	},
	namespace Animal {
		let legs: number
		let color: string                
	}            
}
```  
 
5.declare 混合类型
```
//既是函数又是对象又是类
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

ts3.6增加了新功能，function声明和class声明可以合并                
/** 作为函数使用 */
declare function People(w: number): number
declare function People(w: string): number

declare class People {
	/** 构造函数 */
	constructor(name: string, age: number)
	constructor(id: number)

	// 实例属性和实例方法
	name: string
	age: number
	getName(): string
	getAge(): number

	/** 作为对象，调用对象上的方法或者变量 */
	static staticA(): number
	static aaa: string
}

/** 作为对象，调用对象上的方法或者变量 */
declare namespace People {
	export var abc: number
}                            
```    
        
6.declare enum 声明全局枚举类型 
```
            如果没有初始化就会被当作常数，这是第一项为0，其余为前一项加一。    
            declare enum ColorEnum {
                White = 1,
                Black = 2,
                Blue = 3,
                Red = 4
            }
            console.log(ColorEnum.Black)
```       
        
7.declare interface 和 type 声明全局类型
```
            使用interface声明函数
            declare interface GET {
                (id:string): string
                (name:string, age:number|string):string            
            }        
            declare var get:GET        
```    
        
8.export 导出变量

9.export namespace 导出（含有子属性的）对象

10.export default ES6 默认导出

```
declare var aaa: 1
declare var bbb: 2
declare var ccc: 3 //因为这个文件里我们使用了import或者export语法，所以bbb和ccc在其他代码里不能访问到，即不是全局变量      
export { aaa }
A.d.ts文件
declare var a1: 1
declare var a2: 2
export { a1,a2 }
//使用：        
import { a1, a2 } from "./A"
console.log(a1)
console.log(a2)     

declare var a1: 1
export default a1
import a1 from "./A";
console.log(a1)                                   
```   
 
11.export = commonjs 导出模块
```
//通过require的方式引入模块化的代码
declare module "abcde" {
	export let a: number
	export function b(): number
	export namespace c{
		let cd: string
	}
}  
let a = require('abcde')   
a.a = 1    
//写法差不多，把declare换成了export    
//换成函数的写法
declare module "app" {
	function aaa(some:string):string        
	export = aaa
}      
let app = require('app')   
app('mary')                                  
```   

12.export as namespace UMD 库声明全局变量
```
declare namespace UUU{
	let a:number
}
 
declare module "UUU" {
	export =UUU
}
//作为全局变量使用：UUU.a = 1
//作为模块加载使用：
let u = require("UUU")
u.a = 2                               
```   
        
13.declare global 扩展全局变量
```
//使用import/export的语法，这时候使用declare var xxx:yyy是不起到全局变量的作用的
//需要下面的方式去声明全局变量        
import {Request, Response} from 'express'
declare global {
	var req: Request
	var res: Response
	namespace Obj {
		var a:number
	}                        
}                
```    
14.declare module 扩展模块

15.引用d.ts文件方式:TypeScript 文件里使用 三斜线指令 引用这个文件

`
/// <reference path='./A.d.ts'/> 三斜线指令
`

#### 注意事项
1.内层不要使用declare
```
declare module "sample" {
    // 此处应该使用export
    declare let a: string
}
```

2.避免全局污染
```
虽然全局声明写法允许引入名称到全局命名空间中，但这也意味着，引入的顶层名称 都是全局的。
所以应该将所有的模块内导出的元素都放进模块或者命名空间内
declare module "sample" {
    name: string
}
应该替换为
declare module "sample" {
    /**
     * 仅可通过 import { Person } from "sample" 访问。
     */
    export interface Person {
        name: string
    }
}
不过下面这些情况可以这么写：
    当在拓展全局对象、类的时候
    引入新的全局名称时
```

3.注意声明冲突
```
module 和 namespace 都是可以重复声明的——但是里面的元素不能冲突
declare module "sample" {
    export let name: string;
    export interface ABC {
        value: string;
    }
}

declare module "sample" {
    // 冲突，因为 sample 模块里已经有了导出变量 name
    export let name: string;
    // 不冲突，因为两个内容不重复的重名 interface 可以合并。
    export interface ABC {
        name: string;
    }
}

declare module "sample" {
    // 冲突，因为前面的 sample.ABC 里面已经定义了 value 字段。
    export interface ABC {
        value: string;
    }
}
```

4.模块名称区分大小写
```
因为在 Windows 下文件名不区分 大小写，所以你不区分大小写都可以成功引用模块， 
但是，Node.js 并不认为仅仅名称大小写不一致的两个文件是同一个模块！

这将导致一个严重的后果——同一个模块被初始化为不同名称（大小写不一致）的多个实例， 
导致各处引用的不是同一个实例，从而造成数据不同步。
```