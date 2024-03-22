import { createApp } from "vue";
import "./assets/styles/main.scss";
import "animate.css";
import App from "./App.vue";
import router from "./router/intex";

const app = createApp(App);
app.use(router);
app.mount("#app");
