import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Introduction from "./components/guides/Introduction.vue";
import Installation from "./components/guides/Installation.vue";
import GetStarted from "./components/guides/GetStarted.vue";
import SwitchDemo from "./components/demos/SwitchDemo.vue";
import ButtonDemo from "./components/demos/ButtonDemo.vue";
import DialogDemo from "./components/demos/DialogDemo.vue";
import TabDemo from "./components/demos/TabDemo.vue";

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "",
          component: Introduction,
        },
        {
          path: "introduction",
          component: Introduction,
        },
        {
          path: "installation",
          component: Installation,
        },
        {
          path: "get-started",
          component: GetStarted,
        },
        {
          path: "switch",
          component: SwitchDemo,
        },
        {
          path: "button",
          component: ButtonDemo,
        },
        {
          path: "dialog",
          component: DialogDemo,
        },
        {
          path: "tab",
          component: TabDemo,
        },
      ],
    },
  ],
});
