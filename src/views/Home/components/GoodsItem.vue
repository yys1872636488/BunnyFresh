<script setup lang="ts">
import type {Goods} from "@/types/product.ts";

defineProps<{
  good: Goods
}>()
</script>

<template>
  <RouterLink class="goods-item" to="/">
    <img v-img-lazy="good.picture" alt=""/>
    <p class="name ellipsis">{{ good.name }}</p>
    <p class="desc ellipsis">{{ good.desc }}</p>
    <p class="price">&yen;{{ good.price }}</p>
  </RouterLink>
</template>

<style scoped lang="scss">
.goods-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all .5s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 160px;
    height: 160px;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
    width: 100%;
  }

  .desc {
    color: #999;
    width: 100%;
  }

  .price {
    color: $priceColor;
    font-size: 20px;
  }
}
</style>
