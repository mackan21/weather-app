import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import DetailsView from "./views/DetailsView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: DetailsView,
      path: "/details",
    },
    {
      component: HomeView,
      path: "/",
    },
  ],
});
