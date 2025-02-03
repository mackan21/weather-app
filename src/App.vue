<script setup></script>

<template>
  <main>
    <RouterView />
  </main>
  <nav>
    <ul>
      <li>
        <RouterLink to="/" class="routerlink">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/details" class="routerlink">Details</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: center;
}
li {
  list-style: none;
}
.routerlink {
  color: white;
  text-decoration: none;
}
</style>
