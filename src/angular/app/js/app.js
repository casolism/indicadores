'use strict';

angular.module('dashboardApp', [
	'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
	
	// For unmatch url, we set an default redirect
	$urlRouterProvider.otherwise("/dashboard");

	$stateProvider
		.state('dashboard' , {
			url:'/dashboard',
			templateUrl: 'partials/dashboard.html'
		})
		.state('estadoResultados' , {
			url:'/estadoResultados',
			templateUrl: 'partials/estadoResultados.html'
		})		
	})