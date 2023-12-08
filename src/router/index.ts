import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NavioView from "@/views/NavioView.vue";
import PedidosView from "@/views/PedidosView.vue";
import LoginView from "@/views/LoginView.vue";
import LandingView from "@/views/LandingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/navios",
      name: "navios",
      component: NavioView,
    },
    {
      path: "/pedidos",
      name: "pedidos",
      component: PedidosView,
    },
  ],
});

export default router;
