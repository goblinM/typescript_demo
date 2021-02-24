"use strict";
exports.__esModule = true;
var circle = require("./base_module_circle");
var triangle = require("./base_module_triangle");
function drawAllShapes(shapeToDraw) {
    shapeToDraw.draw();
}
drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());
//执行 tsc --module amd base_module_test.ts  tsc --module module_test.js base_module_test.ts
