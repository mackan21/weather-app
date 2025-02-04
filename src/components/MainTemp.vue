<script setup></script>
<template>
  <section class="weather-card">
    <p id="name">Stockholm</p>
    <p id="date">23-Feb-2025</p>
    <p></p>
    <p id="temp">16<sup>o</sup></p>
    <p id="description">Moderate Rain</p>
  </section>
</template>
<style scoped>
.weather-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}
#name {
  font-size: 2rem;
}
#temp {
  font-size: 7rem;
}
sup {
  font-size: 3rem;
  vertical-align: text-top;
}
#description {
  font-size: 1.3rem;
}
</style>
