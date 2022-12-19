import {createRouter, createWebHistory, useRoute} from "vue-router";
import Homepage from "../components/Homepage.vue";
import Users from "../components/Users.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import PageNotFound from "../components/PageNotFound.vue";
import AboutUs from "../components/AboutUs.vue";


const routes = [
//[Vue Router warn]: No match found for location with path "/"
    {path: "/", name: "Home", component: Homepage},
    {path: "/user", name: "Users", component: Users},
    {path: "/login", name: "Login", component: Login},
    {path: "/register", name: "Register", component: Register},
    {path: "/about", name: "About", component: AboutUs},




    {path: "/:pathMatch(.*)*", name: "404", component: PageNotFound},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;