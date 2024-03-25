<template>
  <!-- Banner -->
  <VBanner :path="`url(${banner.path})`" :title="banner.title" />
  <section class="py-16">
    <v-container class="">
      <div class="mb-4">
        <div class="flex text-slate-400 gap-4 text-sm">
          <div>00/00/0000</div>
          <div><b>Categoria:</b> Auto conhecimento</div>
          <div><b>Autor(a):</b> Nicole Gabrielly Kranmer Silva</div>
          <div><b>Quantidade de likes:</b> 205</div>
        </div>
        <div class="flex mt-2 gap-2">
          <v-tag color="salmon">auto-conhecimento</v-tag>
          <v-tag color="salmon">inspiração</v-tag>
          <v-tag color="salmon">origem</v-tag>
        </div>
      </div>
      <h1 class="text-xl font-bold uppercase py-4">0{{ id }} - Titulo blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet
        rem eligendi numquam officiis! Iste doloribus provident commodi neque!
        Sed aspernatur consectetur soluta facere ducimus temporibus
        exercitationem incidunt, nulla consequuntur.
      </p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet rem
      eligendi numquam officiis! Iste doloribus provident commodi neque! Sed
      aspernatur consectetur soluta facere ducimus temporibus exercitationem
      incidunt, nulla consequuntur. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Suscipit amet rem eligendi numquam officiis! Iste
      doloribus provident commodi neque! Sed aspernatur consectetur soluta
      facere ducimus temporibus exercitationem incidunt, nulla consequuntur.
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet
        rem eligendi numquam officiis! Iste doloribus provident commodi neque!
        Sed aspernatur consectetur soluta facere ducimus temporibus
        exercitationem incidunt, nulla consequuntur.
      </p>
      <div class="grid grid-cols-2 gap-4 my-8">
        <v-img :path="banner.path" alt="exemplo" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            amet rem eligendi numquam officiis! Iste doloribus provident commodi
            neque! Sed aspernatur consectetur soluta facere ducimus temporibus
            exercitationem incidunt, nulla consequuntur.
          </p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet
          rem eligendi numquam officiis! Iste doloribus provident commodi neque!
          Sed aspernatur consectetur soluta facere ducimus temporibus
          exercitationem incidunt, nulla consequuntur. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Suscipit amet rem eligendi numquam
          officiis! Iste doloribus provident commodi neque! Sed aspernatur
          consectetur soluta facere ducimus temporibus exercitationem incidunt,
          nulla consequuntur.
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            amet rem eligendi numquam officiis! Iste doloribus provident commodi
            neque! Sed aspernatur consectetur soluta facere ducimus temporibus
            exercitationem incidunt, nulla consequuntur.
          </p>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
// import { onMounted } from "vue";
import VBanner from "@/components/Banner.vue";
import VContainer from "@/components/atom/Container.vue";
import VTag from "@/components/atom/Tag.vue";
import VImg from "@/components/atom/Img.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const banner = {
  path: `https://picsum.photos/id/${id}/1920/1920`,
  title: "Blog 0" + id,
};
</script>

<style scoped lang="scss"></style>
