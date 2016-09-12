(function(){
	
	angular.module('angularWay', ['datatables', 'ngResource']).controller('AngularWayCtrl', AngularWayCtrl);

	function AngularWayCtrl($resource) {
		 var vm = this;
		$resource('app/test-data.json').query().$promise.then(function(persons) {
			vm.persons = persons;
		});
		
				
		
	}
	
	
	
})();