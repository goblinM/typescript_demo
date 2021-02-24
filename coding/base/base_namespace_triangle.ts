/// <reference path ="base_namespace_ishape.ts" />
namespace Drawing {
    // 类继承接口
    export class Triangle implements IShape{
        // 重写draw
        public draw() {
            console.log('Triangle is drawn');
        }
    }
}