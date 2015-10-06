(function(){
  
  'use strict'

  angular
    .module('seguimiento.send')
    .config(configSend);

  configSend.$inject = ['$stateProvider','navbarConfig'];

  function configSend($stateProvider, navbarConfig){
    $stateProvider
      .state('send', {
        url: '/send',
        views: {
          'navbar': navbarConfig,
          'page':{templateUrl: 'send/send.html', controller: 'SendCtrl', controllerAs: 'send'}
        }
      });
  }
})();