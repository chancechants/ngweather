// SERVICES
weatherapp.service('cityService', function() {
 	this.city = 'Raleigh, NC';
});

weatherapp.service('weatherService', ['$resource', function($resource) {

	this.GetWeather = function (city, days) {
		var weatherAPI = $resource(
			'http://api.openweathermap.org/data/2.5/forecast/daily', 
			{ callback: 'JSON_CALLBACK' }, 
			{ get: { method: "JSONP"} }
		);

		// Get an APPID key at: http://openweathermap.org/appid#get
		return weatherAPI.get({ 
			q: city, 		
			APPID: 'YOUR_APPID_KEY_GOES_HERE',
			cnt: days 
		});		
	}
}]);