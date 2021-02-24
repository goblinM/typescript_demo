import shape = require("./base_module_ishape");
import circle = require("./base_module_circle");
import triangle = require("./base_module_triangle");
function drawAllShapes(shapeToDraw: shape.IShape) {
   shapeToDraw.draw();
}
drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());

//执行 tsc --module amd base_module_test.ts  tsc --module commonjs base_module_test.ts
