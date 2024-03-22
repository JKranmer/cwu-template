<template>
  <nav>
    <div class="container">
      <ul>
        <li v-for="link in links" :key="link.name">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

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

<style scoped lang="scss">
nav {
  background-color: $brand-color-primary-pure;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 1);
  ul {
    list-style: none;
    padding-left: 0;
    margin: 1rem 0;
    display: flex;
    li {
      a {
        padding: 0.5rem 1rem 0.5rem 0;
        text-decoration: none;
        color: $neutral-color-hight-medium;
        transition: 0.2s ease-in-out opacity;
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
