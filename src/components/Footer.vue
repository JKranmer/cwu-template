<template>
  <footer class="footer">
    <div class="footer__body">
      <div class="container">
        <div class="grid grid-cols-3 gap-4">
          <div>
            <img src="https://picsum.photos/id/14/300/150" alt="" />
          </div>
          <div>
            <ul class="footer__body--social-media">
              <li>
                <a href="#" target="_blank"
                  ><i class="fa-brands fa-square-facebook"></i>
                  ComeWithUs_facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank"
                  ><i class="fa-brands fa-instagram"></i> ComeWithUs_instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank"
                  ><i class="fa-brands fa-square-pinterest"></i>
                  ComeWithUs_pinterest
                </a>
              </li>
              <li>
                <a href="#" target="_blank"
                  ><i class="fa-brands fa-youtube"></i> ComeWithUs_youtube
                </a>
              </li>
              <li>
                <a href="#" target="_blank"
                  ><i class="fa-brands fa-discord"></i> ComeWithUs_discord
                </a>
              </li>
              <li>
                <a href="#" target="_blank"
                  ><i class="fa-brands fa-telegram"></i> ComeWithUs_telegram
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
      </div>
    </div>
    <div class="footer__end">
      <div class="container">
        ©
        <router-link to="/"> ComeWithUs </router-link>
        - {{ dateAge }}.
        <span class="prog">Desenvolvido por</span>
        <a
          href="https://www.linkedin.com/in/jonathas-kranmer-silva/"
          target="_blank"
        >
          @JonathasKranmerSilva
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
const dateAge = new Date().getFullYear();
</script>

<style scoped lang="scss">
.footer {
  color: $neutral-color-hight-medium;
  &__body {
    padding: 4rem 0 2rem 0;
    background-color: $brand-color-primary-medium;
    .container {
      display: flex;
    }
    &--social-media {
      list-style: none;
      padding: 0 1rem;
      width: max-content;
      a {
        text-decoration: none;
        color: $neutral-color-hight-medium;
      }
    }
  }
  &__end {
    font-size: 1rem;
    padding: 0.5rem;
    text-align: center;
    background-color: $brand-color-primary-dark;
    a {
      text-decoration: none;
      font-weight: bold;
      transition: ease-in-out 0.2s color;
      color: $neutral-color-low-light;

      &:hover {
        color: $neutral-color-hight-light;
      }
    }
    .prog {
      color: $neutral-color-low-light;
    }
  }
}
</style>
