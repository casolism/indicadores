'use strict';

angular.module('dashboardApp', [
  'dashboardApp.controllers',  
  
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('graficaDemo',{ 
			url: '/graficaDemo',
			templateUrl: 'partials/graficaDemo.html'
		});
		console.log("prueba");
	$urlRouterProvider.otherwise('/graficaDemo')
});