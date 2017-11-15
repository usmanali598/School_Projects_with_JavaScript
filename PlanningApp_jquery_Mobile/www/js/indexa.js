var API_KEY = "509be5aa136b977116c175d7f802e307";
var cel = false;
var wd;

function displayTemp(fTemp, c){
	if(c) {return Math.round((fTemp - 32) * (5/9) + " C");}else {
	return Math.round(fTemp) + " F";}
}

$(function(){
	
	var loc;
	
$.getJSON('http://ipinfo.io', function(d){
	console.log("assigning the data..");
	loc = d.loc.split(",");
	console.log(loc);

$.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + loc[0]+'&lon=' + loc[1]+'&APPID='+ API_KEY, function(apiData){
wd = apiData;
console.log("got the data,", wd);
var currentLocation = wd.name;
var currentWeather = wd.weather[0].description;
var currentTemp = displayTemp(wd.main.temp, cel);
var high = displayTemp(wd.main.temp_max, cel);
var low = displayTemp(wd.main.temp_min, cel);
var icon = wd.weather[0].icon;

$('#currentLocation').html(currentLocation);
$('#currentTemp').html(currentTemp);
$('#currentWeather').html(currentWeather);


var iconSrc = "http://api.openweathermap.org/img/w/" + icon +".png";
$('#currentTemp').prepend('<img src="' + iconSrc + '">');

		})
	})

})