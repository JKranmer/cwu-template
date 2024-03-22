<template>
  <footer class="text-slate-50">
    <div class="pt-16 pb-8 bg-primary-medium">
      <v-container>
        <div class="grid grid-cols-3 gap-4">
          <div>
            <img src="https://picsum.photos/id/14/300/150" alt="" />
          </div>
          <div>
            <h3 class="text-lg uppercase mb-4 font-bold">Redes sociais</h3>
            <ul class="list-none">
              <li>
                <a
                  href="#"
                  target="_blank"
                  class="no-underline transition-opacity hover:opacity-50"
                  title="ComeWithUs_instagram"
                >
                  <!-- <i>Icon insta</i> -->
                  ComeWithUs_instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  class="no-underline transition-opacity hover:opacity-50"
                >
                  <!-- <i>Icon email</i>  -->
                  contato@cwu.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            dolorum culpa sunt vero blanditiis, aliquid excepturi explicabo
            voluptas ipsam quas, et eius. Repellat saepe suscipit veritatis
            perferendis atque eveniet? Provident?
          </div>
        </div>
      </v-container>
    </div>
    <div class="footer__end text-sm p-2 text-center bg-primary-dark">
      <v-container>
        ©
        <router-link
          to="/"
          class="no-underline font-bold transition-colors text-slate-300 hover:text-slate-50"
        >
          ComeWithUs
        </router-link>
        - {{ dateAge }}.
        <span class="text-slate-300">Desenvolvido por</span>
        <a
          href="https://www.linkedin.com/in/jonathas-kranmer-silva/"
          target="_blank"
          class="no-underline font-bold transition-colors text-slate-300 hover:text-slate-50"
        >
          @JonathasKranmerSilva
        </a>
      </v-container>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import VContainer from "./atom/Container.vue";
const dateAge = new Date().getFullYear();
</script>

<style scoped lang="scss"></style>
