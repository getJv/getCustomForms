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
	
	app.controller('AngularWayCtrl', ['$http',function($http){
		
		var vm = this;
		vm.nome = 'jhonatan';
		
		vm.getSurveys = function(){
			
			$http.get('server/server.php?function=getSurveys')
			//$http.get('app/test-data.json')
			.success(function(res){
					 //console.log(res);
                       vm.surveys =  res;
					})
			.error(function(error){
                        console.log(error);
					});
			
		
			
		};
		vm.surveys = vm.getSurveys();	
	
	
	}]);
})();

