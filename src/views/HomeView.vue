<script setup>
//Pinia store
import { useWeatherStore } from "../stores/weatherStore";

//Komponenter
import MainTemp from "../components/MainTemp.vue";
import SearchBar from "../components/SearchBar.vue";
import DailyForecast from "../components/DailyForecast.vue";

//Data
const weatherStore = useWeatherStore();
</script>
<template>
  <h1>SkySpy</h1>
  <!-- Vid sökning anropas fetchweather -->
  <SearchBar @search="weatherStore.fetchWeather"></SearchBar>
  <!-- Skickar data som prop till komponenten -->
  <MainTemp
    v-if="weatherStore.weatherData"
    :weather="weatherStore.weatherData"
  ></MainTemp>
  <!-- Skickar data som prop till komponenten -->
  <DailyForecast
    v-if="weatherStore.forecastData.length"
    :forecast="weatherStore.forecastData"
  ></DailyForecast>
  <!-- Desktop -->
  <div class="desktop-container" v-if="weatherStore.weatherData">
    <section class="location">
      <h2>{{ weatherStore.weatherData.name }}</h2>
      <p>{{ new Date().toLocaleDateString("en-GB") }}</p>
    </section>
    <section class="temperature">
      <div class="main-temp">
        <p id="temp">
          {{ Math.round(weatherStore.weatherData.main.temp) }}<sup>o</sup>
        </p>
        <p id="description">
          {{ weatherStore.weatherData.weather[0].description }}
        </p>
      </div>
      <div class="sunrise-sunset">
        <div class="sunrise">
          <p><i class="fa-regular fa-sun"></i> Sunrise</p>
          <p class="data">
            {{
              new Date(
                (weatherStore.weatherData.sys.sunrise +
                  weatherStore.weatherData.timezone) *
                  1000
              ).toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })
            }}
          </p>
        </div>
        <div class="sunset">
          <p><i class="fa-regular fa-moon"></i> Sunset</p>
          <p class="data">
            {{
              new Date(
                (weatherStore.weatherData.sys.sunset +
                  weatherStore.weatherData.timezone) *
                  1000
              ).toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })
            }}
          </p>
        </div>
      </div>
    </section>
    <section class="forecast-section" v-if="weatherStore.forecastData.length">
      <ul class="desktop-forecast">
        <li v-for="day in weatherStore.forecastData" :key="day.dt">
          <p>
            {{
              new Date(day.dt * 1000).toLocaleDateString("en-GB", {
                weekday: "long",
              })
            }}
          </p>
          <p id="day-temp">{{ Math.round(day.main.temp) }}°C</p>
        </li>
      </ul>
    </section>
  </div>
  <div class="router-button">
    <RouterLink to="/details" class="routerlink">Details</RouterLink>
  </div>
</template>
<style scoped>
.routerlink {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}
.router-button {
  position: fixed;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  border: 3px solid white;
  text-align: center;
  width: 6rem;
  font-size: 1.2rem;
}
h1 {
  text-align: center;
}
.desktop-container {
  width: 1024px;
}
/* Desktop */
/* Location section */
.location {
  margin-left: 12rem;
  margin-top: 2rem;
}
.location h2 {
  font-size: 3rem;
}
.location p {
  margin-left: 1rem;
}
/* Temperature section */
.temperature {
  display: flex;
  justify-content: center;
}
.main-temp,
.sunrise-sunset {
  width: 512px;
  text-align: center;
}
#temp {
  font-size: 5rem;
}
#temp sup {
  font-size: 2rem;
  vertical-align: text-top;
}
#description {
  font-size: 1.1rem;
}
.sunrise-sunset {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  gap: 5rem;
  padding-right: 12rem;
}
/* Forecast section */
.desktop-forecast {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}
.desktop-forecast li {
  border: solid 3px white;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  font-size: 1.5rem;
  width: 170px;
}
#day-temp {
  margin-top: 2rem;
}
@media (max-width: 1023.5px) {
  .desktop-container {
    display: none;
  }
}
</style>
