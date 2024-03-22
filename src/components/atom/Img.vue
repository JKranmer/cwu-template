<template>
  <img :src="path" :alt="alt" class="shadow rounded-lg" />
</template>

<script setup lang="ts">
defineProps({
  path: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
