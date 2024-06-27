<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { recognizeText, IRecognize } from '@/utils/recognize'
import Test1Img from '@/assets/imgs/advance/recognition/test1.png'
import Test2Img from '@/assets/imgs/advance/recognition/test2.png'
import Test3Img from '@/assets/imgs/advance/recognition/test3.png'
import Test4Img from '@/assets/imgs/advance/recognition/test4.png'
import Test5Img from '@/assets/imgs/advance/recognition/test5.png'
import Test6Img from '@/assets/imgs/advance/recognition/test6.png'
import Test7Img from '@/assets/imgs/advance/recognition/test7.png'
import Test8Img from '@/assets/imgs/advance/recognition/test8.png'
import Test9Img from '@/assets/imgs/advance/recognition/test9.png'
import Test10Img from '@/assets/imgs/advance/recognition/test10.png'
import Test11Img from '@/assets/imgs/advance/recognition/test11.png'
import Test12Img from '@/assets/imgs/advance/recognition/test12.png'

const searchValue = ref<string>('') // 搜索
const resultImgList = ref<IRecognize[]>([])
const imgList = ref<string[]>([Test1Img, Test2Img, Test3Img, Test4Img, Test5Img, Test6Img, Test7Img, Test8Img, Test9Img, Test10Img, Test11Img, Test12Img])

const handleSearchChange = async () => {
  if (searchValue.value) {
    const filterItem = resultImgList.value.filter(item => item.text.includes(searchValue.value))
    imgList.value = filterItem.map(item => item.url)
  } else {
    imgList.value = resultImgList.value.map(item => item.url)
  }
}

onMounted(async () => {
  resultImgList.value = await recognizeText(imgList.value)
  console.log(resultImgList.value);
})


</script>

<template>
  <div class="system-user-container layout-padding">
    <el-card shadow="hover" class="layout-padding-auto">
      <!-- search -->
      <el-input v-model="searchValue" style="width:50%" clearable placeholder="输入关键词搜索图片" @input="handleSearchChange" />

      <!-- result -->
      <div class="result-list">
        <img v-for="item in imgList" :src="item" :key="item" height="50">
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.result-list {
  width: 50%;
  height: 60vh;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #eee;
}
</style>
