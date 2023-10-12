<template>
    <div class="app_main">
        <!-- 侧边菜单栏 -->
        <SideMenuBar />
        <!-- 内容区域 -->
        <keep-alive>
            <router-view :key="key" />
        </keep-alive>
    </div>
</template>

<script>
import SideMenuBar from "@/Layout/components/SideMenuBar"
export default {
    name: 'Index',
    components: { SideMenuBar },
    data() {
        return {

        };
    },

    computed: {
        key() {
            return this.$route.path
        }
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.app_main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    background-color: #ffffff;
}
</style>