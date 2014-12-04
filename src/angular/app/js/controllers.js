'use strict';

/* Controllers */

angular.module('dashboardApp.controllers', [])
.controller('dashboardCtrl',function($scope,$http){
	$scope.label = "LAPEM"
	function loadData(){
		$http
		.get('http://10.44.6.51/IndicadoresAPI/api/Areas/ff')
		.success(function(data){
			console.log(data)
		})
		.error(function(){
			console.log('err')
		})
	}
	loadData()
})
