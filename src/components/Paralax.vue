<template>
  <div class="paralax" :style="{ backgroundImage: url, height: height }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: "auto",
    required: false,
  },
});

const url = `url(${props.img})`;
</script>

<style scoped type="scss">
.paralax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem;
  box-shadow: inset 0px 4rem 3.75rem -4rem rgba(0, 0, 0, 0.75);
}
</style>
