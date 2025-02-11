<script setup>
import { defineProps } from "vue";

const props = defineProps({
  forecast: Array,
});
</script>
<template>
  <section>
    <ul>
      <li v-for="day in forecast" :key="day.dt">
        {{
          new Date(day.dt * 1000).toLocaleDateString("en-GB", {
            weekday: "long",
          })
        }}
      </li>
    </ul>
    <ul>
      <li v-for="day in forecast" :key="day.dt">
        {{ Math.round(day.main.temp) }}°C
      </li>
    </ul>
  </section>
</template>
<style scoped>
li {
  list-style: none;
  margin-top: 1rem;
  font-size: 1.2rem;
}
section {
  display: flex;
  justify-content: space-between;
}
</style>
