(function () {

'use strict';
  //MODULES DEPENDENCIES;
  angular.module('seguimiento.controllers',[]);
  angular.module('seguimiento.directives',[]);
  angular.module('seguimiento.services',[]);
  angular.module('seguimiento.filters',[]);

  angular
    .module('seguimiento', ['ui.router','seguimiento.controllers','seguimiento.services','seguimiento.directives','seguimiento.filters'])
    .config(config);

  config.$inject = ['$urlRouterProvider'];

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  };
})();