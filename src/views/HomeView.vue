<script setup>
// Funktion för reaktiva variabler
import { ref } from "vue";

import axios from "axios";

//Komponenter
import MainTemp from "../components/MainTemp.vue";
import SearchBar from "../components/SearchBar.vue";
import DailyForecast from "../components/DailyForecast.vue";

//API Nyckel
const apiKey = "31152b2bd9eca07728c87c4c9a4a26d7";

//Variabler för data
const weatherData = ref(null);
const forecastData = ref(null);

//Funktion för att hämta data
const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    console.log(response.data);
    weatherData.value = response.data;

    const forecastResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );
    console.log(forecastResponse);
    forecastData.value = forecastResponse.data.list.slice(0, 4);
  } catch (error) {
    console.error(error);
  }
};
</script>
<template>
  <h1>SkySpy</h1>
  <SearchBar @search="fetchWeather"></SearchBar>
  <MainTemp></MainTemp>
  <DailyForecast></DailyForecast>
  <div class="router-button">
    <RouterLink to="/details" class="routerlink">Details</RouterLink>
  </div>
</template>
<style scoped>
.routerlink {
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
}
.router-button {
  border: 3px solid white;
  text-align: center;
  width: 6rem;
  margin: auto;
  margin-top: 3rem;
}
h1 {
  text-align: center;
}
</style>
