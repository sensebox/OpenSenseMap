(function () {
  'use strict';

  angular
    .module('openSenseMapApp')
    .controller('EditBoxTinggController', EditBoxTinggController);

  EditBoxTinggController.$inject = ['$scope', 'boxData', 'notifications', 'TinggService'];

  function EditBoxTinggController ($scope, boxData, notifications, TinggService) {
    var vm = this;
    activate();
    vm.deactivateModem = deactivateModem;
    vm.gsmverified = 'init' ;
    vm.errorText = '';
    ////

    function activate () {

      
    }

    function deactivateModem(){
      TinggService.deactivateModem(boxData).then((res)=>vm.gsmverified = 'true')
      .catch((error)=> {
        vm.gsmverified = 'false';
        vm.errorText = error.code; 
      
      } )
    }

  }
})();
