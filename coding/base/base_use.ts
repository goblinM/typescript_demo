/***
 * 基础用法：接口，类，对象
 * */

console.log('==============interface=============');

interface AnimalType {
    type: string
}

interface AnimalAge {
    age: number | string
}

interface Cat extends AnimalType {
    color: string,
    legs: number
}

interface Dog extends AnimalType, AnimalAge {
    color: string,
    legs: number
}

var cat_obj = <Cat>{color: 'white', legs: 4, type: 'persian'};
console.log(cat_obj.color, cat_obj.legs, cat_obj.type);

var dog_obj = <Dog>{color: 'grey', legs: 4, type: 'pomeranian', age: 2};
console.log(dog_obj.color, dog_obj.legs, dog_obj.type, dog_obj.age);

var dog_obj2 = <Dog>{color: 'grey', legs: 4, type: 'pomeranian', age: '3'};
console.log(dog_obj2.color, dog_obj2.legs, dog_obj2.type, dog_obj2.age);
console.log('==============interface=============');

console.log('==============class=============');

class Shape {
    Area: number;

    constructor(a, b) {
        this.Area = a * b;
    };

    doPrint(): void {
        console.log("父类的 doPrint() 方法。")
    }
}

class Square extends Shape {
    static width: number;
    static height: number;

    getArea() {
        this.getPrivate();
        this.getProtected();
        return this.Area
    };

    doPrint(): void {
        super.doPrint(); // 调用父类的函数
        console.log("子类的 doPrint()方法。")
    };

    private getPrivate(): void {
        console.log('private 方法')
    }

    protected getProtected(): void {
        // this.getDescribe();
        console.log('protected 方法')
    }

    static getWidth() {
        return this.width
    };

    static getHeight() {
        return this.height
    }
}

var obj = new Square(2, 2);
console.log(obj.getArea());
console.log(obj.doPrint());
Square.height = 3;
Square.width = 3;
console.log(Square.getHeight());
console.log(Square.getWidth());
console.log('==============class=============');

console.log('==============class, interface=============');

interface ILoan {
    interest: number
}

class AgriLoan implements ILoan {
    interest: number;
    rebate: number;

    constructor(interest: number, rebate: number) {
        this.interest = interest;
        this.rebate = rebate
    }
}

var al_obj = new AgriLoan(10, 1);
console.log("利润为 : " + al_obj.interest + "，抽成为 : " + al_obj.rebate);
console.log('==============class, interface=============');

console.log('==============duck typing=============');
interface IPoint {
    x:number
    y:number
}
function addPoints(p1:IPoint,p2:IPoint):IPoint {
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    return {x:x,y:y}
}
// 正确
var newPoint = addPoints({x:3,y:4},{x:5,y:1});
console.log(newPoint);
// 错误
// var newPoint2 = addPoints({x:1},{x:4,y:3})
console.log('==============duck typing=============');
console.log('==============接口中函数定义改造===============');
type IUserInfoFunc = (user: IUser) => string;
interface IUser {
    name?:string;
    age?:number|string; //可选属性
}
const getUserInfo: IUserInfoFunc = (user) => {
    return `name: ${user.name}, age: ${user.age}`;
};

getUserInfo({name:'mary', age:18});
console.log('==============接口中函数定义改造===============');

