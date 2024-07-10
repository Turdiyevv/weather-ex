<template>
  <div class="">
    <el-card class="my-4 mx-2">
  <el-form
    ref="formRef"
    style="max-width: 600px"
    :model="numberValidateForm"
    label-width="auto"
    class="demo-ruleForm"
  >
    <el-form-item
      label="number"
      prop="number"
      :rules="[
        { required: true, message: 'number is required' },
        { type: 'number', message: 'number must be a number' },
      ]"
    >
      <el-input
        v-model.number="numberValidateForm.number"
        type="text"
        autocomplete="off"
      />

    </el-form-item>
    <el-form-item
      label="email"
      prop="email"
      :rules="[
        { required: true, message: 'email is required' },
        { type: 'email', message: 'email must be a email' },
      ]"
    >
      <el-input
        v-model.number="numberValidateForm.email"
        type="text"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item class="ml-14">
      <el-button @click="submitForm(formRef)">Submit</el-button>
    </el-form-item>
  </el-form>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, reactive, ref} from 'vue'
import http from '@/plugins/axios.js'
import axios from 'axios'
import {createLogger} from "vite";
import { MaskInput } from 'vue-3-mask';
import {ElNotification, FormInstance} from "element-plus";

const formRef = ref<FormInstance>();
const numberValidateForm = reactive({
  number: '',
  email: '',
});
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log(numberValidateForm.number, numberValidateForm.email)
      ElNotification.success({
        title: 'done',
        message: 'submit !',
        showClose: true
      })
    } else {
      ElNotification.warning({
        title: 'warning',
        message: 'no active !',
        showClose: true
      })
    }
  })
}

</script>
<style scoped>
</style>
