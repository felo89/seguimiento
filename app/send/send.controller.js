(function(){
'use strict';

  angular
    .module('seguimiento.send')
    .controller('SendCtrl', SendCtrl);

  function SendCtrl(){
    var vm = this;
    console.log('send controller');
  };
})();