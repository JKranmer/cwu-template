<template>
  <div
    class="min-w-[100vw] h-[300px] bg-no-repeat bg-center bg-cover animate__animated animate__fadeIn text-slate-50"
    :style="{ backgroundImage: path }"
  >
    <div
      class="h-full w-full flex flex-col items-center justify-center"
      :style="{
        background: darkProp,
      }"
    >
      <v-container>
        <h1 class="text-2xl font-bold uppercase text-center">{{ title }}</h1>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import VContainer from "./atom/Container.vue";
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  opacity: {
    type: Number,
    required: false,
    default: 0.5,
  },
  title: {
    type: String,
    required: true,
  },
});

const darkProp = `rgba(0, 0, 0, ${props.opacity})`;
</script>

<style scoped></style>
