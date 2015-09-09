(function(){
'use strict';

  angular
    .module('app.controllers')
    .controller('DashboardCtrl', [DashboardCtrl]);

  function DashboardCtrl(){
    var vm = this;
    // console.log(vm);
    vm.title = Hola mundo;
  };
})();