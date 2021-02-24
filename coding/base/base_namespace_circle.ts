/// <reference path ="base_namespace_ishape.ts" />
namespace Drawing {
    // 类继承接口
    export class Circle implements IShape{
        // 重写draw
        public draw() {
            console.log('Circle is drawn');
        }
    }
}