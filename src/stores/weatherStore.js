//Skapar Pinia store
import { defineStore } from "pinia";
//Gör datan rektiv
import { ref } from "vue";
//Importering av Axios
import axios from "axios";

//Skapar en store med namnet weather
export const useWeatherStore = defineStore("weather", () => {
  const apiKey = "31152b2bd9eca07728c87c4c9a4a26d7";
  const weatherData = ref(null);
  const forecastData = ref([]);

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

      //Loop för att få ut 4 unika dagar från Api
      forecastResponse.data.list.forEach((entry) => {
        const date = new Date(entry.dt * 1000).toLocaleDateString("en-GB");
        if (
          date !== today &&
          !uniqueDays.has(date) &&
          dailyForecast.length < 4
        ) {
          uniqueDays.add(date);
          dailyForecast.push(entry);
        }
      });

      forecastData.value = dailyForecast;
    } catch (error) {
      console.error(error);
    }
  };

  return { weatherData, forecastData, fetchWeather };
});
