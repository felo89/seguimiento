(function(){
'use strict';

  angular
    .module('seguimiento.controllers')
    .controller('DashboardCtrl', DashboardCtrl);

  function DashboardCtrl(){
    var vm = this;
    console.log(vm);
    vm.titulo = "Hola mundo";
  };
})();