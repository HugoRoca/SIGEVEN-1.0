// Hugo Roca
(function () {

  'use strict';

  angular.module('app').config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('portal', {
        url: '/portal',
        templateUrl: 'App/private/portal/portal.html'
      })
      .state('articulo', {
        url: '/articulo',
        templateUrl: 'App/private/articulo/articulo.html'
      })
      .state('venta', {
        url: '/venta',
        templateUrl: 'App/private/venta/venta.html'
      })
      .state('otherwise', {
        url: '*path',
        templateUrl: 'App/private/portal/portal.html'
      });

  }

})();