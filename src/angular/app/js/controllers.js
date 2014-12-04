'use strict';

/* Controllers */

angular.module('dashboardApp.controllers', [])
.controller('dashboardCtrl',function($scope){
	$scope.label = "LAPEM"
	$scope.area = { 
		'id' : '1',
		'totalrevenues' : '200', 
		'totalexpenditure' : '300'}
})
