<template>
  <div class="flex justify-between">
    <el-card class="box-card w-full">
    <template #header>
      <div class="card-header flex justify-between">
        <div class="text-3xl w-2/12 my-auto ml-10">
          <div>{{ cityName }}</div>
        </div>
        <div class=" text-2xl my-3 w-2/12 text-black">
          <span class="mx-10 w-11/12">State</span>
        </div>
      </div>
    </template>

    <div class="flex justify-between">
      <div class="w-10/12">
        <div class="flex justify-between first__chapter">
          <div class="date-temp w-8/12">
            <div class="text-2xl">28.02.2024</div>
            <div class="text-7xl ml-7 mt-2 mr-2 font-serif">1°C</div>
          </div>
          <div class="image__style w-3/12">img</div>
        </div>
        <div class="clock__weather sec__chapter">soatlik ob-havo</div>
        <div class=" flex justify-between three__chapter">
          <div>4 kun</div>
          <div>4kun</div>
        </div>
      </div>
      <div class="w-2/12">
        <div v-for="(item, index) in County" :key="index">
          <el-button type="success"
              @click="getItemWeather(item)"
              class="my-1 mx-2 w-11/12 text-black bg-white">
            {{ item.name }}
          </el-button>
        </div>
      </div>
    </div>

      <template #footer>
        <div class="flex justify-between my-3">
          <div class="w-10/12">
            footer
          </div>
          <div class="w-2/12 ">
            <el-button type="success" class="mx-2 w-11/12">
              <el-link href="https://t.me/Turdiyev07"
                style="width: 180px">
                  <img src="../assets/png-telegram-icon.png" alt="telegram"
                       style="width: 30px; height: 30px; text-decoration: none"
                  >
                <div class="9/12 text-blue-600">Turdiyev</div>
              </el-link>
            </el-button>
          </div>
        </div>
      </template>
  </el-card>
  </div>
</template>
<script lang="ts" setup>
import {reactive, ref} from "vue";
import http from "@/plugins/axios.js";


  let County = reactive([
    {name: 'Andijon', lat: 40.7833471, lon: 72.3506746,},
    {name: 'Buxoro', lat: 39.7675529, lon: 64.4231326,},
    {name: 'Farg\'ona', lat: 40.3764879, lon: 71.7913193,},
    {name: 'Jizzax', lat: 40.1331797, lon: 67.8234081,},
    {name: 'Namangan', lat: 40.9996482, lon: 71.6726238,},
    {name: 'Qashqadaryo',lat: 38.9248284, lon: 65.7538819,},
    {name: 'Qoraqalpog\'iston', lat: 44.7684079, lon: 56.1936645,},
    {name: 'Sirdaryo', lat: 40.8309135, lon: 68.6661865,},
    {name: 'Samarqand', lat: 39.6550017, lon: 66.9756954,},
    {name: 'Surxondaryo',lat: 37.9409, lon: 67.5709},
    {name: 'Tashkent', lat: 41.3123363, lon: 69.2787079,},
    {name: 'Xorazm', lat: 41.3565, lon: 60.8567},
  ])

  let cityName = ref('City name');
  const getItemWeather = async function (item){
    let lat = item.lat;
    let lon = item.lon;
    await http.get(`onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&` +
        `appid=9dd86907fe501cec50da3d087e4e9dc0&units=metric&lang=en`).then(res =>{
      console.log(res.data)
    })
    cityName.value = item.name
  }
</script>
<style>
.first__chapter{
  height: 180px;
}
.sec__chapter{
  height: 120px;
}
.three__chapter{
  margin: 7px;
  border-radius: 7px;
  padding: 5px;
  background-color: #e4eaf6;
  height: 170px;
}
.date-temp{
  margin: 7px;
  border-radius: 7px;
  padding: 5px;
  //border: 1px solid red;
}
.image__style{
  margin: 7px;
  border-radius: 7px;
  padding: 5px;
  border: 1px solid red;
}
.clock__weather{
  margin: 7px;
  border-radius: 7px;
  padding: 5px;
  //border: 1px solid red;
  background-color: #e4eaf6;
}
.el-card__header{
  padding: 0;
  margin: 5px 5px;
  height: 90px;
}
.el-card__body{
  height: 504px;
  //background-color: #e4eaf6;
  padding: 0;
  margin: 0 5px;
  border-radius: 5px;
}
.el-card__footer{
  padding: 0;
  margin: 0 5px;
  height: 70px;
}
</style>
