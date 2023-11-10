var app = angular.module('aplicacao', ['ngResource', 'ui.router'])
	.config(function($stateProvider){
		$stateProvider
			.state('aplicacao_inicial', {
				name: 'aplicacao_inicial',
				url: '/inicial.html',
				templateUrl: 'inicial.html'
			}).state('aplicacao_listagem', {
				name: 'aplicacao_listagem',
				url: '/listagem.html',
				templateUrl: 'listagem-alunos.html'
			}).state('aplicacao_cadastro', {
				name: 'aplicacao_cadastro',
				url: '/cadastro.html',
				templateUrl: 'cadastro-alunos.html'
			}).state('aplicacao_previsao', {
				name: 'aplicacao_previsao',
				url: '/previsao.html',
				templateUrl: 'previsao-do-tempo.html'
			})
	});
	
app.run(function($rootScope, $state) {
	$state.go("aplicacao_inicial");
});