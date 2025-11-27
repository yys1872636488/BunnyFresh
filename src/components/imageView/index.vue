<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{
  imageList: string[] | undefined;
}>()


const activeIndex = ref(0)
const enderHander = (i:number) => {
  activeIndex.value = i;
}
</script>

<template>
  <div class="goods-image">
<!--    左侧大图-->
    <div class="middle" ref="target">
      <img :src="props.imageList?.[activeIndex]" alt="">
      <!-- 蒙层小滑块 -->
<!--      <div class="layer" :style="{ left: `0px`, top: `0px` }"></div>-->
    </div>
<!--    小图标列表-->
    <ul class="small">
      <li v-for="(item,i) in imageList" :key="i" @mouseenter="enderHander(i)" :class="{active: i === activeIndex}">
        <img :src="item" alt="">
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  display: flex;
  width: 480px;
  height: 400px;
  position: relative;

  .middle {
    width: 400px;
    height: 400px;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>
