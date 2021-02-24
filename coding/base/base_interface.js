function printInfo(info) {
    console.log(info);
}
var info = {
    "name": "muyy",
    "age": 23
};
printInfo(info); // {"name": "muyy", "age": 23}
var info2 = {
    "name": "muyy"
};
printInfo(info2); // {"name": "muyy"}
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
console.log(mySearch("鸣人", "鸣")); // true
console.log(mySearch("鸣人", "缨")); // false
var MyArray;
MyArray = ["是", "云", "随", "风"];
console.log(MyArray[2]); // 随
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var s = {};
s.color = "blue";
s.penWidth = 100;
s.sideLength = 10;
