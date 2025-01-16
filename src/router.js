import { createRouter, createWebHistory } from "vue-router";
import Loggin from "./components/Loggin.vue";
import Products from "./components/Products.vue";

const routes = [
  {
    path: "/",
    name: "Loggin",
    component: Loggin,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;