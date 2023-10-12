<template>
  <div class="home">
    <p>子组件的值{{ childData }}</p>
    <HelloWorld msg="Welcome to Your Vue.js App" :countFather="count" @childCountChange="handle">
      <template #footer="{ childCount }">第一个footer{{ childCount }}</template>
    </HelloWorld>
    <HelloWorld>默认插槽1</HelloWorld>
    <HelloWorld>默认插槽2</HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      count: 77,
      childData: 0
    }
  },
  methods: {
    // 自定义事件 接受子组件的传值
    handle(childCount) {
      this.childData = childCount
    }
  }
}
</script>
