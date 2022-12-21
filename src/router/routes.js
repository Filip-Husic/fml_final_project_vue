import HomepageView from "@/views/HomepageView.vue";
import UsersView from "@/views/UsersView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import LogoutView from "@/views/LogoutView.vue";
import UserInfoView from "@/views/UserInfoView.vue";
import UserProfileView from "@/views/UserProfileView.vue";


export const routes = [
    {
        name: "Home",
        path: "/",
        alias: "/home",
        component: HomepageView,
        meta: {
            requiresAuth: false
        }
    },

    {
        name: "Register",
        path: "/register",
        component: RegisterView,
        meta: {
            requiresAuth: false
        }
    },

    {
        name: "Login",
        path: "/login",
        component: LoginView,
        meta: {
            requiresAuth: false
        }
    },

    {
        name: "Logout",
        path: "/logout",
        component: LogoutView,
        meta: {
            requiresAuth: true
        }
    },

    {
        name: "Users",
        path: "/user",
        component: UsersView,
        meta: {
            requiresAuth: true
        }
    },

    {
        name: "userInfo",
        path: "/user/:userId",
        component: UserInfoView,
        props: route => ({ userId: Number(route.params.userId)}),
        meta: {
            requiresAuth: true
        }
    },

    {
        name: "profile",
        path: "/profile",
        component: UserProfileView,
        meta: {
            requiresAuth: true
        }
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