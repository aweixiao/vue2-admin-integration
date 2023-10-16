<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
            <span v-if="index == breadList.length - 1" class="breadcrumb-span">{{ item.meta.title }}</span>
            <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
import * as pathToRegexp from 'path-to-regexp'
export default {
    name: 'Breadcrumb',

    data() {
        return {
            breadList: null
        };
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    },
    created() {
        this.getBreadcrumb()
    },
    methods: {
        // 获取要显示的面包屑数组
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
            const first = matched[0]

            // 是否包含路由第0个(即首页);不包含 将首页路由信息手动添加至面包屑数组
            if (!this.isDashboard(first)) {
                matched = [{ path: '/index', meta: { title: '首页' } }].concat(matched)
            }
            this.breadList = matched.filter(item => item.meta && item.meta.title)
        },
        isDashboard(obj) {
            const name = obj && obj.name
            if (!name) {
                return false
            }
            if (name.charCodeAt() > 255) {
                return true
            }
            return name.trim().toLocaleLowerCase() === 'Index'.toLocaleLowerCase()
        },
        // 根据路由信息跳转页面
        handleLink(item) {
            const { redirect, path } = item
            // 存在重定向路由，直接使用重定向路由
            if (redirect) {
                this.$router.push(redirect)
                return
            }
            console.log(path);
            this.$router.push(this.pathCompile(path))
        },
        // 根据
        pathCompile(path) {
            const { params } = this.$route
            let toPath = pathToRegexp.compile(path)
            return toPath(params)
        },
    },
};
</script>

<style lang="scss" scoped>
.app-breadcrumb {
    .breadcrumb-span {
        color: #606266;
        cursor: text;
    }
}
</style>