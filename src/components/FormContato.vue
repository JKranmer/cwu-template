<template>
  <div class="flex gap-4 flex-col">
    <div class="w-full">
      <label for="name" class="text-sm text-slate-400">Nome:</label>
      <v-input v-model="form.name" type="text" />
    </div>
    <div class="w-full">
      <label for="subject" class="text-sm text-slate-400">Assunto:</label>
      <v-input v-model="form.subject" type="text" />
    </div>
    <div class="w-full">
      <label for="text" class="text-sm text-slate-400">Mensagem:</label>
      <v-input v-model="form.text" />
    </div>

    <button
      class="p-4 uppercase font-bold rounded transition-opacity hover:opacity-50 bg-salmon-pure text-slate-50"
    >
      Enviar
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VInput from "./atom/Input.vue";

const form = ref({
  subject: "",
  name: "",
  text: "",
});
</script>

<style scoped></style>
