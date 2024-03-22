<template>
  <div class="h-[56px]"></div>
  <nav class="fixed top-0 w-full z-50 shadow-lg bg-primary-pure">
    <v-container>
      <ul class="list-none pl-0 my-4 flex gap-x-8 gap-y-4">
        <li v-for="link in links" :key="link.name">
          <router-link
            :to="link.path"
            class="no-underline transition-opacity hover:opacity-50 text-slate-300"
            :class="{ 'font-bold text-slate-50': isActive(link.path) }"
            >{{ link.name }}</router-link
          >
        </li>
      </ul>
    </v-container>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import VContainer from "@/components/atom/Container.vue";

const isActive = (route: string) => {
  const currentRoute = useRoute();
  return currentRoute.path === route;
};

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Sobre nós",
    path: "/about",
  },
  {
    name: "Contato",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];
</script>

<style scoped lang="scss"></style>
