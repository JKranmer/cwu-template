<template>
  <v-nav />
  <RouterView></RouterView>
  <v-footer />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import VNav from "../../components/Nav.vue";
import VFooter from "../../components/Footer.vue";
</script>

<style scoped></style>
