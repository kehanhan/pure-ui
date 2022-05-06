import { createApp, VueElement } from "vue";
import "./components/libs/pure.scss";
import App from "./App.vue";
import "./global.scss";
import { router } from "./router";
import Container from "./components/Container.vue";

const app = createApp(App);
app.use(router);
app.component("Container", Container);
app.mount("#app");
