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
const forecastData = ref([]);

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

    const dailyForecast = [];
    const uniqueDays = new Set();
    const today = new Date().toLocaleDateString("en-GB");

    forecastResponse.data.list.forEach((entry) => {
      const date = new Date(entry.dt * 1000).toLocaleDateString("en-GB");
      if (date !== today && !uniqueDays.has(date) && dailyForecast.length < 4) {
        uniqueDays.add(date);
        dailyForecast.push(entry);
      }
    });
    forecastData.value = dailyForecast;
  } catch (error) {
    console.error(error);
  }
};
</script>
<template>
  <h1>SkySpy</h1>
  <SearchBar @search="fetchWeather"></SearchBar>
  <MainTemp v-if="weatherData" :weather="weatherData"></MainTemp>
  <DailyForecast
    v-if="forecastData.length"
    :forecast="forecastData"
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
