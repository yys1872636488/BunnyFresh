<script setup lang="ts">
import {getBannerApi} from "@/apis/home.ts";
import type {BannerImg} from "@/types/banner.ts";
import {onMounted, ref} from "vue";

const bannerList = ref<BannerImg[]>()
const getBanner = async () => {
  const res = await getBannerApi()
  bannerList.value = res.data.result
}

onMounted( () => {
  getBanner()
})

</script>

<template>
  <div class="home-banner">
    <el-carousel
      direction="vertical"
      motion-blur
      :autoplay="true"
      :interval="3000"
      height="500px"
    >
      <el-carousel-item v-for="item in bannerList" :key="item.id">
       <img :src=item.imgUrl  alt=""/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  height: 500px;
  flex: 1;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
