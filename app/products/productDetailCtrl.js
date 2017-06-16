(function () {
    "use strict";

    angular.module("productManagement")
    .controller("ProductDetailCtrl", ["productResource", "$stateParams", "productService","product", ProductDetailCtrl]);

    function ProductDetailCtrl(productResource, $stateParams, productService, product) {
        var vm = this;
       
       vm.product = product;
      //  vm.product = productResource.get({ productId: $stateParams.productId });

        
        vm.title = "Product Detail: " + vm.product.productName;

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }

        vm.marginPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost);
    }
}())