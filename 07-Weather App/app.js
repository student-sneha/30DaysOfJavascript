const container = document.querySelector(".container");
const searchBtn = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error = document.querySelector(".not-found");

searchBtn.addEventListener("click", () => {
  const APIKey = "f6e11f168333065d58a6214d81616f12";
  const city = document.querySelector(".search-box input").value;

  if (city == "") {
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then((response) => response.json())
    .then((json) => {
    
        if (json.cod == "404") {
        container.style.height = "400px";
        weatherBox.classList.remove("active");
        weatherDetails.classList.remove("active");
        error.classList.add("active");
        return;
      }
      container.style.height = "550px";
      weatherBox.classList.add("active");
      weatherDetails.classList.add("active");
      error.classList.remove("active");
     
      const image = document.querySelector(".weather-box img");
      const temp = document.querySelector(".weather-box .temp");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          break;
        case "Clouds":
          image.src = "images/clouds.png";
          break;
        case "Snow":
          image.src = "images/snow.png";
          break;
        case "Rain":
          image.src = "images/rain.png";
          break;
        case "Mist":
          image.src = "images/mist.png";
          break;
        case "Haze":
          image.src = "images/drizzle.png";
          break;
        case "Wind":
          image.src = "images/wind.png";
          break;
        case "Humidity":
          image.src = "images/humidity.png";
          break;
        default:
          image.src = "images/clouds.png";
      }

      temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

    });
});
