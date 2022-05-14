import { createApp, VueElement } from "vue";
import "./components/libs/pure.scss";
import App from "./App.vue";
import "./global.scss";
import { router } from "./router";
import "github-markdown-css";

// iconfont
import "https://at.alicdn.com/t/font_3397136_956a78uliy.js";
import Icon from "./components/Icon.vue";

import Container from "./components/Container.vue";

const app = createApp(App);
app.use(router);
app.component("Container", Container);
app.component("Icon", Icon);
app.mount("#app");
