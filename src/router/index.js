import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ArtistsIndex from "../views/ArtistsIndex.vue";
import ArtistsShow from "../views/ArtistsShow.vue";
import ArtistsNew from "../views/ArtistsNew.vue";
import EventsIndex from "../views/EventsIndex.vue";
import EventsShow from "../views/EventsShow.vue";
import UsersEvents from "../views/UsersEvents.vue";
import CategoriesIndex from "../views/CategoriesIndex.vue";
import CategoriesShow from "../views/CategoriesShow.vue";
import UsersShow from "../views/UsersShow.vue";
import Admin from "../views/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/artists",
    name: "artists-index",
    component: ArtistsIndex,
  },
  {
    path: "/artists/new",
    name: "artists-new",
    component: ArtistsNew,
  },
  {
    path: "/artists/:id",
    name: "artists-show",
    component: ArtistsShow,
  },

  {
    path: "/events",
    name: "events-index",
    component: EventsIndex,
  },
  {
    path: "/events/:id",
    name: "events-show",
    component: EventsShow,
  },
  {
    path: "/artist_events",
    name: "users-events",
    component: UsersEvents,
  },
  {
    path: "/categories",
    name: "categories-index",
    component: CategoriesIndex,
  },
  {
    path: "/categories/:id",
    name: "categories-show",
    component: CategoriesShow,
  },
  {
    path: "/my_artists",
    name: "users-show",
    component: UsersShow,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
