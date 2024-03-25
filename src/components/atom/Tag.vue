<template>
  <div
    class="text-sm rounded-full text-slate-50 px-2 py-1"
    :class="EColor[color]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
enum EColor {
  rose = "bg-rose-pure",
  blue = "bg-blue-medium",
  sand = "bg-sand-pure",
  salmon = "bg-salmon-pure",
}

const props = withDefaults(
  defineProps<{
    color: keyof typeof EColor;
  }>(),
  {
    color: "rose",
  }
);
</script>

<style scoped></style>
