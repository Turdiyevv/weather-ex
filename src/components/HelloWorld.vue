<template>
  <div class="flex justify-between">
    <el-card class="box-card w-full">
      <template #header>
        <div class="card-header flex justify-between">
          <div class="text-3xl w-2/12 my-auto ml-10">
            <div>{{ cityName }}</div>
          </div>
          <div class="text-2xl my-3 w-2/12 text-black">
            <span class="mx-10 w-11/12">Hududlar</span>
          </div>
        </div>
      </template>

      <div class="flex justify-between">
        <div class="w-10/12">
          <div class="flex justify-between first__chapter">
            <div class="date-temp w-8/12">
              <div class="text-2xl">{{ date }}</div>
              <div class="text-7xl ml-7 mt-2 mr-2 font-sans flex text-blue-700">
                <span>{{ todayWeather }}°C</span>
                <span class="text-3xl m-9">{{desc}}</span>
              </div>
            </div>
            <div class="image__style w-3/12 flex">
              <img :src="imgWeather" alt="image" width="150" >
              <div class="">
                <div>Namlik: {{humidity}}</div>
              </div>
            </div>
          </div>
          <div class="sec__chapter">
            <div class="grid gap-1 grid-cols-8">

              <div class="gap__item">
                <div class="flex justify-between">
                  <img :src="imgWeather" alt="image" width="80">
                  <div class="text-red-500">{{humidity}}</div>
                </div>
                <div class="flex justify-between">
                  <div>{{ todayWeather }}°C</div>
                  <span class="el-text--small bg-white p-0.5 rounded ">{{clock}}</span>
                </div>
              </div>

              <div class="gap__item" v-for="item in hourly">
                <div class="flex justify-between">
                  <img :src="imgWeather" alt="image" width="80">
                  <div class="text-red-500">{{item.humidity}}</div>
                </div>
                <div class="flex justify-between">
                  <div>{{ item.temp }}°C</div>
                  <span class="el-text--small bg-white p-0.5 rounded ">{{clock}}</span>
                </div>
              </div>

            </div>
          </div>
          <div class="flex justify-between three__chapter">
            <div>4 kun</div>
            <div>4kun</div>
          </div>
        </div>
        <div class="w-2/12">
          <div v-for="(item, index) in County" :key="index">
            <el-button
              type="success"
              @click="getItemWeather(item)"
              class="my-1 mx-2 w-11/12 text-black bg-white"
            >
              {{ item.name }}
            </el-button>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-between my-3">
          <div class="w-10/12">footer</div>
          <div class="w-2/12">
            <el-button type="success" class="mx-2 w-11/12">
              <el-link href="https://t.me/Turdiyev07" style="width: 180px">
                <img
                  src="../assets/png-telegram-icon.png"
                  alt="telegram"
                  style="width: 30px; height: 30px; text-decoration: none"
                />
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
import { reactive, ref} from 'vue'
import http from '@/plugins/axios.js'
import axios from 'axios'
import {createLogger} from "vite";

let County = reactive([
  { name: 'Andijon', lat: 40.7833471, lon: 72.3506746 },
  { name: 'Buxoro', lat: 39.7675529, lon: 64.4231326 },
  { name: "Farg'ona", lat: 40.3764879, lon: 71.7913193 },
  { name: 'Jizzax', lat: 40.1331797, lon: 67.8234081 },
  { name: 'Namangan', lat: 40.9996482, lon: 71.6726238 },
  { name: 'Qashqadaryo', lat: 38.9248284, lon: 65.7538819 },
  { name: "Qoraqalpog'iston", lat: 44.7684079, lon: 56.1936645 },
  { name: 'Sirdaryo', lat: 40.8309135, lon: 68.6661865 },
  { name: 'Samarqand', lat: 39.6550017, lon: 66.9756954 },
  { name: 'Surxondaryo', lat: 37.9409, lon: 67.5709 },
  { name: 'Tashkent', lat: 41.3123363, lon: 69.2787079 },
  { name: 'Xorazm', lat: 41.3565, lon: 60.8567 },
  { name: 'Yakkabog\' tumani', lat: 38.88220587, lon: 66.82707718 }
])

let cityName = ref('Hudud nomi');
let todayWeather = reactive({});
let desc = ref('');
let date = ref('');
let humidity = ref('');
let icon = ref('');
let imgWeather = ref('');
let lat = ref();
let lon = ref();
let clock = ref('');

let soat = ref('');
let hourly = ref([]);
let minut = ref('');



function getHozirgiSana() {
    const hozirgiSana = new Date();
    const kun = hozirgiSana.getDate();
    const oy = hozirgiSana.getMonth() + 1; // Oylar 0 dan boshlanadi, shuning uchun 1 qo'shib chiqamiz
    const yil = hozirgiSana.getFullYear();
    soat = hozirgiSana.getHours();
    minut = hozirgiSana.getMinutes();
    clock = soat + ':'+ minut;

    // const soatFormat = soat >= 12 ? 'PM' : 'AM'; //soatni 12 likka o'zgartirish
    // soat = soat % 12 || 12;

    return (date.value = `${kun}-${oy}-${yil} ${soat}:${minut}`);
}
getHozirgiSana()
async function getItemWeather(item) {
  try {
    if (item){ lat = item.lat; lon = item.lon; cityName.value = item.name;}
    else { lat = 38.88220587; lon = 66.82707718; }
      const res = await http.get(
        `data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&` +
          `appid=9dd86907fe501cec50da3d087e4e9dc0&units=metric&lang=uz`
      )
      todayWeather = res.data.current.temp;
    hourly = [
        res.data.hourly[soat+1],
        res.data.hourly[soat+2],
        res.data.hourly[soat+3],
        res.data.hourly[soat+4],
        res.data.hourly[soat+5],
        res.data.hourly[soat+6],
        res.data.hourly[soat+7],
    ]
    if (!item){cityName.value = res.data.timezone;}
      humidity.value = res.data.current.humidity
      icon.value = res.data.current.weather[0].icon
      desc.value = res.data.current.weather[0].main

      const iconResponse = await axios.get(`https://openweathermap.org/img/wn/${icon.value}@2x.png`) //http orqali olmoqchi bo'lganimda cors error chiqdi.
      imgWeather.value = iconResponse.request.responseURL;
  } catch (e) {
    console.log(e)
  }
}
getItemWeather()

</script>
<style>
.first__chapter {
  height: 180px;
}
.sec__chapter {
  font-size: 10px;
  margin: 7px;
}
.gap__item{
  border-radius: 7px;
  padding: 7px;
  height: 120px;
  background-color: #e4eaf6;

}
.three__chapter {
  margin: 7px;
  border-radius: 7px;
  padding: 5px;
  background-color: #e4eaf6;
  height: 170px;
}
.date-temp {
  margin: 7px;
  border-radius: 7px;
  padding: 5px;
}
.image__style {
  margin: 7px;
  border-radius: 7px;
  padding: 5px;
  background-color: #e4eaf6;
}
.el-card__header {
  padding: 0;
  margin: 5px 5px;
  height: 90px;
}
.el-card__body {
  //height: 504px;
  padding: 0;
  margin: 0 5px;
  border-radius: 5px;
}
.el-card__footer {
  padding: 0;
  margin: 0 5px;
  height: 70px;
}
</style>
