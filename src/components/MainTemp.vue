<script setup>
import { defineProps } from "vue";

const props = defineProps(["weather"]);
</script>
<template>
  <section class="weather-card">
    <p id="name">{{ weather.name }}</p>
    <p id="date">{{ new Date().toLocaleDateString("en-GB") }}</p>
    <p id="temp">{{ Math.round(weather.main.temp) }}<sup>o</sup></p>
    <p id="description">{{ weather.weather[0].description }}</p>
  </section>
</template>
<style scoped>
.weather-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}
#name {
  font-size: 2rem;
}
#temp {
  font-size: 6rem;
}
sup {
  font-size: 2rem;
  vertical-align: text-top;
}
#description {
  font-size: 1.2rem;
}
@media (min-width: 1024px) {
  .weather-card {
    display: none;
  }
}
</style>
