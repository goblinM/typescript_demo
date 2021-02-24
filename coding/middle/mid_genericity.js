/**
 * 泛型使用
 * */
// 设计一个先进先出的队列
// 示例一：
var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.data = [];
        // push(item) 方法
        this.push = function (item) {
            _this.data.push(item);
        };
        // pop() 方法
        this.pop = function () {
            return _this.data.shift();
            // shift() 用于把数组的第一个元素从其中删除,并返回第一个元素的值
        };
    }
    return Queue;
}());
console.log('=====================测试======================');
var queue = new Queue();
queue.push(1);
queue.push('2'); // 报错
console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1)); // return error
console.log('=====================测试======================');
