<script setup>
import { useWeatherStore } from "../stores/weatherStore";

const weatherStore = useWeatherStore();
</script>
<template>
  <h1>SkySpy</h1>
  <div class="details-container" v-if="weatherStore.weatherData">
    <div class="details-card">
      <div class="stats">
        <p><i class="fa-solid fa-wind"></i> Wind speed</p>
        <p class="data">{{ weatherStore.weatherData.wind.speed }} m/s</p>
      </div>
      <div class="stats">
        <p><i class="fa-regular fa-eye"></i> Visibility</p>
        <p class="data">{{ weatherStore.weatherData.visibility / 1000 }} km</p>
      </div>
    </div>
    <div class="details-card">
      <div class="stats">
        <p><i class="fa-solid fa-droplet"></i> Humidity</p>
        <p class="data">{{ weatherStore.weatherData.main.humidity }} %</p>
      </div>
      <div class="stats">
        <p><i class="fa-solid fa-gauge"></i> Pressure</p>
        <p class="data">{{ weatherStore.weatherData.main.pressure }} hPa</p>
      </div>
    </div>
    <div class="details-card">
      <div class="stats">
        <p><i class="fa-solid fa-temperature-half"></i> Min temp</p>
        <p class="data">
          {{ Math.round(weatherStore.weatherData.main.temp_min) }} °C
        </p>
      </div>
      <div class="stats">
        <p><i class="fa-solid fa-temperature-half"></i> Max temp</p>
        <p class="data">
          {{ Math.round(weatherStore.weatherData.main.temp_max) }} °C
        </p>
      </div>
    </div>
    <div class="details-card">
      <div class="stats">
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
      <div class="stats">
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
  </div>
  <div class="router-button">
    <RouterLink to="/" class="routerlink">Back</RouterLink>
  </div>
</template>
<style scoped>
.routerlink {
  color: white;
  text-decoration: none;
  display: block;
  text-align: center;
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
.details-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 375px;
}
.details-card {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: auto;
  align-items: center;
  margin-top: 2rem;
}
.stats {
  border: solid 3px;
  padding: 10px;
  border-radius: 10px;
  width: 140px;
}
.data {
  margin-top: 1.5rem;
}
</style>
