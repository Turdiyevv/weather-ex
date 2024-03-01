<script setup>
import { ref } from "vue";

const isActive = ref(true);
</script>

<template>
  <div>
    <div class="p-2.5 bg-blue-800 text-white md:flex justify-around items-center w-full">
      <div class="flex items-center md:mx-0 mx-3">
        <div class="bg-white p-3 rounded-2xl m-2 md:mx-1" >img</div>
        <div>
          <div class="text-3xl">Smart bill</div>
          <div>Powered by plum</div>
        </div>
        <div @click="isActive = !isActive" role="button" class="md:hidden ml-auto mr-2 text-4xl">
          <span class="text-white">x</span>
        </div>
      </div>
      <div :hidden="isActive" class="md:flex md:w-8/12  md:justify-around items-center">
        <div class="md:flex md:justify-around md:w-5/12 ">
          <div class="w-11/12 sm:w-auto active:bg-blue-700 md:active:bg-blue-800 md:mx-1 md:p-0 p-1 ml-4" role="button">platform</div>
          <div class="w-11/12 sm:w-auto active:bg-blue-700 md:active:bg-blue-800 md:mx-1 md:p-0 p-1 ml-4" role="button">test</div>
          <div class="w-11/12 sm:w-auto active:bg-blue-700 md:active:bg-blue-800 md:mx-1 md:p-0 p-1 ml-4" role="button">business-cabinet</div>
          <div class="w-11/12 sm:w-auto active:bg-blue-700 md:active:bg-blue-800 md:mx-1 md:p-0 p-1 ml-4" role="button">contacts</div>
        </div>
        <el-button class="w-11/12 sm:w-auto md:ml-0 ml-4 p-5 border-white border-1 rounded-xl bg-blue-800 text-white">Smart bill</el-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>