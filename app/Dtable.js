(function(){
	
	angular.module('showcase.withAjax', ['datatables']).controller('WithAjaxCtrl', WithAjaxCtrl);

	function WithAjaxCtrl(DTOptionsBuilder, DTColumnBuilder) {
		var vm = this;
		vm.dtOptions = DTOptionsBuilder.fromSource('data.json')
			.withPaginationType('full_numbers');
		vm.dtColumns = [
			DTColumnBuilder.newColumn('name').withTitle('name'),
			//DTColumnBuilder.newColumn('firstName').withTitle('First name'),
			//DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
		];
	}
	
	
	
})();