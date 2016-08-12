(function(){
	var app = angular.module('survey',[]);

	app.controller('SurveyController', ['$http',function($http){

		
		this.newSurvey = {};

		this.addSurvey = function(){
			console.log('ddd');
			this.newSurvey = {};
			//console.log(this.survey);



		};

		//var survey = this;
		//$http.get('http://localhost/getCustomForms/server/server.php').success(function(data){

		//	survey.product = data;
			//console.log(this.product );

		//});

		

	}]);

	

})();;