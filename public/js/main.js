const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp__status = document.getElementById("temp__status");

const background = document.getElementById("weather");

const dataHide = document.querySelector(".middle__layer");
const weather_icon = document.getElementById("weather_icon");

// time
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const currentTime = document.querySelector(".hour");
const minute = document.querySelector(".minute");
// time and date
const time = new Date();

currentTime.innerHTML = time.getHours();
minute.innerHTML = time.getMinutes();

if (time.getHours() > 12) {
  document.querySelector(".period").innerHTML = "PM";
} else {
  document.querySelector(".period").innerHTML = "AM";
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector(".month").innerHTML = monthNames[time.getMonth()];

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

document.querySelector(".day").innerHTML = days[time.getDay()];

const getInfo = async (event) => {
  event.preventDefault();
  let cityValue = cityName.value;
  localStorage.setItem("city", cityValue);
  if (cityValue === "") {
    city_name.innerText = "please enter your city";
    dataHide.classList.add("data__hide");
  } else {
    try {
      const apiKey = `e98838cd640817b8a0aa8c6c63beb703`;
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${apiKey}`;
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);

      city_name.innerText = `${data.name}, ${data.sys.country}`;
      temp.innerText = data.main.temp;
      temp__status.innerText = data.weather[0].main;
      dataHide.classList.remove("data__hide");

      // weather image

      const weatherCondition = data.weather[0].main;
      if (weatherCondition == "Clear") {
        background.style.backgroundImage = `url(../img/clear.jpg)`;
        if (time.getHours() > 18 || time.getHours() < 00) {
          weather_icon.src = "animated/night.svg";
        } else {
          weather_icon.src = "animated/day.svg";
        }


      } else if (weatherCondition == "Rain") {
        background.style.backgroundImage = `url(../img/rain.jpg)`;
        weather_icon.src = "animated/rainy-6.svg";


      } else if (weatherCondition == "Haze") {
        background.style.backgroundImage = `url(../img/haze.jpg)`;
        if (time.getHours() > 18 || time.getHours() < 00) {
          weather_icon.src = "animated/night.svg";
        } else {
          weather_icon.src = "animated/day.svg";
        }


      } else if (weatherCondition == "Thunderstorm") {
        background.style.backgroundImage = `url(../img/thunder.jpg)`;
        weather_icon.src = "animated/thunder.svg";


      } else if (weatherCondition == "Drizzle") {
        background.style.backgroundImage = `url(../img/drizzle.jpg)`;
        if (time.getHours() > 18 || time.getHours() < 00) {
          weather_icon.src = "animated/night.svg";
        } else {
          weather_icon.src = "animated/day.svg";
        }


      } else if (weatherCondition == "Snow") {
        background.style.backgroundImage = `url(../img/snow.jpg)`;
        weather_icon.src = "animated/snowy-5.svg";


      } else if (weatherCondition == "Mist") {
        background.style.backgroundImage = `url(../img/mist.jpg)`;
        if (time.getHours() > 18 || time.getHours() < 00) {
          weather_icon.src = "animated/night.svg";
        } else {
          weather_icon.src = "animated/day.svg";
        }


      } else if (weatherCondition == "Smoke") {
        background.style.backgroundImage = `url(../img/smoke.jpg)`;
        if (time.getHours() > 18 || time.getHours() < 00) {
          weather_icon.src = "animated/night.svg";
        } else {
          weather_icon.src = "animated/day.svg";
        }


      } else if (weatherCondition == "Fog") {
        background.style.backgroundImage = `url(../img/fog.jpg)`;
        if (time.getHours() > 18 || time.getHours() < 00) {
          weather_icon.src = "animated/night.svg";
        } else {
          weather_icon.src = "animated/day.svg";
        }

        
      } else if (weatherCondition == "Sand") {
        background.style.backgroundImage = `url(../img/sand.jpg)`;
        if (time.getHours() > 18 || time.getHours() < 00) {
          weather_icon.src = "animated/night.svg";
        } else {
          weather_icon.src = "animated/day.svg";
        }


      } else if (weatherCondition == "Ash") {
        background.style.backgroundImage = `url(../img/ash.jpg)`;
        if (time.getHours() > 18 || time.getHours() < 00) {
          weather_icon.src = "animated/night.svg";
        } else {
          weather_icon.src = "animated/day.svg";
        }


      } else if (weatherCondition == "Squall") {
        background.style.backgroundImage = `url(../img/squall.jpg)`;
        if (time.getHours() > 18 || time.getHours() < 00) {
          weather_icon.src = "animated/night.svg";
        } else {
          weather_icon.src = "animated/day.svg";
        }


      } else if (weatherCondition == "Tornado") {
        background.style.backgroundImage = `url(../img/tornado.jpg)`;
        if (time.getHours() > 18 || time.getHours() < 00) {
          weather_icon.src = "animated/night.svg";
        } else {
          weather_icon.src = "animated/day.svg";
        }


      } else if (weatherCondition == "Clouds") {
        background.style.backgroundImage = `url(../img/clouds.jpg)`;
        weather_icon.src = "animated/cloudy.svg";
        
      }
    } catch {
      city_name.innerText = "please enter correct city name";
      dataHide.classList.add("data__hide");
    }
  }
};

window.addEventListener("load", () => {
  dataHide.classList.add("data__hide");
});

submitBtn.addEventListener("click", getInfo);
