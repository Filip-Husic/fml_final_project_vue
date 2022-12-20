import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue';

import {router} from "./router/config";
import { createPinia } from "pinia";
import './assets/main.css'
// import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
    faHome,
    faUser,
    faUserPlus,
    faSignInAlt,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';


/* add icons to the library */
library.add(faUserSecret)
library.add(faArrowUp)
library.add(faBars)
library.add(faCamera)
library.add(faChevronDown)
library.add(faGithub)
library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

const pinia = createPinia();
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(pinia);
app.mount('#app');
