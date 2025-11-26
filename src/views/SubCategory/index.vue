<script setup lang="ts">
import GoodsItem from "@/views/Home/components/GoodsItem.vue";
import {useSubCategory} from "@/views/SubCategory/composables/useSubCategory.ts";
import {useSubGood} from "@/views/SubCategory/composables/useSubGood.ts";

const {filterData} = useSubCategory()
const {goodList, req, tabChange,loadMore,loading,noMore} = useSubGood()

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="`/category/${filterData?.parentId}`">{{filterData?.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ filterData?.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="req.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="loading || noMore"
        infinite-scroll-distance="200"
      >
        <!-- 商品列表-->
        <GoodsItem v-for="good in goodList?.items" :key="good.id" :good="good"/>
      </div>
      <!--      分页-->
<!--      <div class="pagination-wrapper">-->
<!--        <el-pagination-->
<!--          background-->
<!--          layout="prev, pager, next"-->
<!--          :total="goodList?.counts || 0"-->
<!--          :page-size="req.pageSize"-->
<!--          :current-page="req.page"-->
<!--          @current-change="pageChange"-->
<!--        />-->
<!--      </div>-->
    </div>
  </div>

</template>

<style scoped lang="scss">
.bread-container {
  padding: 20px 0;
  color: #666;
}

.sub-container {
  padding: 20px 0;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;

    .goods-item {
      margin-right: 20px;
    }
  }
  //.pagination-wrapper {
  //  display: flex;
  //  justify-content: center;
  //  width: 100%;
  //}
}
</style>
