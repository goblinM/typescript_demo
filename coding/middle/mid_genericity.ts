/**
 * 泛型使用
 * */
// 设计一个先进先出的队列
// 示例一：这一个示例看起来人们可以向队列中添加string 类型的数据，但是实际上，该用法假定的是只有 number 类型会被添加到队列里。
class Queue {
    private data = [];
    // push(item) 方法
    push = item => {
        this.data.push(item)
    };
    // pop() 方法
    pop = () =>{
        return this.data.shift()
        // shift() 用于把数组的第一个元素从其中删除,并返回第一个元素的值
    }
}

console.log('=====================测试1======================')
const queue = new Queue();
queue.push(1);
queue.push('2'); // 报错
console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1)); // return TypeError: queue.pop(...).toPrecision is not a function
console.log('=====================测试1======================')

// 为了解决示例一的问题，可以给这些约束创建特殊类，比如快速创建数字类型的队列
// 示例二
class QueueNumber {
    private data = [];
    // push(item) item必须是number
    push = (item: number) => {
        this.data.push(item)
    };
    // 返回的必须是number
    pop = (): number => {
        return this.data.shift()
    }
}
console.log('=====================测试2======================')

const queue2 = new QueueNumber();

queue2.push(0);
// queue2.push('1'); // Error: 不能推入一个 `string` 类型，只能是 `number` 类型

// 如果该错误得到修复，其他将不会出现问题
console.log('=====================测试2======================')

// 当想创建一个字符串的队列时，将不得不再次修改相当大的代码。
// 实际真正想要的一种方式是无论什么类型被推入队列，被推出的类型都与推入类型一样。当使用泛型时，这会很容易：
// 创建一个泛型类
class QueueGenericity<T> {
    private data = [];
    push = (item:T) => {
        this.data.push(item)
    }
    pop = ():T|undefined => {
        return this.data.shift()
    }
}
console.log('=====================测试3======================')
const queue3 = new QueueGenericity<number>();
queue3.push(0);
// queue3.push('1'); // Error：不能推入一个 `string`，只有 number 类型被允许
console.log('=====================测试3======================')

// reverse 函数， items 是泛型数组，返回的也是泛型数组，泛型类型可以传递进去
function reverse<T>(items: T[]): T[] {
  const toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i]);
  }
  return toreturn;
}
const sample = [1, 2, 3];
let reversed = reverse(sample);
// reversed[0] = '1'; // Error
// reversed = ['1', '2']; // Error
reversed[0] = 1; // ok
reversed = [1, 2]; // ok

console.log('=====================多个类型参数======================')
 function swap<T, U>(tuple: [T, U]): [U, T] {
            return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]

console.log('=====================泛型接口======================')
interface CreateArrayFunc<T> {
    (length: number, value:T):Array<T>;
}
let createArray: CreateArrayFunc<any>;
createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']

console.log('=====================泛型类======================')
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };