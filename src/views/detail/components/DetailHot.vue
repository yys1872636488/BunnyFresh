<script setup lang="ts">
import {getDetailHotApi} from "@/apis/detail.ts";
import type {resultItem} from "@/types/detailHot.ts"
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const props = withDefaults(defineProps<{
  hotType?: number
}>(),{
  hotType: 1
})

const TITLEMAP: Record<number, string> = {
  1: '24小时热榜',
  2: '周热榜',
}

const title = computed(() => {
  return TITLEMAP[props.hotType]
})

const route = useRoute()
const hotList = ref<resultItem[]>([])
const getDetailHot = async () => {
  const res = await getDetailHotApi({
    id: String(route.params.id),
    type: props.hotType,
  })
  hotList.value = res.data.result
}
onMounted(() => {getDetailHot()})
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
