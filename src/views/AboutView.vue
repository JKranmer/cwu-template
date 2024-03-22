<template>
  <!-- Banner -->
  <VBanner :path="`url(${banner.path})`" :title="banner.title" />

  <div>
    <section class="py-8">
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
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias enim
          vero totam pariatur, consequuntur nam impedit dolor eius non magnam
          dignissimos eaque! Amet dignissimos repellat soluta alias, dicta
          blanditiis voluptatum!
        </p>
        <div class="grid grid-cols-2 gap-4 mt-8 items-center">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              aliquid, laudantium distinctio natus expedita consequatur, rem
              quis eius, tempora aliquam dolore asperiores fuga veritatis ad.
              Sunt quo ipsum repellendus perspiciatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              qui quidem fugiat fugit natus, unde autem quos commodi labore
              voluptates, voluptatibus error eos! Quaerat dolor omnis modi.
              Quos, numquam a.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              qui quidem fugiat fugit natus, unde autem quos commodi labore
              voluptates, voluptatibus error eos! Quaerat dolor omnis modi.
              Quos, numquam a.
            </p>
          </div>
          <v-img :path="banner.path" :alt="banner.title" />
        </div>
      </v-container>
    </section>
    <section class="py-8 bg-rose-pure text-slate-800">
      <v-container>
        <h3 class="text-xl mb-4 font-bold uppercase">Sobre os Criadores</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          reprehenderit qui error consectetur earum possimus maxime? Voluptas,
          nemo reprehenderit officia aperiam, delectus, atque ea quod voluptatem
          unde omnis asperiores fugiat!
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
        <v-img
          path="https://picsum.photos/id/378/1920/920"
          alt="Imagem da equipe"
          class="mt-8"
        />
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
// import { onMounted } from "vue";
import VContainer from "@/components/atom/Container.vue";
import VBanner from "@/components/Banner.vue";
import VImg from "@/components/atom/Img.vue";

const banner = {
  path: "https://picsum.photos/id/16/1920/1920",
  title: "Sobre nós",
};
</script>

<style scoped lang="scss"></style>
