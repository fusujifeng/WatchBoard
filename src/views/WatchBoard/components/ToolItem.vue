<template>
  <dv-border-box-13  >
    <div class="flex flex-row w-60 h-16 justify-around items-center   scale-90">
      <div class="flex flex-row justify-center items-center w-8 h-8 bg-gradient-to-r from-green-200 to-green-700 rounded-full ">
        <p class="text-sm text-center mx-auto">{{ toolId }}</p>
      </div>
      <div >
        <h2 class="text-sm font-sans font-medium text-white">当前:标签二</h2>
        <h2 class="text-sm font-sans font-medium mt-1 text-white">推荐:标签三</h2>
      </div>
      <el-progress type="circle" :width="32" :percentage="100" status="success" stroke-width="4" :show-text="false"		 ></el-progress>


    </div>
  </dv-border-box-13>


</template>

<script src="">
// import xxx
export default {
  name: 'ToolItem',
  components: {},
  props: ['toolId'],
  data() {
    return {

    }
    },
  methods: {

  },
}
</script>



<style scoped>

</style>
