<script setup>
import MainTemp from "../components/MainTemp.vue";
import SearchBar from "../components/SearchBar.vue";
</script>
<template>
  <h1>SkySpy</h1>
  <SearchBar></SearchBar>
  <MainTemp></MainTemp>
  <div class="router-button">
    <RouterLink to="/details" class="routerlink">Details</RouterLink>
  </div>
</template>
<style scoped>
.routerlink {
  color: white;
  text-decoration: none;
}
.router-button {
  border: 3px solid white;
  text-align: center;
  width: 5rem;
  margin: auto;
}
h1 {
  text-align: center;
}
</style>
