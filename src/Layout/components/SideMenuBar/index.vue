<template>
  <div id="app">
    <el-menu router :default-active="activeMenu" active-text-color="#409EFF" class="el-menu-vertical-demo"
      @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <menu-item v-for="item in routes" :key="item.path" :route="item" :base-path="item.path" />
    </el-menu>
  </div>
</template>

<script>
import Item from "./item"
export default {
  name: 'Index',
  components: { 'menu-item': Item },
  data() {
    return {
      // activeRoute: this.$route.path,
      isCollapse: false
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { path } = route
      return path
    },
  },
  created() {
  },
  mounted() {

  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>