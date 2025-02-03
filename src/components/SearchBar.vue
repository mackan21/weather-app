<script setup></script>
<template>
  <form action="">
    <input
      type="text"
      id="search-input"
      autocapitalize="off"
      placeholder="Search City"
    />
    <button><i class="fa-solid fa-magnifying-glass"></i></button>
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
  margin-top: 2rem;
}
input,
button {
  border: none;
  background: transparent;
  font-size: 1rem;
  color: white;
  outline: none;
}
::placeholder {
  color: white;
  font-size: 1.1rem;
}
i {
  color: white;
  margin-right: 0.5rem;
  font-size: 1.1rem;
}
input {
  margin-left: 0.5rem;
  font-size: 1.1rem;
}
</style>
