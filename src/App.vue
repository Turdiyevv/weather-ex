<script setup>
import HelloWorld from './components/HelloWorld.vue';

  // http.get('/users').then(res => {
  //   console.log (res.data)
  // })
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h1 class="text-4xl my-2">Weather uzbekistan</h1>
      </el-header>
      <el-main>
        <HelloWorld/>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>

</style>
