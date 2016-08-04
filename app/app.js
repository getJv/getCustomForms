(function(){
	var app = angular.module('survey',[]);

	app.controller('SurveyController', function(){

		this.product = gem;

	});

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
	};

})();