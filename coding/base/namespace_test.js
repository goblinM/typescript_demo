/// <reference path ="base_namespace_ishape.ts" />
var Drawing;
(function (Drawing) {
    // 类继承接口
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        // 重写draw
        Circle.prototype.draw = function () {
            console.log('Circle is drawn');
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
/// <reference path ="base_namespace_ishape.ts" />
var Drawing;
(function (Drawing) {
    // 类继承接口
    var Triangle = /** @class */ (function () {
        function Triangle() {
        }
        // 重写draw
        Triangle.prototype.draw = function () {
            console.log('Triangle is drawn');
        };
        return Triangle;
    }());
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
/// <reference path ="base_namespace_ishape.ts" />
/// <reference path ="base_namespace_circle.ts" />
/// <reference path ="base_namespace_triangle.ts" />
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
// tsc --out namespace_test.js base_namespace_test.ts
