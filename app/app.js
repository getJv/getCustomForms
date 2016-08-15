(function(){
	var app = angular.module('survey',[]);

	app.controller('SurveyController', ['$http',function($http){

		var survey = this;
		
		
		this.addSurvey = function(){
			
			$http.post('http://localhost/getCustomForms/server/server.php',{name: "hhJhoe"})
			.success(function(data){

				//survey.product = data;
				console.log(survey.newSurvey);
				console.log(data);
				survey.newSurvey = {};

			}).error(function(data){

				console.log(data);


			});


			
			



		};


		

		

	}]);

	

})();;