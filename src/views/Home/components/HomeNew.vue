<script setup lang="ts">
import HomePanel from './HomePanel.vue'
import {useNew} from "@/views/Home/composables/useNew.ts";

const {newGoods} = useNew()
</script>

<template>
  <div class="Home-new">
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #main>
        <ul class="goods-list">
          <li v-for="item in newGoods" :key="item.id">
            <RouterLink to="/">
              <img v-img-lazy="item.picture" alt=""/>
              <p class="name">{{item.name}}</p>
              <p class="price"><i>¥</i>{{item.price}}</p>
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
    background: #f0f9f4;
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .price {
      color: $priceColor;

      i {
        font-size: 25px;
      }
    }
  }
}
</style>
