async function getPlaces() {
  var input = document.getElementById(input);
  await new google.maps.places.Autocomplete(input);
}
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchKey = document.getElementById("input").value;
  console.log(searchKey);
  searchWeather(searchKey);
});

function searchWeather(searchKey) {
  let weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=8bf61df4cb68d65dcbb998e32fe9873b`;
  window
    .fetch(weatherApi)
    .then((data) => {
      data
        .json()
        .then((weather) => {
          console.log(weather);
          let weatherData = weather.weather;
          let main = weather.main;
          let output = [];
          for (let x of weatherData) {
            let conv=- 273.15;
            let temparature = Math.floor(weather.main.temp+conv);
          //  console.log("type of "+typeof(temparature));
            output += `
                <div class="col-md-12 mt-4 card">
                <div class="card-body">
                <h1>${weather.name}</h1>
                <div>
                <p class="icon">
                <img src="http://openweathermap.org/img/wn/${x.icon}.png"/></p>
                <p><span>temp:</span>
                <span class="temp">${temparature}&deg;c</span></p>
                <p class="float-left">humidity : ${weather.main.humidity}&deg;c</p>
                <p class="des float-left">${x.description}</p>
                <p class="des float-right">${x.main}</p></div>
                </div>
                </div>
                `;
            document.getElementById("weatherTemplate").innerHTML = output;
          }
        })
        .catch((err = console.log(err)));
    })
    .catch((err) => console.log(err));
}
