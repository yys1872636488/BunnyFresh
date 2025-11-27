<script setup lang="ts">
import {useRoute} from "vue-router";
import {useDetailHot} from "@/views/detail/composables/uesDetailHot.ts";

const route = useRoute()
const props = withDefaults(defineProps<{
  hotType?: number
}>(),{
  hotType: 1
})

const {title,hotList} = useDetailHot(String(route.params.id),props.hotType)

</script>

<template>
  <div class="goods-hot">
    <h3>{{title}}</h3>
    <RouterLink to="/" class="goods-item"  v-for="good in hotList" :key="good.id">
      <img :src="good.picture" alt="xxxx">
      <p class="good-name ellipsis">{{good.name}}</p>
      <p class="good-desc ellipsis">{{good.desc}}</p>
      <p class="good-price">&yen;{{good.price}}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  margin-bottom: 50px;
  h3 {
    background: $helpColor;
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    color: #fff;
    padding-left: 20px;
    font-weight: normal;
    margin-bottom: 10px;
  }
  .goods-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    padding: 20px 30px;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
      width: 100%;
      text-align: center;
    }
    .good-name {
      font-size: 16px;
    }
    .good-desc {
      font-size: 14px;
      color: #999;
      height: 29px;
    }
    .good-price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>
