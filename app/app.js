(function () {

'use strict';
  //MODULES DEPENDENCIES;
  angular.module('seguimiento.menu',[]);
  angular.module('seguimiento.dashboard',[]);
  angular.module('seguimiento.send',[]);

  angular
    .module('seguimiento.menu')
    .constant('navbarConfig',{
      templateUrl: 'navbar/navbar.html',
      controller: 'navbarCtrl',
      controllerAs: 'navbar'
    });

  angular
    .module('seguimiento', ['ui.router','ngMaterial','ngMdIcons','seguimiento.menu','seguimiento.dashboard','seguimiento.send'])
    .config(config);

  config.$inject = ['$urlRouterProvider'];

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  };
})();