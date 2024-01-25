import Layout from "@/Layout/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/index",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Index",
        meta: {
          title: "首页",
          icon: "home_page",
        },
        component: () => import("@/views/index.vue"),
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "home ",
        name: "Home",
        meta: {
          title: "Home",
          icon: "home_page",
          needCache: true,
        },
        component: () => import("@/views/Home/index.vue"),
      },
    ],
  },
  {
    path: "/about",
    // name: "About",
    redirect: "/about/about1",
    meta: {
      title: "About",
      icon: "home_page",
    },
    component: Layout,
    children: [
      {
        path: "about1",
        name: "About1",
        meta: {
          title: "About1",
          icon: "",
        },
        component: () => import("@/views/About/index.vue"),
      },
      {
        path: "/aIndex/aa",
        // redirect: "/aIndex/aa",
        name: "AIndex",
        meta: {
          title: "aIndex",
          icon: "",
        },
        component: () => import("@/views/A/index.vue"),
        children: [
          {
            path: "aa",
            name: "Aa",
            meta: {
              title: "aa",
              icon: "",
            },
            component: () => import("@/views/A/A.vue"),
          },
          {
            path: "ac",
            name: "Ac",
            meta: {
              title: "ac",
              icon: "",
              needCache: true,
            },
            component: () => import("@/views/A/C.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "todos",
        name: "Todos",
        meta: {
          title: "Todos",
          icon: "home_page",
        },
        component: () => import("@/views/Todos/index.vue"),
      },
    ],
  },
];

export default routes;
