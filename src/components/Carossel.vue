<template>
  <div class="flex overflow-hidden">
    <div
      class="min-w-[100vw] h-[500px] bg-no-repeat bg-center bg-cover animate__animated animate__fadeIn text-slate-300"
      v-for="(img, index) in props.carosselData"
      :style="{ backgroundImage: img.img }"
      :id="`carossel--item-${index}`"
      v-show="index === 0"
    >
      <div
        class="h-full w-full flex flex-col items-center justify-center"
        :style="{
          background: darkProp,
        }"
      >
        <v-container
          :style="{ textAlign: props.options.posicion as TPosition }"
        >
          <h1 class="">{{ img.title }}</h1>
          <p v-if="img.description">
            {{ img.description }}
          </p>
          <button @click="prev" :data-item="index">Prev</button>
          <button @click="next" :data-item="index">Next</button>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import VContainer from "@/components/atom/Container.vue";

type TPosition = "center" | "left" | "right";

interface IDataCarossel {
  title: string;
  img: string;
  description?: string;
}

interface IOptions {
  opacity: number;
  posicion: TPosition;
}

const props = defineProps({
  carosselData: {
    type: Array<IDataCarossel>,
    required: true,
  },
  options: {
    type: Object as () => IOptions,
    default: {
      opacity: {
        type: Number,
        default: 0.5,
        required: false,
      },
      posicion: {
        type: String as () => TPosition,
        default: "center",
        required: false,
      },
    },
  },
});
const darkProp = `rgba(0, 0, 0, ${props.options.opacity})`;

const prev = (e: any) => {
  const el =
    (document.querySelector(
      `#carossel--item-${Number(e.target.dataset.item) - 1}`
    ) as HTMLSelectElement) ||
    (document.querySelector(
      `#carossel--item-${props.carosselData.length - 1}`
    ) as HTMLSelectElement);
  changeCarossel(el);
};

const next = (e: any) => {
  const el =
    (document.querySelector(
      `#carossel--item-${Number(e.target.dataset.item) + 1}`
    ) as HTMLSelectElement) ||
    (document.querySelector(`#carossel--item-0`) as HTMLSelectElement);
  changeCarossel(el);
};

const changeCarossel = (el: HTMLSelectElement) => {
  if (!el) return;
  const elementos = document.querySelectorAll(".animate__animated") as any;
  for (const el of elementos) {
    el.style.display = "none";
  }
  el.style.display = "block";
};

onMounted(() => {});
</script>

<style scoped lang="scss"></style>
