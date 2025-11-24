<script setup lang="ts">
import {useBanner} from "@/views/Home/composables/useBanner.ts";
import {toRef} from "vue";

const props = defineProps<{
  distributionSite?: string
}>()
const distributionSiteRef = toRef(props, 'distributionSite');
const { bannerList } = useBanner(distributionSiteRef)
</script>

<template>
  <div class="home-banner">
    <el-carousel
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
