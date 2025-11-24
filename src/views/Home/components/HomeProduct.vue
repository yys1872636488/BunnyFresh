<script setup lang="ts">
import HomePanel from './HomePanel.vue'
import {getGoodsApi} from "@/apis/home.ts";
import {onMounted, ref} from "vue";
import type {CategoryGoods} from "@/types/product.ts";
import GoodsItem from "@/views/Home/components/GoodsItem.vue";

const goodsList = ref<CategoryGoods[]>([])
const getGoods = async () => {
  const res = await getGoodsApi()
  goodsList.value = res.data.result
}

onMounted(() => {
  getGoods()
})

</script>

<template>
  <div class="home-product">
    <HomePanel :title="cate.name" v-for="cate in goodsList" :key="cate.id">
      <div class="box">
        <RouterLink class="cover" to="/">
          <img v-img-lazy="cate.picture" alt=""/>
          <strong class="label">
            <span>{{ cate.name }}管</span>
            <span>{{ cate.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="good in cate.goods" :key="good.id">
            <GoodsItem :good="good"/>
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang="scss">
.home-product {
  background: #fff;
  margin-top: 20px;

  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);

        span {
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
  }

  .goods-list {
    width: 990px;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 240px;
      height: 300px;
      margin-right: 10px;
      margin-bottom: 10px;

      &:nth-child(4n) {
        margin-right: 0;
      }

      &:nth-last-child(-n + 4) {
        margin-bottom: 0;
      }
    }
  }
}

</style>
