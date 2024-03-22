<template>
  <section class="bg-salmon-pure py-12">
    <v-container>
      <h3 class="text-xl text-left uppercase text-slate-50 mb-4">
        Fique por dentro das novidades!
      </h3>
      <div class="flex justify-between gap-4">
        <div class="w-full">
          <v-input
            type="text"
            v-model="form.full_name"
            placeholder="Nome completo"
          />
          <span v-if="form_error.full_name"> {{ form_error.full_name }}</span>
        </div>
        <div class="w-full">
          <v-input
            type="email"
            v-model="form.email"
            placeholder="exemplo.sobrenome@exemplo.com"
          />
          <span v-if="form_error.email"> {{ form_error.email }}</span>
        </div>
        <button
          class="rounded bg-white text-salmon-pure transition-opacity hover:opacity-50 p-4 uppercase font-bold h-[56px]"
          @click="send()"
        >
          Assinar
        </button>
      </div>
      {{ hasMensagem }}
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VContainer from "./atom/Container.vue";
import VInput from "./atom/Input.vue";

const form = ref({
  full_name: "",
  email: "",
});

const form_error = ref({
  full_name: "",
  email: "",
});

const hasMensagem = ref<string | null>(null);

const validateEmail = (email: string): boolean =>
  !email.includes("@") || !email.includes(".") || email.length < 5;

const isValidate = (): boolean => {
  let validate = true;
  if (!form.value.full_name) {
    form_error.value.full_name = "Campo obrigatório!";
    validate = false;
  } else {
    form_error.value.full_name = "";
    validate = true;
  }

  if (!form.value.email) {
    form_error.value.email = "Campo obrigatório!";
    validate = false;
  } else {
    form_error.value.email = "";
    validate = true;
  }

  if (validateEmail(form.value.email)) {
    form_error.value.email = "Email inválido!";
    validate = false;
  } else {
    form_error.value.email = "";
    validate = true;
  }
  return validate;
};

const send = () => {
  if (!isValidate()) return;
  hasMensagem.value = "Enviando...";
  setTimeout(() => {
    hasMensagem.value = "Enviado com sucesso!";
    form.value.full_name = "";
    form.value.email = "";
  }, 10000);
};
</script>

<style scoped lang="scss"></style>
