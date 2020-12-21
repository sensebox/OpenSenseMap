(function () {
  'use strict';

  angular
    .module('openSenseMapApp')
    .controller('EditBoxTinggController', EditBoxTinggController);

  EditBoxTinggController.$inject = ['$scope', 'boxData', 'notifications', 'TinggService'];

  function EditBoxTinggController ($scope, boxData, notifications, TinggService) {
    var vm = this;
    vm.deactivateModem = deactivateModem;
    vm.gsmverified = 'init' ;
    vm.errorText = '';
    activate();

    function activate () {

      
    }

    function deactivateModem(){
      TinggService.deactivateModem(boxData).then(function(res){vm.gsmverified = 'true'})
      .catch(function(error){
        vm.gsmverified = 'false';
        vm.errorText = error.code; 
      
      } )
    }

  }
})();
