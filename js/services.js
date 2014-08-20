'use strict';

/* Services */

var shoppingServices = angular.module('shoppingServices', ['ngResource']);

shoppingServices.factory('Product', ['$resource',
  function($resource){
    return $resource('products/:productId.json', {}, {
      query: {method:'GET', params:{productId:'products'}, isArray:true}
    });
  }]);