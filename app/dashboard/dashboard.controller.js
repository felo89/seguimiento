(function(){
'use strict';

  angular
    .module('seguimiento.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

  function DashboardCtrl(){
    var vm = this;
    vm.title = "Dashboard";
  };
})();