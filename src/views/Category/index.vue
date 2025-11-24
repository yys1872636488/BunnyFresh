<script setup lang="ts">
import {watch, ref} from "vue";
import type {FirstLevelCategory} from "@/types/topCategory.ts";
import {getTopCategoryApi} from "@/apis/category.ts";
import {useRoute} from "vue-router";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";

const route = useRoute();
const categoryData = ref<FirstLevelCategory | null>(null)
const getCategory = async () => {
  const res = await getTopCategoryApi(route.params.id as string)
  categoryData.value = res.data.result
}

watch(() => route.params.id as string, () => {
  if (route.name === 'category') {
    getCategory();
  }
},{immediate: true})
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{categoryData?.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <HomeBanner distributionSite="2" ></HomeBanner>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-category {

  .bread-container {
    padding: 15px 0;
  }
}
</style>
