<script setup>
//Skapar reaktiv data, Skickar händelse
import { ref, defineEmits } from "vue";

//Variabel för sökning
const city = ref("");

//Skickar sökning till Homeview
const emit = defineEmits(["search"]);

//Fubktion för sökning
const search = () => {
  if (city.value.trim()) {
    emit("search", city.value);
    city.value = "";
  }
};
</script>
<template>
  <form @submit.prevent="search">
    <input
      type="text"
      autocomplete="off"
      placeholder="Search City"
      v-model="city"
    />
    <button type="submit">
      <i
        :class="
          city ? 'fa-solid fa-arrow-right' : 'fa-solid fa-magnifying-glass'
        "
      ></i>
    </button>
  </form>
</template>
<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 3px;
  border-color: white;
  border-radius: 50px;
  padding: 5px;
  margin: auto;
  margin-top: 1rem;
  width: 252px;
}
input,
button {
  border: none;
  background: transparent;
  font-size: 1.2rem;
  color: white;
  outline: none;
}
::placeholder {
  color: white;
  font-size: 1.2rem;
}
i {
  color: white;
  margin-right: 0.5rem;
  font-size: 1.2rem;
}
input {
  margin-left: 0.5rem;
  font-size: 1rem;
}
</style>
