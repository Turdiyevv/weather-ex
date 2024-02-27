<template>
  <div class="flex">
    <el-card class="box-card text-white bg-amber-950 w-2/3">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button">Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    <template #footer>Footer content</template>
  </el-card>

    <el-card class="box-card w-1/3">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="(item, index) in County" :key="index" class="align-text-left">
      <el-button class="text-xl my-1 w-full bg-amber-950 text-white">
        {{ item.name }}
      </el-button>
    </div>
    <template #footer>
      <el-button class="flex">
        <el-link href="https://t.me/Turdiyev07" class="decoration-neutral-50">
          <img src="../assets/png-telegram-icon.png" alt="telegram"
               style="width: 30px; height: 30px"
          >
          <span class="ml-2 text-blue-600">Turdiyev</span>
        </el-link>
      </el-button>
    </template>
  </el-card>
  </div>
</template>
<script lang="ts" setup>
  import { reactive } from "vue";

  let County = reactive([
    {name: 'Andijon'},
    {name: 'Buxoro'},
    {name: 'Farg\'ona'},
    {name: 'Jizzax'},
    {name: 'Namangan'},
    {name: 'Qashqadaryo'},
    {name: 'Qoraqalpog\'iston'},
    {name: 'Sizrdaryo'},
    {name: 'Samarqand'},
    {name: 'Surxondaryo'},
    {name: 'Tashkent'},
    {name: 'Xorazm'},
  ])
</script>
<style>

</style>