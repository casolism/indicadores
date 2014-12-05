'use strict';

/* Controllers */

angular.module('dashboardApp.controllers', [])
.controller('dashboardCtrl',function($scope,$http){
	$scope.label = "LAPEM"
	$scope.graphData = []
	function loadData(){
		$http
		.get('http://10.44.6.51/IndicadoresAPI/api/Areas/ff')
		.success(function(data){
			console.log(data)
			for (var i=0;i<data.GraphValue.length;i++){
				$scope.graphData.push ([data.GraphValue[i].Date,data.GraphValue[i].Value])
			}
		})
		.error(function(){
			console.log('err')
			$scope.graphData = [[Date.UTC(2003,8,24),0.8709],[Date.UTC(2003,8,25),0.872],[Date.UTC(2003,8,26),0.8714]]
		})
	}
	loadData()
})
