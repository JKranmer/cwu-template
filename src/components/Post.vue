<template>
  <div class="rounded-lg p-4 border-2 gap-8 mb-4 w-full shadow-lg">
    <figure class="zoom_post rounded-lg cursor-pointer">
      <v-img :path="data.path" :alt="data.title" />
    </figure>
    <img src="" alt="" />
    <h3 class="font-bold my-4">{{ data.title }}</h3>
    <div class="flex justify-between">
      <div>
        {{ data.date }}
      </div>
      <div>{{ data.like }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VImg from "@/components/atom/Img.vue";
interface IPost {
  path: string;
  title: string;
  date: string;
  like: number;
  id: number;
}

defineProps({
  data: {
    type: Object as () => IPost,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.zoom_post {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
  }
  &:hover img {
    transform: scale(1.1);
  }
}
</style>
