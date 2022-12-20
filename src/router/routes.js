import {createRouter, createWebHistory} from "vue-router";
import HomepageView from "@/views/HomepageView.vue";
import UsersView from "@/views/UsersView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";


const routes = [
    {
        name: "Home",
        path: "/",
        component: HomepageView
    },

    {
        name: "Users",
        path: "/user",
        component: UsersView
    },

    {
        name: "Login",
        path: "/login",
        component: LoginView
    },

    {
        name: "Register",
        path: "/register",
        component: RegisterView
    },

    {
        name: "About",
        path: "/about",
        component: AboutUsView
    },



    //** 404 error do not change!!!!**
    {
        name: "404",
        path: "/:pathMatch(.*)*",
        component: PageNotFoundView
    },
    //** 404 error do not change!!!!**
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;