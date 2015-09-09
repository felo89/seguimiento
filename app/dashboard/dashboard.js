(function () {

'use strict';

  angular
    .module('seguimiento')
    .config(configDashboard);

  configDashboard.$inject = ['$stateProvider'];

  function configDashboard($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
          'page':{templateUrl: 'dashboard/dashboard.html', controller: 'DashboardCtrl', controllerAs: 'dashboard'}
        }
      }
    );
  };
})();