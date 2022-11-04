//jshint esversion: 6

const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=fa3310b5a669fbe1d39928b4a8e0b81e&units=metric";

  https.get(url, function(response) {
  console.log(response.statusCode);

  response.on("data", function(data) {
    const weatherData = JSON.parse(data);
    const temp = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    const imageURL = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
    //console.log(imageURL);
    res.write("<h1>The temperature in Toronto is " + temp + " degrees celsius.</h1>");
    res.write("<h3>The weather is currently " + description + " .</h3>");
    res.write("<img src=" + imageURL +">");
    res.send();
    //res.send can only be used once!
    //res.write can be used mutiple times.

}
//     const object = {
//       car: 1,
//       wheels: 4,
//       seats: 5
// };
//   console.log(JSON.stringify(object));
    //console.log(weatherData);
//  }
);
});

  //res.send("Server is up and running.");
});

// app.get("/renderHTML", (req, res) => {
//   res.sendFile("index.html", {
//     root: path.join(_dirname, "./")
//   });
// });

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
