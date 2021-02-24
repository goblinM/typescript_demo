interface Person{
    name?:string;
    age?:number;
}

function printInfo(info:Person){
    console.log(info);
}

let info = {
    "name":"muyy",
    "age":23
};

printInfo(info); // {"name": "muyy", "age": 23}

let info2 = {
    "name":"muyy"
};

printInfo(info2); // {"name": "muyy"}
console.log('==============函数类型接口===============');
interface SearchFunc{
    // 两个参数值source, substring，返回一个布尔值
    (source: string, subString: string): boolean;
}

// let mySearch: SearchFunc;
let mySearch: SearchFunc = function(source: string,subString: string){
    return source.search(subString) !== -1;
};

console.log(mySearch("鸣人","鸣")); // true
console.log(mySearch("鸣人","缨")); // false
// 可以使用type 来定义一个函数的类型
type ISearchFunc = (source:string, subString:string) => boolean;
let mySearch2: ISearchFunc = function(source: string,subString: string){
    return source.search(subString) !== -1;
};
console.log(mySearch2("鸣人","k")); // true

console.log('==============函数类型接口===============');

console.log('==============接口的实现===============');
interface StringArray{
    [index: number]: string;
}

let MyArray: StringArray;
MyArray = ["是","云","随","风"];
console.log(MyArray[2]); // 随

interface ClockInterface{
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface{
    currentTime: Date;
    setTime(d: Date){
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}

interface Shape{
    color: string;
}

interface PenStroke{
    penWidth: number;
}

interface Square extends Shape,PenStroke{
    sideLength: number;
}

let s = <Square>{};
s.color = "blue";
s.penWidth = 100;
s.sideLength = 10;

console.log('==============接口的实现===============');
