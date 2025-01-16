import { createRouter, createWebHistory } from "vue-router";
import Loggin from "./components/Loggin.vue";
import Products from "./components/Products.vue";
import Home from "./components/home.vue";
const routes = [
  {
    path: "/login",
    name: "Loggin",
    component: Loggin,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/",
    name: "homePage",
    component:Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  console.log(to);
  console.log(from);

  let isAuthenticated = false;

  if (localStorage.getItem('email') && localStorage.getItem('name') && localStorage.getItem('picture')) {
    isAuthenticated = true;
  };
console.log(isAuthenticated)
  if (to.name === "Loggin" && isAuthenticated) {
    return {name: 'Products'}
  } else if (to.name === "Products" && !isAuthenticated) {
    return {name: "Loggin"};
  } else {
    return true;
  }
});

export default router;