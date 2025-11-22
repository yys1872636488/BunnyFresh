<script setup lang="ts">

import HomeCategory from "@/views/Home/components/HomeCategory.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeHot from "@/views/Home/components/HomeHot.vue";
import HomeProduct from "@/views/Home/components/HomeProduct.vue";
</script>

<template>
  <div class="container">
    <HomeCategory/>
    <HomeBanner/>
  </div>
  <div>
    <HomeNew/>
    <HomeHot/>
    <HomeProduct/>
  </div>
</template>

<style scoped lang="scss">

</style>
