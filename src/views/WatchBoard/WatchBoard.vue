<template>

  <div class="parent w-screen h-screen " :style="myStyle">
    <!--    顶部-->
    <div
        class=" flex flex-row justify-between items-center  div1 text-white rounded-xl">
      <!--      title左-->
      <h1 class="w-40 titleLeftManageAndRightTimeStyle text-xl font-bold mx-auto
     text-center">带班经理：{{ manager }}
      </h1>
      <!--      title中间-->
      <div>
        <dv-decoration-11 style="width:1400px;height:60px;">
          <h1 class="font-sans text-green-200 text-3xl font-bold mx-auto
     text-center">区熔智能派工系统
          </h1>
        </dv-decoration-11>
        <div class="flex flex-row justify-around items-center pt-4">
          <dv-decoration-8 style="width:280px;height:50px;"/>
          <h2 class="font-sans text-green-200 text-lg font-bold">当月累计8寸送验量: </h2>
          <h2 class="font-sans text-red-300 text-3xl font-bold">{{ inspectionQuantity }}</h2>
          <dv-decoration-3 style="width:250px;height:30px;"/>
          <h2 class="font-sans text-green-200 text-lg font-bold">当月累计8寸入库量: </h2>
          <h2 class="font-sans text-red-300 text-3xl font-bold">{{ scheduledReceipt }}</h2>
          <dv-decoration-8 :reverse="true" style="width:250px;height:50px;"/>
        </div>
      </div>
      <!--      title右-->
      <h1 class="w-40 titleLeftManageAndRightTimeStyle text-xl font-bold mx-auto
     text-center">{{ currentTime }}
      </h1>
    </div>
    <div class="div2">
      <!--      当前空闲人员-->
      <div class="w-full h-1/3 ">

        <div class="flex flex-col justify-center items-center rounded-2xl">

          <dv-decoration-6 style="width:300px;height:30px;"/>
          <dv-decoration-7 style="width:250px;height:30px;">
            <div class="w-1/2 text-center font-bold  font-mono text-green-200">当前空闲人员</div>
          </dv-decoration-7>

        </div>
        <el-row>
          <div class="flex flex-row justify-center items-center  ">
            <el-descriptions class="margin-top" :column="1"  border
                             :labelStyle="{color:'#abf1f1', textAlign:'center',backgroundColor:'#162c5a'}"
                             :contentStyle="{color:'#ffffff', textAlign:'center',backgroundColor: 'rgb(14, 29, 62)',width:'320px'}">
              <el-descriptions-item>
                <template slot="label">
                  主操
                </template>
                人员A, 人员A, 人员A, 人员A 人员A  人员A 人员A 人员A 人员A 人员A 人员A 人员A 人员A
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  辅操
                </template>
                人员B, 人员B, 人员B, 人员B, 人员B 人员B 人员B 人员B 人员B 人员B 人员B 人员B 人员B
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  辅助
                </template>
                人员C, 人员C, 人员C, 人员C, 人员C 人员C  人员C  人员C  人员C  人员C 人员C  人员C  人员C
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </el-row>
      </div>

      <!--      当前人员指数Echarts-->
      <div class="w-full  pb-12" style="height: 33%;">
        <div class="flex flex-row justify-center items-center rounded-2xl">
          <dv-decoration-7 style="width:250px;height:30px;">
            <div class="w-1/2 text-center font-bold  font-mono text-green-200">当前人员指数</div>
          </dv-decoration-7>
        </div>

        <EchartsComp/>

      </div>

      <!--      表格3-->
      <div class="w-full" style="height: 34%">
        <el-row>
          <div class="flex flex-row justify-center items-center">
            <dv-decoration-7 style="width:250px;height:30px;">
              <div class="w-1/2 text-center font-bold  font-mono text-green-200">当前原料库存</div>
            </dv-decoration-7>
          </div>
        </el-row>
        <template>
          <el-carousel height="220px" direction="vertical" :interval="2000" >
            <el-carousel-item>
              <div class="flex flex-row">
                <div class="w-1/3 ">
                  <div class="h-full w-full flex flex-row items-center justify-center border-2 border-white"
                       style="background-color:#162c5a">
                    <div class="w-1/2 text-center font-bold font-sans text-2xl bg-blue-400  rounded-md">库房</div>
                  </div>
                </div>
                <div class="w-2/3">
                  <el-descriptions class="margin-top bg-gray-400" :column="1" size="mini" border
                                   :labelStyle="{color:'white', textAlign:'center',backgroundColor:'#162c5a'}"
                                   :contentStyle="{color:'#abf1f1', textAlign:'center',backgroundColor: '#162c5a'}">
                    <el-descriptions-item>
                      <template slot="label">
                        W
                      </template>
                      1
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        A
                      </template>
                      2
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        T
                      </template>
                      3
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        C
                      </template>
                      4
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        F
                      </template>
                      5
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        G
                      </template>
                      6
                    </el-descriptions-item>
                  </el-descriptions>

                </div>
              </div>
            </el-carousel-item>

            <el-carousel-item>
              <div class="flex flex-row">
                <div class="w-1/3 ">
                  <div class="h-full w-full flex flex-row items-center justify-center border-2 border-white"
                       style="background-color:#162c5a">
                    <div class="w-1/2 text-center font-bold font-sans text-2xl bg-blue-400  rounded-md">库房</div>
                  </div>
                </div>
                <div class="w-2/3">
                  <el-descriptions class="margin-top bg-gray-400" :column="1" size="mini" border
                                   :labelStyle="{color:'white', textAlign:'center',backgroundColor:'#162c5a'}"
                                   :contentStyle="{color:'#abf1f1', textAlign:'center',backgroundColor: '#162c5a'}">
                    <el-descriptions-item>
                      <template slot="label">
                        W2
                      </template>
                      1
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        A2
                      </template>
                      2
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        T2
                      </template>
                      3
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        C2
                      </template>
                      4
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        F2
                      </template>
                      5
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        G2
                      </template>
                      6
                    </el-descriptions-item>
                  </el-descriptions>

                </div>
              </div>
            </el-carousel-item>

            <el-carousel-item>
              <div class="flex flex-row">
                <div class="w-1/3 ">
                  <div class="h-full w-full flex flex-row items-center justify-center border-2 border-white"
                       style="background-color:#162c5a">
                    <div class="w-1/2 text-center font-bold font-sans text-2xl bg-blue-400  rounded-md">库房</div>
                  </div>
                </div>
                <div class="w-2/3">
                  <el-descriptions class="margin-top bg-gray-400" :column="1" size="mini" border
                                   :labelStyle="{color:'white', textAlign:'center',backgroundColor:'#162c5a'}"
                                   :contentStyle="{color:'#abf1f1', textAlign:'center',backgroundColor: '#162c5a'}">
                    <el-descriptions-item>
                      <template slot="label">
                        W3
                      </template>
                      1
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        A3
                      </template>
                      2
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        T3
                      </template>
                      3
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        C3
                      </template>
                      4
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        F3
                      </template>
                      5
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        G3
                      </template>
                      6
                    </el-descriptions-item>
                  </el-descriptions>

                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </template>

      </div>
    </div>
    <div class="flex flex-row justify-center items-center div3  gap-y-4  rounded-xl m-1 ">
      <dv-border-box-8 :style="{width:'98%',height:'98%'}">
        <div class="flex flex-col items-center justify-center">
          <!--          渐变条-->
          <div class="flex flex-row w-full justify-center items-center">
            <div class="flex flex-row justify-center items-center h-10 rounded-3xl p-4 m-4 mt-6 w-1/4
          bg-gradient-to-r from-green-500  to-purple-200  border-2 border-white">
              <div class="mx-auto mt-1 text-center  text-md font-sans text-black">车间一总量:</div>
              <div class="mx-auto mt-1 text-center font-bold text-2xl font-sans text-purple-600">100</div>
            </div>
            <div class="flex flex-row justify-center items-center h-10 rounded-3xl p-4 m-4 mt-6 w-1/4
          bg-gradient-to-r from-purple-200  to-purple-500 border-2 border-white">
              <div class="mx-auto mt-1 text-center text-md  font-sans text-black">车间二总量:</div>
              <div class="mx-auto mt-1 text-center font-bold text-2xl font-sans text-white">200</div>
            </div>
            <div class="flex flex-row justify-center items-center h-10 rounded-3xl p-4 m-4 mt-6 w-1/4
          bg-gradient-to-r from-purple-500 to-blue-500 border-2 border-white">
              <div class="mx-auto mt-1 text-center text-md  font-sans text-black">车间三总量:</div>
              <div class="mx-auto mt-1 text-center font-bold text-2xl font-sans text-white">300</div>
            </div>
          </div>
          <!--          一车间-->
          <dv-border-box-11 title="一车间" :style="{width:'95%',height:'95%'}">
            <div class="p-6">
              <div class="grid grid-cols-4 gap-x-1 gap-y-2 scale-90 pt-8">
                <ToolItem toolId="4"/>
                <ToolItem toolId="5"/>
                <ToolItem toolId="6"/>
                <ToolItem toolId="7"/>
                <ToolItem toolId="20"/>
                <ToolItem toolId="21"/>
                <ToolItem toolId="22"/>
                <ToolItem toolId="23"/>
              </div>
            </div>
          </dv-border-box-11>

          <!--          二车间-->
          <dv-border-box-11 title="二车间" :style="{width:'95%',height:'95%'}">
            <div class="p-6">
              <div class="grid grid-cols-4 gap-x-1 gap-y-2 scale-90 pt-8">
                <ToolItem toolId="8"/>
                <ToolItem toolId="9"/>
                <ToolItem toolId="10"/>
                <ToolItem toolId="11"/>
                <ToolItem toolId="12"/>
                <ToolItem toolId="13"/>
                <ToolItem toolId="14"/>
                <ToolItem toolId="15"/>
                <ToolItem toolId="16"/>
                <ToolItem toolId="17"/>
                <ToolItem toolId="18"/>
                <ToolItem toolId="19"/>

              </div>
            </div>
          </dv-border-box-11>

          <!--          三车间-->
          <dv-border-box-11 title="三车间"  :style="{width:'95%',height:'95%'}">
            <div class="p-6">
              <div class="grid grid-cols-4 gap-x-1 gap-y-2 scale-90 pt-8">
                <ToolItem toolId="24"/>
                <ToolItem toolId="25"/>
                <ToolItem toolId="26"/>
                <ToolItem toolId="27"/>
                <ToolItem toolId="28"/>
                <ToolItem toolId="29"/>
                <ToolItem toolId="30"/>
                <ToolItem toolId="31"/>
              </div>
            </div>
          </dv-border-box-11>
        </div>
      </dv-border-box-8>
    </div>
    <div class="div4 bg-cyan-200  border- border-blue-800 rounded-xl m-2">

      <!--      表格3-->
      <div class="w-full h-1/3 ">
        <div class="flex justify-center items-center">
          <dv-decoration-6 style="width:300px;height:30px;"/>
        </div>
        <el-row>
          <template>
            <el-row>
              <div class="flex flex-row justify-center items-center mt-3">
                <dv-decoration-7 style="width:250px;height:30px;">
                  <div class="w-1/2 text-center font-bold  font-mono text-green-200">当前设备状态</div>
                </dv-decoration-7>
              </div>
            </el-row>
            <el-table
                :data="tableDataToolStatus"
                border
                size="mini"
                style="width: 100%"
                :row-style="{height: '10px'}"
            >
              <el-table-column
                  prop="color"
                  label="颜色"
                  align="center"
                  width="100">
                <template slot-scope="scope">
                  <div class="flex flex-row justify-center items-center">
                    <div :class="getColor(scope.row.color)"></div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="抽空充气"
                  align="center"
                  width="150">
              </el-table-column>
              <el-table-column
                  prop="address"
                  align="center"
                  label="台数">
              </el-table-column>
            </el-table>
          </template>


        </el-row>
      </div>

      <!--      表格4-->
      <div class="w-full h-3/5  pt-5">
        <el-row>
          <template>
            <el-row>
              <div class="flex flex-row justify-center items-center mt-5">
                <dv-decoration-7 style="width:250px;height:30px;">
                  <div class="w-1/2 text-center font-bold  font-mono text-green-200">当前产品规格</div>
                </dv-decoration-7>
              </div>
            </el-row>
            <el-table
                :data="tableDataProductSpecifications"
                border
                size="mini"
                style="width: 100%">
              <el-table-column
                  prop="color"
                  label="炉台"
                  align="center"
                  width="100">
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="规格"
                  align="center"
                  width="150">
              </el-table-column>
              <el-table-column
                  prop="address"
                  align="center"
                  label="导电类型">
              </el-table-column>
            </el-table>
          </template>

        </el-row>
      </div>
    </div>
  </div>


</template>


<script src="">
import ToolItem from "@/views/WatchBoard/components/ToolItem.vue";
import EchartsComp from "@/views/WatchBoard/components/EchartsComp.vue";
import bgProfile from '@/assets/image/img_3.png'
import moment from 'moment';

export default {
  name: 'WatchBoard',
  components: {ToolItem, EchartsComp},
  props: {
    toolId: ""
  },
  data() {
    return {
      inspectionQuantity: 1000,
      scheduledReceipt: 1000,
      myStyle: {
        backgroundImage: `url(${bgProfile})`,
        width: '100%',
        height: '100%',
        'background-repeat': 'no-repeat',
        'background-size': 'cover'
      },
      manager: '经理A',
      tableDataProductSpecifications: [
        {
          color: '9',
          name: '54-66',
          address: 'N'
        },
        {
          color: '9',
          name: '54-66',
          address: 'N'
        },
        {
          color: '10',
          name: '105-145',
          address: 'P'
        },
        {
          color: '9',
          name: '54-66',
          address: 'N'
        },
        {
          color: '10',
          name: '105-145',
          address: 'P'
        },
        {
          color: '9',
          name: '54-66',
          address: 'N'
        },
        {
          color: '10',
          name: '105-145',
          address: 'P'
        },
        {
          color: '9',
          name: '54-66',
          address: 'N'
        },
        {
          color: '10',
          name: '105-145',
          address: 'P'
        },
        {
          color: '9',
          name: '54-66',
          address: 'N'
        },
        {
          color: '10',
          name: '105-145',
          address: 'P'
        },
        {
          color: '9',
          name: '54-66',
          address: 'N'
        },
        {
          color: '10',
          name: '105-145',
          address: 'P'
        },
        {
          color: '9',
          name: '54-66',
          address: 'N'
        },


      ],
      tableDataToolStatus: [
        {
          color: 'red',
          name: '预热',
          address: '1'
        },
        {
          color: 'pink',
          name: '化料引晶',
          address: '2'
        }, {
          color: 'green',
          name: '扩肩',
          address: '3'
        },
        {
          color: 'green2',
          name: '保持',
          address: '4'
        },
        {
          color: 'yellow2',
          name: '收尾',
          address: '5'
        },
        {
          color: 'yellow',
          name: '降温',
          address: '6'
        },
        {
          color: 'blue',
          name: '拆装炉',
          address: '7'
        },
      ],
      tableFreePeople: [],
      currentTime: ""
    }
  },
  computed: {},
  methods: {
    getCurrentTime() {

      this.currentTime = moment().format('YYYY-MM-HH hh:mm:ss');
    },
    getColor(colorType) {
      switch (colorType) {
        case "red":
          return "pilotLamp bg-red-500 "
        case "pink":
          return "pilotLamp bg-red-300 "
        case "green":
          return "pilotLamp bg-green-400 "
        case "green2":
          return "pilotLamp bg-green-700 "
        case "yellow2":
          return "pilotLamp bg-yellow-500 "
        case "yellow":
          return "pilotLamp bg-yellow-300 "
        case "blue":
          return "pilotLamp bg-blue-500 "
        default:
          return "pilotLamp bg-white "
      }
    }
  },
  mounted() {
    this.getCurrentTime(); // 初始化时获取一次时间
    setInterval(() => {
      this.getCurrentTime(); // 每秒更新一次时间
    }, 1000);
  }
}
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(14, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.div1 {
  grid-area: 1 / 1 / 3 / 11;
}

.div2 {
  grid-area: 3 / 1 / 15 / 3;
}

.div3 {
  grid-area: 3 / 3 / 15 / 9;
}

.div4 {
  grid-area: 3 / 9 / 15 / 11;
}

/deep/ .el-table thead tr > th {
  background-color: #162c5a;
  color: #abf1f1
}

/deep/ .el-table tbody tr > td {
  background-color: rgb(14, 29, 62);
  color: #ffffff;
  padding: 2px;
}

/deep/ .el-table tbody tr:hover > td {
  background-color: #22608a !important;
}

.pilotLamp{
  @apply w-5 h-5 rounded-full
}

.titleLeftManageAndRightTimeStyle{
  @apply font-sans text-purple-300
}


</style>
