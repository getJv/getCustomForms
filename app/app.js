(function(){
	var app = angular.module('survey',[]);

	app.controller('SurveyController', ['$http',function($http){

		var survey = this;
		$http.get('http://localhost/getCustomForms/server/server.php').success(function(data){

			survey.product = data;
			//console.log(this.product );

		});

		console.log(this.survey );

	}]);

	

})();