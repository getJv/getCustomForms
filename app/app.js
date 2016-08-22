(function(){
	var app = angular.module('survey',['showcase.withAjax']);

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
			.success(function(res){
					 console.log(res);
                       survey.surveys =  res;
					})
			.error(function(error){
                        console.log(error);
					});
			
		
			
		};
		survey.surveys = survey.getSurveys();	
		 //console.log(this);
		
		

		

	}]);

	

})();

