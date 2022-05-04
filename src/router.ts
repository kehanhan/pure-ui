import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Introduction from './components/Introduction.vue'
import Installation from './components/Installation.vue'
import GetStarted from './components/GetStarted.vue'
import Switch from './components/Switch.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tab from './components/Tab.vue'

const history = createWebHashHistory();
export const router = createRouter(
    {
        history,
        routes:[
            {
                path:'/',
                component: Home
            },
            {
                path: '/doc',
                component: Doc,
                children:[
                    {
                        path: '',
                        component: Introduction
                    },
                    {
                        path: 'introduction',
                        component: Introduction
                    },
                    {
                        path: 'installation',
                        component: Installation
                    },
                    {
                        path: 'get-started',
                        component: GetStarted
                    },
                    {
                        path: 'switch',
                        component: Switch
                    },
                    {
                        path: 'button',
                        component: Button
                    },{
                        path: 'dialog',
                        component: Dialog
                    },{
                        path: 'tab',
                        component: Tab
                    },
                ]
            }
        ]
    }
);