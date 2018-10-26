<template>
    <div>
        <div id="myChart" :style="{width: '500px', height: '500px'}">
            
        </div>
    </div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require('echarts/lib/chart/bar');
// 引入提示框和title组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');


export default {
  name: "chartcurve",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的demo，初始化echarts实例
    //   let myChart = this.$echarts.init(document.getElementById("myChart"));
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "在Vue中使用echarts"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "裤子", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 10, 10]
          }
        ]
      });
    }
  }
};
</script>

