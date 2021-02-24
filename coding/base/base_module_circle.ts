import shape = require("./base_module_ishape");

export class Circle implements shape.IShape {
   public draw() {
      console.log("Cirlce is drawn (external module)");
   }
}
