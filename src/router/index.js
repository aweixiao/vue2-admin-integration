import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./roters";

Vue.use(VueRouter);

// 路由重复点击时报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
