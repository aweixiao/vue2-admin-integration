import Layout from "@/Layout/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/index",
    component: Layout,
    children: [
      {
        path: "index",
        name: "index",
        meta: {
          title: "首页",
          icon: "el-icon-s-home",
          activeMenu: "/index",
        },
        component: () => import("@/views/index.vue"),
      },
    ],
  },
  {
    path: "/home",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Home",
        meta: {
          title: "Home",
          icon: "el-icon-s-home",
          needCache: true,
        },
        component: () => import("@/views/Home/index.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    redirect: "/about/about1",
    meta: {
      title: "About",
      icon: "el-icon-s-home",
    },
    component: Layout,
    children: [
      {
        path: "about1",
        name: "about",
        meta: {
          title: "About1",
        },
        component: () => import("@/views/About/index.vue"),
      },
      {
        path: "aIndex",
        name: "aIndex",
        meta: {
          title: "aIndex",
        },
        component: () => import("@/views/A/index.vue"),
        children: [
          {
            path: "aa",
            name: "aa",
            meta: {
              title: "aa",
              // icon: "el-icon-s-home",
            },
            component: () => import("@/views/A/A.vue"),
          },
          {
            path: "ac",
            name: "ac",
            meta: {
              title: "ac",
              // icon: "el-icon-s-home",
              needCache: true,
            },
            component: () => import("@/views/A/C.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/todos",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Todos",
        meta: {
          title: "Todos",
          icon: "el-icon-s-home",
        },
        component: () => import("@/views/Todos/index.vue"),
      },
    ],
  },
];

export default routes;
