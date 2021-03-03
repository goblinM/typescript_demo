### 泛型
泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

1.设计泛型目的：有意义的去约束成员

    成员包括：类的实例成员，类的方法，函数参数，函数返回值
    可以随意调用泛型参数，当使用简单的泛型时，泛型常用 T、U、V 表示。
    如果在参数里，不止拥有一个泛型，应该使用一个更语义化名称，如 TKey 和 TValue （通常情况下，以 T 作为泛型的前缀，在其他语言如 C++ 里，也被称为模板）
    <T>，其中 T 用来指代任意输入的类型

    1.1 单个，多个类型参数
        // 单个类型参数
        class Queue<T> {
            private data = [];
            push = (item:T) =>{
                this.data.push(item)
            }
            pop = ():T|undefined => {
                return this.data.shift()
            }
        }
        const queue = new Queue<number>();
        queue.push(0);
        queue.push('1'); // 报错

        // 多个类型参数
        function swap<T, U>(tuple: [T, U]): [U, T] {
            return [tuple[1], tuple[0]];
        }
        swap([7, 'seven']); // ['seven', 7]
		

    1.2 泛型约束
        在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
        这时，可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束
        interface Lengthwise {
            length: number;
        }

        function loggingIdentity<T extends Lengthwise>(arg: T): T {
            console.log(arg.length);
            return arg;
        }
        loggingIdentity(7)

        多个类型参数之间也可以互相约束
            function copyFields<T extends U, U>(target:T, source:U):T {
                for (let id in source) {
                    target[id] = (<T>source)[id]; // <T>source 就是 source as T，把 source 断言成 T 类型
                }
                return target
            }
            let x = { a: 1, b: 2, c: 3, d: 4 };
            copyFields(x, { b: 10, d: 20 });
			
2.泛型接口

    使用含有泛型的接口来定义函数的形状
    可以把泛型参数提前到接口名上，注意，此时在使用泛型接口的时候，需要定义泛型的类型。
    interface CreateArrayFunc<T> {
        (length:number, value:T):Array<T>;
    }
    let createArray:CreateArrayFunc<any> =  function<T>(length: number, value: T): Array<T> {}
	
3.泛型类

    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function(x, y) { return x + y; };
	
4.泛型参数的默认类型

    在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。
    当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。
    function createArray<T = string>(length: number, value: T): Array<T> {
        let result: T[] = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }

3.泛型的误用

    使用泛型仅仅是为了它的 hack。当你使用它时，你应该问问自己：你想用它来提供什么样的约束。如果你不能很好的回答它，你可能会误用泛型
    比如：
    declare function foo<T>(arg:T): void;
    在这里，泛型完全没有必要使用，因为它仅用于单个参数的位置，使用如下方式可能更好：
    declare function foo(arg:any): void;
	
4.设计模式:方便通用

