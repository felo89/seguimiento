(function(){
  'use strict'

  angular
    .module('seguimiento.menu')
    .controller('navbarCtrl', navbarCtrl);

  navbarCtrl.$inject = ['$state'];

  function navbarCtrl($state){
    var vm = this;
    vm.isModuleActive = function(_state){
      return $state.is(_state);
    };

    vm.go = function(dir){
      $state.go(dir);
    }
  }
})();