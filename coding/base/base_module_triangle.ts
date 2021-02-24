import shape = require("./base_module_ishape");

export class Triangle implements shape.IShape {
   public draw() {
      console.log("Triangle is drawn (external module)");
   }
}