<template>
  <div>
    <h6>
      首页111
    </h6>
    <div class="project-layout">
      <svg-icon icon="top_left" width="26" height="26" color="#cc85c6"></svg-icon>
    </div>
    <template>
      <div ref="chart" style="width: 100%; height: 400px;"></div>
    </template>
  </div>

</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'Index',

  data() {
    return {
      myChart: null,
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
    };
  },
  created() {
  },
  mounted() {
    // 初始化 ECharts 实例
    this.myChart = echarts.init(this.$refs.chart);

    // 监听窗口大小变化
    window.addEventListener('resize', this.handleResize);

    // 初始化图表数据等
    this.initChart();
  },
  methods: {
    initChart() {
      // 添加图表配置等操作
      this.myChart.setOption(this.option);
    },
    handleResize() {
      // 使用 $nextTick 来等待 DOM 更新后再进行 resize
      this.$nextTick(() => {
        if (this.myChart) {
          this.myChart.resize();
        }
      });
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    if (this.myChart) {
      this.myChart.dispose();
    }
  },
};
</script>

<style lang="scss" scoped></style>