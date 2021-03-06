'use strict';

/* Controllers */

var shoppingControllers = angular.module('shoppingControllers', []);

shoppingControllers.controller('ProductsListCtrl', ['$scope', '$http',  
  function($scope, $http) {
    $http.get('products/products.json').success(function(data) {
      $scope.products = data;
    });

   $http.get('products/gammes.json').success(function(data){
      $scope.gammes = data;    
    });
    
    $scope.orderProp = 'age';
  }
]);

shoppingApp.controller('ProductDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.productId = $routeParams.productId;
  }
]);