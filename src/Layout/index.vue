<template>
    <div class="app_main">
        <!-- 侧边菜单栏 -->
        <SideMenuBar />
        <!-- 内容区域 -->
        <div class="app_contet">
            <div>
                <Navbar />
            </div>
            <router-view :key="key" />
        </div>
    </div>
</template>

<script>
import SideMenuBar from "@/Layout/components/SideMenuBar"
import Navbar from "@/Layout/components/Navbar"
export default {
    name: 'Index',
    components: { SideMenuBar, Navbar },
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

    .app_contet {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
}
</style>