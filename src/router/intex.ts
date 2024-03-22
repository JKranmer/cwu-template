import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "BaseView",
      component: () => import("../views/template/base.vue"),
      children: [
        {
          path: "/",
          name: "HomeView",
          component: Home,
        },
        {
          path: "/about",
          name: "AboutView",
          component: Home,
        },
        {
          path: "/contact",
          name: "ContactView",
          component: Home,
        },
        {
          path: "/blog",
          name: "BlogView",
          component: Home,
        },
      ],
    },
  ],
});

export default router;
