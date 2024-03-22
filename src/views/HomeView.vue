<template>
  <!-- Carosel -->
  <v-carossel
    :carossel-data="carosselData"
    :options="{ opacity: 0.5, posicion: 'center' }"
  />
  <div>
    <div class="section--gray">
      <div class="container">
        <div class="flex">
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
      </div>
    </div>
    <v-paralax img="https://picsum.photos/id/27/1920/800">
      <div class="container">
        <div class="flex--end">
          <div class="card">
            <h1>Titulo 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              qui ea, deserunt voluptatum corporis modi eum nihil ad? Eos
              tenetur perspiciatis eius rerum recusandae molestias aut minus
              dignissimos omnis magni!
            </p>
          </div>
        </div>
      </div>
    </v-paralax>
    <div class="section">
      <div class="container">
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
      </div>
    </div>
    <v-news-letter />
  </div>
</template>

<script setup lang="ts">
// import { onMounted } from "vue";
import VCarossel from "@/components/Carossel.vue";
import VParalax from "@/components/Paralax.vue";
import VNewsLetter from "@/components/NewsLetter.vue";

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
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  margin: 2rem 0;
  color: white;
  max-width: 500px;
  width: 100%;
}
</style>
