import HomepageView from "@/views/HomepageView.vue";
import UsersView from "@/views/UsersView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import LogoutView from "@/views/LogoutView.vue";
import UserInfoView from "@/views/UserInfoView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import NewPostView from "@/views/NewPostView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import ThankYouView from "@/views/ThankYouView.vue";


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
        name: "Checkout",
        path: "/:id",
        component: CheckoutView,
        meta: {
            requiresAuth: true
        },
    },

    {
        name: "ThankYou",
        path: "/thankyou",
        component: ThankYouView,
        meta: {
            requiresAuth: true
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
        name: "NewPost",
        path: "/newPost",
        component: NewPostView,
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
        name: "UserInfo",
        path: "/user/:userId",
        component: UserInfoView,
        props: route => ({userId: Number(route.params.userId)}),
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