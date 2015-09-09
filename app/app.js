(function () {

'use strict';
  //MODULES DEPENDENCIES;
  angular.module('app.controllers',[]);
  angular.module('app.directives',[]);
  angular.module('app.services',[]);
  angular.module('app.filters',[]);

  angular
    .module('seguimiento', ['ui.router','app.controllers','app.services','app.directives','app.filters'])
    .config(config);

  config.$inject = ['$urlRouterProvider'];

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  };
})();