const apiKey = "bea6c02e5a76b295f1f5cd58fc188b34";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();

    if (response.status === 404) {
        alert("City not found. Please enter a valid city name.");
        return;
    }

    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + " km/h";

    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        default:
            weatherIcon.src = "images/default.png";
            break;
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    }
});
