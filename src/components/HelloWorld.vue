<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>父组件的值：{{ countFather }}</p>
    <el-button type="default" @click="handle">add</el-button>
    <br/>
    <slot name="footer"></slot>
    <br/>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    countFather:{
      type:[String,Number],
      // required: true
    }
  },
  data(){
    return {
      childCount:0
    }
  },
  methods:{
    handle(){
      this.childCount++
      this.$emit('childCountChange', this.childCount)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
