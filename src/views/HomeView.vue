<template>
  <!-- Carosel -->
  <v-carossel
    :carossel-data="carosselData"
    :options="{ opacity: 0.5, posicion: 'center' }"
  />
  <div>
    <section class="py-8 bg-sand-pure text-slate-800">
      <v-container>
        <div class="grid grid-cols-3 gap-4">
          <div>
            <h2>Titulo 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              qui ea, deserunt voluptatum corporis modi eum nihil ad? Eos
              tenetur perspiciatis eius rerum recusandae molestias aut minus
              dignissimos omnis magni!
            </p>
          </div>
          <div>
            <h2>Titulo 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              qui ea, deserunt voluptatum corporis modi eum nihil ad? Eos
              tenetur perspiciatis eius rerum recusandae molestias aut minus
              dignissimos omnis magni!
            </p>
          </div>
          <div>
            <h2>Titulo 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              qui ea, deserunt voluptatum corporis modi eum nihil ad? Eos
              tenetur perspiciatis eius rerum recusandae molestias aut minus
              dignissimos omnis magni!
            </p>
          </div>
        </div>
      </v-container>
    </section>
    <v-paralax img="https://picsum.photos/id/27/1920/800">
      <v-container>
        <div class="flex justify-end">
          <v-card>
            <h1>Titulo 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              qui ea, deserunt voluptatum corporis modi eum nihil ad? Eos
              tenetur perspiciatis eius rerum recusandae molestias aut minus
              dignissimos omnis magni!
            </p>
          </v-card>
        </div>
      </v-container>
    </v-paralax>
    <section class="py-8">
      <v-container>
        <h1>Home</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias enim
          vero totam pariatur, consequuntur nam impedit dolor eius non magnam
          dignissimos eaque! Amet dignissimos repellat soluta alias, dicta
          blanditiis voluptatum! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Alias enim vero totam pariatur, consequuntur nam
          impedit dolor eius non magnam dignissimos eaque! Amet dignissimos
          repellat soluta alias, dicta blanditiis voluptatum!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias enim
          vero totam pariatur, consequuntur nam impedit dolor eius non magnam
          dignissimos eaque! Amet dignissimos repellat soluta alias, dicta
          blanditiis voluptatum!
        </p>
      </v-container>
    </section>
    <v-news-letter />
  </div>
</template>

<script setup lang="ts">
// import { onMounted } from "vue";
import VCarossel from "@/components/Carossel.vue";
import VParalax from "@/components/Paralax.vue";
import VNewsLetter from "@/components/NewsLetter.vue";
import VContainer from "@/components/atom/Container.vue";
import VCard from "@/components/atom/Card.vue";

const carosselData = [
  {
    title: "Titulo 10",
    img: "url(https://picsum.photos/id/684/1920/800)",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim vero totam pariatur, consequuntur nam impedit dolor eius non magnam dignissimos eaque! Amet dignissimos repellat soluta alias, dicta blanditiis voluptatum!",
  },
  {
    title: "Titulo 20",
    img: "url(https://picsum.photos/id/685/1920/800)",
  },
  {
    title: "Titulo 30",
    img: "url(https://picsum.photos/id/686/1920/800)",
  },
];
</script>

<style scoped lang="scss">
.section {
  padding: 2rem 0;
  &--gray {
    @extend .section;
    background-color: #f4f4f4;
  }
}
.card {
  background-color: #00000080;
  padding: 2rem;
  margin: 2rem 0;
  color: white;
  max-width: 500px;
  width: 100%;
}
</style>
