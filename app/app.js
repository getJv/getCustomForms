(function(){
	var app = angular.module('survey',['datatables']);

	app.controller('SurveyController', ['$http',function($http){

		var survey = this;
		
		
		
		survey.addSurvey = function(){
			$http.post("server/server.php?function=addSurvey",survey.newSurvey)
			.success(function(res){
						console.log();
                        console.log(res);
					})
			.error(function(error){
                        console.log(error);
					});
		
		};

		survey.getSurveys = function(){
			
			$http.get('server/server.php?function=getSurveys')
			//$http.get('app/test-data.json')
			.success(function(res){
					 //console.log(res);
                       survey.surveys =  res;
					})
			.error(function(error){
                        console.log(error);
					});
			
		
			
		};
		survey.surveys = survey.getSurveys();	
		 
		
		
		 
		
	
		
		

		

	}]);
	
	app.controller('DtableController', ['$compile', '$scope','DTOptionsBuilder','DTColumnBuilder',function($compile, $scope,DTOptionsBuilder, DTColumnBuilder){
		
		var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll" ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';
		var vm = this;
		 vm.selected = {};
		vm.selectAll = false;
		vm.toggleAll = toggleAll;
		vm.toggleOne = toggleOne;
		
		vm.dtOptions = DTOptionsBuilder.fromSource('server/server.php?function=getSurveys')
		
		.withOption('createdRow', function(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        })
        .withOption('headerCallback', function(header) {
            if (!vm.headerCompiled) {
                // Use this headerCompiled field to only compile header once
                vm.headerCompiled = true;
                $compile(angular.element(header).contents())($scope);
            }
        })
		.withPaginationType('full_numbers');
			
		vm.dtColumns = [
			
			DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)">';
            }),
			DTColumnBuilder.newColumn('id','ID'),
			DTColumnBuilder.newColumn('name').withTitle('name'),
			DTColumnBuilder.newColumn(null).withTitle('name')
			.renderWith(function(data, type, full) {
            return full.name + " <input type='button'  value='"+full.id+"'/>";
        })
			
		];
		
		function toggleAll (selectAll, selectedItems) {
			for (var id in selectedItems) {
				if (selectedItems.hasOwnProperty(id)) {
					selectedItems[id] = selectAll;
				}
			}
		}
		function toggleOne (selectedItems) {
			for (var id in selectedItems) {
				if (selectedItems.hasOwnProperty(id)) {
					if(!selectedItems[id]) {
						vm.selectAll = false;
						return;
					}
				}
			}
			vm.selectAll = true;
		}
	
		
		
		
	}]);

	

})();

