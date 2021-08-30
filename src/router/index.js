import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/portfolio-vue/",
    name: "Home",
    children: [
      {
        path: "/main",
        name: "main",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/components/main.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/components/about.vue"),
      },
    ],
    component: () =>
      import(/* webpackChunkName: "layout" */ "@/views/layout.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
