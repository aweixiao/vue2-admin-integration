<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      //svg图标名称
      type: String,
      required: true
    },
    color: {
      //svg颜色
      type: String,
      // default: '#409eff'
    },
    width: {
      //svg宽度
      type: [Number, String],
      default: 20
    },
    height: {
      //svg高度
      type: [Number, String],
      default: 20
    }
  },
  data() {
    return {}
  },
  computed: {
    iconName() {
      return `#icon-${this.icon}`
    }
  }
}
</script>

<template>
  <svg
      class="svg-icon"
      :style="{
      width: width + 'px',
      height: height + 'px',
    }"
  >
    <use :xlink:href="iconName" :fill="color"></use>
  </svg>

</template>

<style scoped lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>