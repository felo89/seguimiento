(function () {

'use strict';
  //MODULES DEPENDENCIES;
  angular.module('seguimiento.dashboard',[]);

  angular
    .module('seguimiento', ['ui.router','seguimiento.dashboard'])
    .config(config);

  config.$inject = ['$urlRouterProvider'];

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  };
})();