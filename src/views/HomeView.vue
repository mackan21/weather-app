<script setup>
import MainTemp from "../components/MainTemp.vue";
import SearchBar from "../components/SearchBar.vue";
import DailyForecast from "../components/DailyForecast.vue";
</script>
<template>
  <h1>SkySpy</h1>
  <SearchBar></SearchBar>
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
