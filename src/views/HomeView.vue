<script setup>
import { useWeatherStore } from "../stores/weatherStore";
import MainTemp from "../components/MainTemp.vue";
import SearchBar from "../components/SearchBar.vue";
import DailyForecast from "../components/DailyForecast.vue";

const weatherStore = useWeatherStore();
</script>
<template>
  <h1>SkySpy</h1>
  <SearchBar @search="weatherStore.fetchWeather"></SearchBar>
  <MainTemp
    v-if="weatherStore.weatherData"
    :weather="weatherStore.weatherData"
  ></MainTemp>
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
  width: 100vw;
}
/* Desktop */
/* Location section */
.location {
  margin-left: 10rem;
}
.location h2 {
  font-size: 3rem;
}
/* Temperature section */
.temperature {
  display: flex;
  justify-content: space-between;
}
#temp {
  font-size: 5rem;
}
#description {
  font-size: 1.1rem;
}
.sunrise-sunset {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  gap: 3rem;
}
@media (max-width: 1023.5px) {
  .desktop-container {
    display: none;
  }
}
</style>
