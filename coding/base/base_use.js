/***
 * 基础用法：接口，类，对象
 * */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('==============interface=============');
var cat_obj = { color: 'white', legs: 4, type: 'persian' };
console.log(cat_obj.color, cat_obj.legs, cat_obj.type);
var dog_obj = { color: 'grey', legs: 4, type: 'pomeranian', age: 2 };
console.log(dog_obj.color, dog_obj.legs, dog_obj.type, dog_obj.age);
var dog_obj2 = { color: 'grey', legs: 4, type: 'pomeranian', age: '3' };
console.log(dog_obj2.color, dog_obj2.legs, dog_obj2.type, dog_obj2.age);
console.log('==============interface=============');
console.log('==============class=============');
var Shape = /** @class */ (function () {
    function Shape(a, b) {
        this.Area = a * b;
    }
    ;
    Shape.prototype.doPrint = function () {
        console.log("父类的 doPrint() 方法。");
    };
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.getArea = function () {
        this.getPrivate();
        this.getProtected();
        return this.Area;
    };
    ;
    Square.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this); // 调用父类的函数
        console.log("子类的 doPrint()方法。");
    };
    ;
    Square.prototype.getPrivate = function () {
        console.log('private 方法');
    };
    Square.prototype.getProtected = function () {
        // this.getDescribe();
        console.log('protected 方法');
    };
    Square.getWidth = function () {
        return this.width;
    };
    ;
    Square.getHeight = function () {
        return this.height;
    };
    return Square;
}(Shape));
var obj = new Square(2, 2);
console.log(obj.getArea());
console.log(obj.doPrint());
Square.height = 3;
Square.width = 3;
console.log(Square.getHeight());
console.log(Square.getWidth());
console.log('==============class=============');
console.log('==============class, interface=============');
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var al_obj = new AgriLoan(10, 1);
console.log("利润为 : " + al_obj.interest + "，抽成为 : " + al_obj.rebate);
console.log('==============class, interface=============');
console.log('==============duck typing=============');
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
// 正确
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });
console.log(newPoint);
// 错误
// var newPoint2 = addPoints({x:1},{x:4,y:3})
console.log('==============duck typing=============');
