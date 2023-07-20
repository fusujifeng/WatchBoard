<template>

  <div  id="echartsContainer" class="w-full h-full  opacity-90"></div>

</template>


<script src="">
// import xxx
export default {
  name: 'EchartsComp',
  components: {},
  props: ['toolId'],
  data() {
    return {
      echartsData:[],
      myChart: {},
    }
  },
  mounted() {
    this.browserWidthChange()
    this.getEchartsData()
  },
  methods: {
    initEcharts(){
      this.myChart = this.$echarts.init(document.getElementById("echartsContainer"))
      let option = {
        backgroundColor: '#2c343c',
        title: {
          text: '主操',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ffffff'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#ffffff'
            }
          }
        },
        toolbox: {
          feature: {
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          textStyle:{//图例文字的样式
            color:'#ffffff',
            fontSize:13
          },
          left: 'center',
          bottom: 1,
          data: ['拉晶次数', '出门次数'],
        },
        xAxis: [
          {
            type: 'category',
            color:'#ffffff',
            data: ['刘愿', '李佳伟', '李东', '刘冶平'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel:{
              color:"#ffffff"
            }

          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '出门次数',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '百分比',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: '拉晶次数',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
               135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ]
          },
          {
            name: '出门次数',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
              182.2, 48.7, 18.8, 96.0, 2.3
            ]
          },
          {
            name: '百分比',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option)
    },
    browserWidthChange(){
      window.onresize = () => {
        return (() => {
          this.$nextTick(() => {
            this.myChart.resize()
          });
        })();
      };
    },
    getEchartsData(){
      this.initEcharts();
    },
  },
  beforeDestroy() {
    // 页面销毁时销毁监听事件
    window.removeEventListener('resize',this.getresize)
    //清除定时器
  },
}
</script>
<style scoped>

</style>
