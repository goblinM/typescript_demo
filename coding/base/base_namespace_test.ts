/// <reference path ="base_namespace_ishape.ts" />
/// <reference path ="base_namespace_circle.ts" />
/// <reference path ="base_namespace_triangle.ts" />

function drawAllShapes(shape:Drawing.IShape) {
    shape.draw()
}

drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());

// tsc --out namespace_test.js base_namespace_test.ts