weatherapp.directive('weatherDayPanel', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherdaypanel.html',
		replace: true,
		scope: {
			weatherDay: "=",
			convertToStandard: '&',
			convertToDate: '&',
			dateFormat: "@"
		}
	}	
});