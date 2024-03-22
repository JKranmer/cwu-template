<template>
  <!-- Banner -->
  <VBanner :path="`url(${banner.path})`" :title="banner.title" />

  <div>
    <section class="py-16">
      <v-container>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias enim
          vero totam pariatur, consequuntur nam impedit dolor eius non magnam
          dignissimos eaque! Amet dignissimos repellat soluta alias, dicta
          blanditiis voluptatum! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Alias enim vero totam pariatur, consequuntur nam
          impedit dolor eius non magnam dignissimos eaque! Amet dignissimos
          repellat soluta alias, dicta blanditiis voluptatum!
        </p>
        <div class="grid grid-cols-2 gap-8 mt-8 items-center">
          <div>
            <FormContato />
          </div>
          <v-img :path="banner.path" :alt="banner.title" />
        </div>
      </v-container>
    </section>
    <v-paralax class="py-8" img="https://picsum.photos/id/380/1920/920">
      <v-container>
        <v-card>
          <h3 class="text-xl mb-4 font-bold uppercase">Alguma coisa</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            reprehenderit qui error consectetur earum possimus maxime? Voluptas,
            nemo reprehenderit officia aperiam, delectus, atque ea quod
            voluptatem unde omnis asperiores fugiat!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
            similique beatae eligendi commodi quidem eum rem harum eius fuga cum
            cupiditate illo quis, quos porro recusandae maxime tempore atque
            totam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quidem odio odit perspiciatis facere rem vero nihil nulla, vel
            voluptate inventore laborum reiciendis ipsum asperiores molestias.
            Mollitia consectetur itaque natus ullam?
          </p>
        </v-card>
      </v-container>
    </v-paralax>
    <NewsLetter />
  </div>
</template>

<script setup lang="ts">
// import { onMounted } from "vue";
import VContainer from "@/components/atom/Container.vue";
import VBanner from "@/components/Banner.vue";
import VImg from "@/components/atom/Img.vue";
import FormContato from "@/components/FormContato.vue";
import NewsLetter from "@/components/NewsLetter.vue";
import VParalax from "@/components/Paralax.vue";
import VCard from "@/components/atom/Card.vue";

const banner = {
  path: "https://picsum.photos/id/350/1920/1920",
  title: "Contato",
};
</script>

<style scoped lang="scss"></style>
