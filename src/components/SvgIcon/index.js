import Vue from 'vue'

import SvgIcon from '@/components/SvgIcon/index.vue' //引入项目中的svgIcon组件

Vue.component('svg-icon', SvgIcon) // 全局注册svg-icon组件
const req = require.context('../../assets/icons/svg', false, /\.svg$/) // 遍历获取 svg 目录下所有的 svg 文件（不包括子目录）
const requireAll = (requireContext) => {
    requireContext.keys().map(requireContext)
    console.log(requireContext.keys().map(requireContext))
}
requireAll(req)//返回svg文件夹下文件相对于整个工程的相对路径
