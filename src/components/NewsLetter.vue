<template>
  <div class="newsletter">
    <div class="container">
      <h3>Fique por dentro das novidades!</h3>
      <p></p>
      <div class="form">
        <div>
          <input
            type="text"
            v-model="form.full_name"
            placeholder="Nome completo"
          />
          <span v-if="form_error.full_name"> {{ form_error.full_name }}</span>
        </div>
        <div>
          <input
            type="email"
            v-model="form.email"
            placeholder="exemplo.sobrenome@exemplo.com"
          />
          <span v-if="form_error.email"> {{ form_error.email }}</span>
        </div>
        <button @click="send()">Assinar</button>
      </div>
      {{ hasMensagem }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

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

<style scoped lang="scss">
.newsletter {
  background-color: $brand-color-primary-pure;
  padding: 2rem 0;
  h3 {
    color: $neutral-color-hight-medium;
    text-align: left;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  p {
    color: $neutral-color-hight-medium;
    text-align: center;
  }
  .form {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    > div {
      width: 100%;
    }
    input {
      padding: 1rem;
      margin-bottom: 0.5rem;
      border-radius: 0.25rem;
      border: none;
      width: 100%;
      box-sizing: border-box;
    }
    button {
      padding: 0.5rem 1rem;
      margin: 0.5rem;
      border-radius: 0.5rem;
      border: none;
      background-color: $brand-color-secondary-pure;
      color: $neutral-color-hight-medium;
      transition: 0.2s ease-in-out opacity;
      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>
