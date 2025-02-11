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
</style>
