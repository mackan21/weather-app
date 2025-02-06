<script setup></script>
<template>
  <h1>SkySpy</h1>
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
</style>
