(function () {
  'use strict';

  angular
    .module('seguimiento.send')
    .controller('SendCtrl', SendCtrl);

  SendCtrl.$inject = ['$scope'];

  function SendCtrl($scope) {
    var vm = this;
    $scope.user = {
      name: '',
      email: '',
      phone: '',
      address: 'Talca, Chile'
    };
  };
})();