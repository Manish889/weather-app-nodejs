const city = localStorage.getItem("city");

const apiKey = "e98838cd640817b8a0aa8c6c63beb703";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

fetch(apiURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    let lat = data.coord.lat;
    let lon = data.coord.lon;

    const apiURLForcast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;
    fetch(apiURLForcast)
      .then((response1) => {
        return response1.json();
      })
      .then((data1) => {
        console.log(data1);
        const { current, daily } = data1;

        document.querySelector(
          ".weather-icon1"
        ).src = `https://openweathermap.org/img/wn/${daily[0].weather[0]["icon"]}@2x.png`;

        document.querySelector(
          ".current-temp-day1"
        ).innerHTML = `day : ${daily[0].temp.day} &#8451;`;

        document.querySelector(
          ".current-temp-night1"
        ).innerHTML = `night : ${daily[0].temp.night} &#8451;`;

        document.querySelector(
          ".weather-description1"
        ).innerHTML = `${daily[0].weather[0].description}`;

        // second card

        document.querySelector(
          ".weather-icon2"
        ).src = `https://openweathermap.org/img/wn/${daily[1].weather[0]["icon"]}@2x.png`;

        document.querySelector(
          ".current-temp-day2"
        ).innerHTML = `day : ${daily[1].temp.day} &#8451;`;

        document.querySelector(
          ".current-temp-night2"
        ).innerHTML = `night : ${daily[1].temp.night} &#8451;`;

        document.querySelector(
          ".weather-description2"
        ).innerHTML = `${daily[1].weather[0].description}`;

        // third card

        document.querySelector(
          ".weather-icon3"
        ).src = `https://openweathermap.org/img/wn/${daily[2].weather[0]["icon"]}@2x.png`;

        document.querySelector(
          ".current-temp-day3"
        ).innerHTML = `day : ${daily[2].temp.day} &#8451;`;

        document.querySelector(
          ".current-temp-night3"
        ).innerHTML = `night : ${daily[2].temp.night} &#8451;`;

        document.querySelector(
          ".weather-description3"
        ).innerHTML = `${daily[2].weather[0].description}`;
      });
  });
