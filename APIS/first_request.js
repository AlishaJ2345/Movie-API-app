// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//  if(!error && response.statusCode == 200)
//  {
//      console.log(body);
//  }

 //will make the request
 var request = require('request');
 console.log("sunset at hawaii is at...")
 request('https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=37.372&lon=-122.038') , function(error, response, body)
 //but to do anything with the information that comes back we need a callback
{
   if(!error && response.statusCode == 200)
   {
      var parsedData = JSON.parse(body)
      console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
   }
   
};
