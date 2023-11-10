angular.module('aplicacao').controller('MenuController', function($scope, $state){
	
	$scope.irInicial  = function(){
		$state.go("aplicacao_inicial");
		//$scope.iniciado = false;
	};
	
	$scope.irListagem  = function(){
		$state.go("aplicacao_listagem");
		//$scope.iniciado = false;
	};
	
	$scope.irCadastro  = function(){
		$state.go("aplicacao_cadastro");
		//$scope.iniciado = false;
	};
	
	$scope.irPrevisao  = function(){
		$state.go("aplicacao_previsao");
		//$scope.iniciado = false;
	};
});