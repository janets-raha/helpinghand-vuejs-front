import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/registeruser",
    name: "RegisterUser",
    component: () =>
      import(/* webpackChunkName: "volunteers" */ "../views/RegisterUser.vue")
  },

  //routes ngos only

  {
    path: "/login-ngo",
    name: "LoginNgo",
    component: () =>
      import(/* webpackChunkName: "loginngo" */ "../views/LoginNgo.vue")
  },
  {
    path: "/ngos",
    name: "RegisterNgo",
    component: () =>
      import(/* webpackChunkName: "registerngo" */ "../views/RegisterNgo.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue")
  }

  //routes missions only
];

const router = new VueRouter({
  routes
});

export default router;
