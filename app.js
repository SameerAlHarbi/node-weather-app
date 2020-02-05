const request = require("request");

const url = 'https://api.darksky.net/forecast/2c4b077b3d642f2a7fd79732544dc559/37.8267,-122.4233?units=us';

request({ url : url, json: true }, (error, response) => {

    if(error) {
        console.log('Unable to connect to weather service !');
    } else if(response.body.error) {
        console.log('Unable to find location !');
    } else {
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.');
    }

    // const data = JSON.parse(response.body);
    // console.log(data.currently);

    // console.log(response.body.currently);
    // console.log('It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.');
    
});

const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Jeddah.json?access_token=pk.eyJ1IjoiYWJ1anVkZSIsImEiOiJjazY1anQyMXkwOGY5M21sdjdqczQ0enN0In0.BzIGjxWHVv_vP7eHlBqwQg&limit=1";

request({url: geocodeUrl, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services !')
    } else if(response.body.features.length === 0) {
        console.log('Unable to find location, Try another search')
    } else {
        const latitude = response.body.features[0].center[1];
        const longtude = response.body.features[0].center[0];
        console.log(latitude, longtude);
    }
});