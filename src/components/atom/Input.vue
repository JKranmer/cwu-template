<template>
  <input
    class="p-4 mb-2 rounded border-2 w-full box-border"
    v-bind="$attrs"
    v-model="value"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
</script>

<style scoped></style>
