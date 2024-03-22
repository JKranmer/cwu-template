import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "@/views/AboutView.vue";

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
          meta: {
            title: "Início",
          },
        },
        {
          path: "/about",
          name: "AboutView",
          component: About,
          meta: {
            title: "Sobre nós",
          },
        },
        {
          path: "/contact",
          name: "ContactView",
          component: Home,
          meta: {
            title: "Contato",
          },
        },
        {
          path: "/blog",
          name: "BlogView",
          component: Home,
          meta: {
            title: "Blog",
          },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || "Your Default Title";
  next();
});

export default router;
