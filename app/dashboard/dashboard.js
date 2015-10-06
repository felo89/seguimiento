(function () {

  'use strict';

  angular
    .module('seguimiento.dashboard')
    .config(configDashboard);

  configDashboard.$inject = ['$stateProvider','navbarConfig'];

  function configDashboard($stateProvider, navbarConfig) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
          'navbar': navbarConfig,
          'page':{templateUrl: 'dashboard/dashboard.html', controller: 'DashboardCtrl', controllerAs: 'dashboard'}
        }
      });
  };
})();