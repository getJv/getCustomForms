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
	
	app.controller('DtableController', ['DTOptionsBuilder','DTColumnBuilder',function(DTOptionsBuilder, DTColumnBuilder){
		var vm = this;
		vm.dtOptions = DTOptionsBuilder.fromSource('server/server.php?function=getSurveys')
		.withPaginationType('full_numbers');
			
		vm.dtColumns = [
			
			//DTColumnBuilder.newColumn('Actions','foo'),
			DTColumnBuilder.newColumn('id','Action2'),
			DTColumnBuilder.actionColumn('terter'),
			DTColumnBuilder.newColumn('name').withTitle('name')
			.renderWith(function(data, type, full) {
            return full.name + " <input type='button'  value='"+full.id+"'/>";
        })
			
		];
	
		
		
		
	}]);

	

})();

