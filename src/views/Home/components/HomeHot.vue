<script setup lang="ts">
import HomePanel from './HomePanel.vue'
import {useProduct} from "@/views/Home/composables/useProduct.ts";

const {hotGoods} = useProduct()
</script>

<template>
  <div class="Home-hot">
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
      <template #main>
        <ul class="goods-list">
          <li v-for="item in hotGoods" :key="item.id">
            <RouterLink to="/">
              <img v-img-lazy="item.picture" alt="" />
              <p class="name">{{item.title}}</p>
              <p class="desc">{{item.alt}}</p>
            </RouterLink>
          </li>
        </ul>
      </template>
    </HomePanel>
  </div>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-around;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%)
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      font-size: 16px;
      color: #999;
    }
  }
}
</style>
