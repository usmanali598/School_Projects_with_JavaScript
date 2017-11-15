$( function ()
{
	var API_KEY = "509be5aa136b977116c175d7f802e307";


	//get location
	$.getJSON( 'http://ipinfo.io', function ( temp )
	{
		const location = temp.loc.split( ',' )
		getWeather( location )
	} );

	//fetching weather data
	function getWeather( loc )
	{
		var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + loc[ 0 ] + '&lon=' + loc[ 1 ] + '&APPID=' + API_KEY
		$.getJSON( weatherURL, function ( apiData )
		{
			const { name } = apiData
			const { icon } = apiData.weather[ 0 ]
			const { temp } = apiData.main
			const { description } = apiData.weather[ 0 ]
			const tempCels = Math.round(( temp - 32 ) * ( 5 / 9 ) ) + "°C" + " / " + Math.round( temp ) + " F"

			console.log( tempCels )
			$( '#currentLocation' ).text( name )
			$( '#tempText' ).html( tempCels + "<br>" + description )
			console.log( `<img src=http://openweathermap.org/img/w/${ icon }.png >` )
			$( '#tempIcon' ).html(
				`<img src=http://openweathermap.org/img/w/${ icon }.png >`
			)
		} )
	}


} )