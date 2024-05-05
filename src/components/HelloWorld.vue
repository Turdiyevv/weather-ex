<template>
  <div class="">
    <el-card class="box-card w-full">
      <template #header>
        <el-row class="card-header">
          <el-col :xl="12" :lg="12" :md="12" class="text-3xl">
            <div class="mx-1">{{ cityName }}</div>
          </el-col>
          <el-col :xl="12" :lg="12" :md="12" class="text-2xl flex justify-end">
            <span class="mx-1">Hududlar</span>
          </el-col>
        </el-row>
      </template>

      <el-row class="">
        <el-col :xl="20" :lg="20" :md="20" class="">
          <el-row class="px-1.5">
            <el-col :xl="17" :lg="17" :md="17" class="">
              <div class="text-2xl border-solid border-2 border-sky-500 rounded"
                style="width: max-content"
              >{{ date }}</div>
              <div class="text-7xl my-2 font-sans flex items-end text-blue-700">
                <span>{{ todayWeather.temp }}°C</span>
                <span class="text-3xl ml-2">{{todayWeather.main}}</span>
              </div>
            </el-col>
            <el-col :xl="7" :lg="7" :md="7" class="bg__style p-1 rounded flex">
              <img :src="imgUrlF+todayWeather.icon+imgUrlL" alt="image" size="185px" >
              <div class="items-center my-auto ml-auto py-0.5 px-2 bg-orange-200 rounded">
                <div>namlik: {{todayWeather.humidity}}</div>
                <div>{{todayWeather.description}}</div>
              </div>
            </el-col>
          </el-row>

          <div class="sec__chapter">
            <el-row class="">
              <el-col :xl="3" :lg="3" :md="3" :sm="6" v-for="item in hourly">
                <div class="gap__item m-0.5">
                  <div class="">
                    <div class="text-red-500 flex justify-end">
                      <span class="mr-1">namlik:</span><span>{{item.humidity}}</span>
                    </div>
                    <img :src="imgUrlF+item.icon+imgUrlL" alt="image" size="80">
                  </div>
                  <div class="flex justify-between">
                    <div class="p-0.5">{{ item.temp }}°C</div>
                    <span class="el-text--small bg-white p-0.5 rounded ">{{item.hour}}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>

          <el-row>
            <el-col :xl="12" :lg="12" :md="12" :sm="24" v-for="item in daily">
              <el-row class="three__chapter flex">
                <el-col :xl="8" :lg="8" :md="8" :sm="8" class="w-4/12">
                  <img :src="imgUrlF+item.icon+imgUrlL" alt="image" width="80">
                  <div>{{item.description}}</div>
                </el-col>
                <el-col :xl="8" :lg="8" :md="8" :sm="8" class="my-auto w-4/12">
                  <div>
                    <span class="mr-0.5">max harorat:</span>
                    <span class=" text-red-500">{{item.temp}}°C</span>
                  </div>
                  <div class="flex">
                    <span class="mr-0.5">namlik:</span>
                    <span class=" text-blue-500">{{item.humidity}}</span>
                  </div>
                </el-col>
                <el-col :xl="8" :lg="8" :md="8" :sm="8" class="item-center flex flex-wrap w-4/12">
                  <div class="m-1 p-0.5 bg-orange-200 rounded text-black-500" style="width: -webkit-fill-available;">
                    <span class="mr-0.5">kunduzgi harorat:</span>
                    <span>{{item.tempDay}}°C</span>
                  </div>
                  <div class="m-1 p-0.5 bg-black rounded text-white" style="width: -webkit-fill-available;">
                    <span class="mr-0.5">kechasi harorat:</span>
                    <span>{{item.tempNight}}°C</span>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xl="4" :lg="4" :md="4" class="">
          <div v-for="(item, index) in County" :key="index">
            <div>
              <el-button
                type="success"
                style="width: -webkit-fill-available;"
                @click="getItemWeather(item)"
                class="my-1 mx-2 w-100 text-black bg-white"
              >
                {{ item.name }}
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>

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
let date = ref('');
let humidity = ref('');
let icon = ref('');
let imgWeather = ref('noo');
let lat = ref();
let lon = ref();
let clock = ref('');

let hourly = ref([]);
let soat = ref('');
let minut = ref('');

let daily = reactive([])


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
getHozirgiSana();
async function getItemWeather(item) {
  try {
    if (item){ lat = item.lat; lon = item.lon; cityName.value = item.name;}
    else { lat = 38.88220587; lon = 66.82707718; }
      const res = await http.get(
        `data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&` +
          `appid=9dd86907fe501cec50da3d087e4e9dc0&units=metric&lang=uz`
      )
      todayWeather = {
        temp: res.data.current.temp,
        humidity: res.data.current.humidity,
        icon: res.data.current.weather[0].icon,
        main: res.data.current.weather[0].main,
        description: res.data.current.weather[0].description
      };
    // hourly
      hourly = [
        {
          humidity: res.data.hourly[0].humidity,
          temp: res.data.hourly[0].temp,
          icon: res.data.hourly[0].weather[0].icon,
          hour: (soat+1) % 24 +":"+ minut
        },
        {
          humidity: res.data.hourly[1].humidity,
          temp: res.data.hourly[1].temp,
          icon: res.data.hourly[1].weather[0].icon,
          hour: (soat+2) % 24 +":"+ minut
        },
        {
          humidity: res.data.hourly[2].humidity,
          temp: res.data.hourly[2].temp,
          icon: res.data.hourly[2].weather[0].icon,
          hour: (soat+3) % 24 +":"+ minut
        },
        {
          humidity: res.data.hourly[3].humidity,
          temp: res.data.hourly[3].temp,
          icon: res.data.hourly[3].weather[0].icon,
          hour: (soat+4) % 24 +":"+ minut
        },
        {
          humidity: res.data.hourly[4].humidity,
          temp: res.data.hourly[4].temp,
          icon: res.data.hourly[4].weather[0].icon,
          hour: (soat+5) % 24 +":"+ minut
        },
        {
          humidity: res.data.hourly[5].humidity,
          temp: res.data.hourly[5].temp,
          icon: res.data.hourly[5].weather[0].icon,
          hour: (soat+6) % 24 +":"+ minut
        },
        {
          humidity: res.data.hourly[6].humidity,
          temp: res.data.hourly[6].temp,
          icon: res.data.hourly[6].weather[0].icon,
          hour: (soat+7) % 24 +":"+ minut
        },
        {
          humidity: res.data.hourly[7].humidity,
          temp: res.data.hourly[7].temp,
          icon: res.data.hourly[7].weather[0].icon,
          hour: (soat+7) % 24 +":"+ minut
        },
      ];
    // daily
    daily = [
      {
        humidity: res.data.daily[0].humidity,
        temp: res.data.daily[0].temp.max,
        tempDay: res.data.daily[0].temp.day,
        tempNight: res.data.daily[0].temp.night,
        icon: res.data.daily[0].weather[0].icon,
        description: res.data.daily[0].weather[0].description
      },
      {
        humidity: res.data.daily[1].humidity,
        temp: res.data.daily[1].temp.max,
        tempDay: res.data.daily[1].temp.day,
        tempNight: res.data.daily[1].temp.night,
        icon: res.data.daily[1].weather[0].icon,
        description: res.data.daily[1].weather[0].description
      },
      {
        humidity: res.data.daily[2].humidity,
        temp: res.data.daily[2].temp.max,
        tempDay: res.data.daily[2].temp.day,
        tempNight: res.data.daily[2].temp.night,
        icon: res.data.daily[2].weather[0].icon,
        description: res.data.daily[2].weather[0].description
      },
      {
        humidity: res.data.daily[3].humidity,
        temp: res.data.daily[3].temp.max,
        tempDay: res.data.daily[3].temp.day,
        tempNight: res.data.daily[3].temp.night,
        icon: res.data.daily[3].weather[0].icon,
        description: res.data.daily[3].weather[0].description
      },
      {
        humidity: res.data.daily[4].humidity,
        temp: res.data.daily[4].temp.max,
        tempDay: res.data.daily[4].temp.day,
        tempNight: res.data.daily[4].temp.night,
        icon: res.data.daily[4].weather[0].icon,
        description: res.data.daily[4].weather[0].description
      },
      {
        humidity: res.data.daily[5].humidity,
        temp: res.data.daily[5].temp.max,
        tempDay: res.data.daily[5].temp.day,
        tempNight: res.data.daily[5].temp.night,
        icon: res.data.daily[5].weather[0].icon,
        description: res.data.daily[5].weather[0].description
      },
      {
        humidity: res.data.daily[6].humidity,
        temp: res.data.daily[6].temp.max,
        tempDay: res.data.daily[6].temp.day,
        tempNight: res.data.daily[6].temp.night,
        icon: res.data.daily[6].weather[0].icon,
        description: res.data.daily[6].weather[0].description
      },
      {
        humidity: res.data.daily[7].humidity,
        temp: res.data.daily[7].temp.max,
        tempDay: res.data.daily[7].temp.day,
        tempNight: res.data.daily[7].temp.night,
        icon: res.data.daily[7].weather[0].icon,
        description: res.data.daily[7].weather[0].description
      }
    ];

    if (!item){cityName.value = res.data.timezone;}
  } catch (e) {
    console.log(e)
  }
}
getItemWeather();

const imgUrlF = ref('https://openweathermap.org/img/wn/');
const imgUrlL = ref('@2x.png');
async function getImgUrl(value) {
  if (value) {
    try {
      const res = await axios.get(`https://openweathermap.org/img/wn/${value}@2x.png`);
      return res.request.responseURL;
      console.log(res.request.responseURL)
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      return null;
    }
  } else {
    return '';
  }
}

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
  padding: 5px;
  //height: 120px;
  background-color: #e4eaf6;

}
.three__chapter {
  margin: 7px;
  border-radius: 7px;
  padding: 5px;
  background-color: #e4eaf6;
  //height: 170px;
}
.date-temp {
  margin: 7px;
  border-radius: 7px;
  padding: 5px;
}
.bg__style {
  //margin: 7px;
  //border-radius: 7px;
  //padding: 5px;
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
