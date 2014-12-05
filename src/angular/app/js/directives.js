'use strict';

/* Directives */

angular.module('dashboardApp.directives', [])
.directive('chartDemo',function(){
	return {
		template: '<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
		link: function(scope,element,attrs){
			var chart = new Highcharts.StockChart({
				chart:{
					renderTo: 'container'
				},
            rangeSelector : {
                selected : 1
            },

            title : {
                text : 'USD to EUR exchange rate'
            },
			
			yAxis : {
                title : {
                    text : 'Exchange rate'
                }
            },

            series : [{
                name : 'USD to EUR',
                data : scope.graphData,
                id : 'dataseries',
                tooltip : {
                    valueDecimals: 4
                }
            }, {
                type : 'flags',
                data : [{
                    x : Date.UTC(2011, 1, 22),
                    title : 'A',
                    text : 'Shape: "squarepin"'
                }, {
                    x : Date.UTC(2011, 3, 28),
                    title : 'A',
                    text : 'Shape: "squarepin"'
                }],
                onSeries : 'dataseries',
                shape : 'squarepin',
                width : 16
            }, {
                type : 'flags',
                data : [{
                    x : Date.UTC(2011, 2, 1),
                    title : 'B',
                    text : 'Shape: "circlepin"'
                }, {
                    x : Date.UTC(2011, 3, 1),
                    title : 'B',
                    text : 'Shape: "circlepin"'
                }],
                shape : 'circlepin',
                width : 16
            }, {
                type : 'flags',
                data : [{
                    x : Date.UTC(2011, 2, 10),
                    title : 'C',
                    text : 'Shape: "flag"'
                }, {
                    x : Date.UTC(2011, 3, 11),
                    title : 'C',
                    text : 'Shape: "flag"'
                }],
                color : Highcharts.getOptions().colors[0], // same as onSeries
                fillColor : Highcharts.getOptions().colors[0],
                onSeries : 'dataseries',
                width : 16,
                style : {// text style
                    color : 'white'
                },
                states : {
                    hover : {
                        fillColor : '#395C84' // darker
                    }
                }
            }]
        });

		scope.$watch("graphData", function (newValue) {
		        chart.series[0].setData(newValue, true);
		      }, true);

		}
	}
})