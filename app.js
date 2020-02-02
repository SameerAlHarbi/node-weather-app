const request = require("request");

const url = 'https://api.darksky.net/forecast/2c4b077b3d642f2a7fd79732544dc559/37.8267,-122.4233?units=us';

request({ url : url, json: true }, (error, response) => {
    // const data = JSON.parse(response.body);
    // console.log(data.currently);

    // console.log(response.body.currently);
    // console.log('It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.');
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.');
});