<template>
  <!-- Banner -->
  <VBanner :path="`url(${banner.path})`" :title="banner.title" />
  <section class="py-16">
    <v-container>
      <div class="columns-3 gap-x box-content">
        <v-post v-for="post in posts" :data="post" class="break-inside-avoid" />
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
// import { onMounted } from "vue";
import VBanner from "@/components/Banner.vue";
import VPost from "@/components/Post.vue";
import VContainer from "@/components/atom/Container.vue";

const banner = {
  path: "https://picsum.photos/id/16/1920/1920",
  title: "Blog",
};

const posts = [
  {
    id: 1,
    path: "https://picsum.photos/id/16/1920/1080",
    title: "Exemplo 1",
    date: "00/00/0000",
    like: 10,
  },
  {
    id: 2,
    path: "https://picsum.photos/id/17/1920/1920",
    title: "Exemplo 2",
    date: "00/00/0000",
    like: 10,
  },
  {
    id: 3,
    path: "https://picsum.photos/id/18/1920/1920",
    title: "Exemplo 3 de tamanha maior que o normal",
    date: "00/00/0000",
    like: 10,
  },
  {
    id: 4,
    path: "https://picsum.photos/id/19/1920/1920",
    title:
      "Exemplo 4 de tamanha maior que o normal e mais um pouco, que o normal e mais um pouco",
    date: "00/00/0000",
    like: 100,
  },
  {
    id: 1,
    path: "https://picsum.photos/id/16/1920/1920",
    title:
      "Exemplo 5 de tamanha maior que o normal e mais um pouco, que o normal e mais um pouco",
    date: "00/00/0000",
    like: 10,
  },
  {
    id: 2,
    path: "https://picsum.photos/id/17/1920/1920",
    title: "Exemplo 2",
    date: "00/00/0000",
    like: 10,
  },
  {
    id: 3,
    path: "https://picsum.photos/id/18/1920/1920",
    title: "Exemplo 3 de tamanha maior que o normal",
    date: "00/00/0000",
    like: 10,
  },
  {
    id: 4,
    path: "https://picsum.photos/id/19/1920/1920",
    title: "Exemplo 4 de tamanha maior que o normal e mais um pouco",
    date: "00/00/0000",
    like: 100,
  },
];
</script>

<style scoped lang="scss"></style>
