System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Product;
    return {
        setters:[],
        execute: function() {
            Product = (function () {
                function Product(id, title, price) {
                    this.id = id && id || 0;
                    this.title = title && title || '';
                    this.price = price && price || 0;
                }
                Product.prototype.showProduct = function () {
                    console.log(this);
                };
                return Product;
            }());
            exports_1("Product", Product);
        }
    }
});
//# sourceMappingURL=product.js.map