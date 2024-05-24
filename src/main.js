import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
//bootstrap
import { createBootstrap } from "bootstrap-vue-next";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
//scss, harus dibawah bootstrap
import "@/assets/scss/style.scss";
import "@/assets/styles/style.css";

const app = createApp(App).use(store).use(router);
app.use(createBootstrap({ components: true, directives: true }));
app.mount("#app");
