import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 按需引入element-ui
// import { Button,MenuItemGroup } from "element-ui";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import './components/SvgIcon'

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
