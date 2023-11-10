angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resource){
	var WeatherChannel = $resource('http://api.openweathermap.org/data/2.5/weather?lat=-23.5475&lon=-46.63611&&units=metric&APPID=84ff145e3a53272651e3f27445a15629');
	
	
	var getWeather = function(){
		WeatherChannel.get().$promise.then(function(response){
			$scope.tempo = response;
			console.log(response);
		}, function(promise){
			alert("Erro ao requisitar recurso!");
		})
	}
	
	getWeather();
});