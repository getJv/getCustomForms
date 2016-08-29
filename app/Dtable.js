(function(){
	
	angular.module('showcase.withAjax', ['datatables']).controller('WithAjaxCtrl', WithAjaxCtrl);

	function WithAjaxCtrl(DTOptionsBuilder, DTColumnBuilder) {
		var vm = this;
		
				
		//console.log('test-data.json');
		vm.dtOptions = DTOptionsBuilder.fromSource('app/test-data.json')
			.withPaginationType('full_numbers');
		vm.dtColumns = [
			
			//DTColumnBuilder.newColumn('name').withTitle('name'),
			DTColumnBuilder.newColumn('firstName').withTitle('First name'),
			DTColumnBuilder.newColumn('lastName').withTitle('Last name')//.notVisible()
		];
	}
	
	
	
})();