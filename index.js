const apiKey = "fca86cecea3d10b7011c472f2b366655";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector("#inputText");
const searchbtn = document.querySelector("#btn");
const weatherImg = document.querySelector("#weather_img");
const errorMsg = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  let data = await response.json();
  console.log(data);

  if (response.status == 400) {
    errorMsg.style.display = "block";
  } else {
    document.querySelector("#temp").innerHTML =
      Math.round(data.main.temp) + `&deg;c`;
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#humid").innerHTML = data.main.humidity + `%`;
    document.querySelector("#windspeed").innerHTML = data.wind.speed + ` km/hr`;

    if (data.weather[0].main == "Clear") {
      weatherImg.src = "images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherImg.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImg.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImg.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherImg.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImg.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherImg.src = "images/snow.png";
    }

    document.querySelector("#detail_box").style.display = "block";
    errorMsg.style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
