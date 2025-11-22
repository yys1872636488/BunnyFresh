<script setup lang="ts">
import { getCategoryName } from '@/apis/getCategoryName'
import { onMounted, ref } from 'vue'
import type { CategoryItem } from '@/types/category'

// 👇这里是关键，给 ref 指定类型
const categoryList = ref<CategoryItem[]>([])

const getCategory = async () => {
  const res = await getCategoryName()
  // 因为你在 api 里传了泛型 CategoryResponse
  // 所以 request 返回的 data 已经有类型了
  categoryList.value = res.data.result
}

onMounted(() => {
  getCategory()
})
</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li v-for="item in categoryList" :key="item.id">
          <RouterLink to="/">{{ item.name }}</RouterLink>
        </li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- <div>头部购物车</div> -->
    </div>
  </header>
</template>

<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;

    .logo {
      width: 200px;

      a {
        display: block;
        height: 132px;
        width: 100%;
        text-indent: -9999px;
        background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
      }
    }

    .app-header-nav {
      width: 820px;
      padding-left: 40px;
      position: relative;
      display: flex;
      z-index: 998;

      li {
        margin-right: 40px;
        width: 38px;
        text-align: center;

        a {
          font-size: 16px;
          line-height: 32px;
          height: 32px;
          display: inline-block;
        }

        &:hover a{
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }

      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .search {
      width: 170px;
      height: 32px;
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      line-height: 32px;

      .icon-search {
        font-size: 18px;
        margin-left: 5px;
      }

      input {
        width: 140px;
        padding-left: 5px;
        color: #666;
      }
    }

    .cart {
      width: 50px;

      .curr {
        height: 32px;
        line-height: 32px;
        text-align: center;
        position: relative;
        display: block;

        .icon-cart {
          font-size: 22px;
        }

        em {
          font-style: normal;
          position: absolute;
          right: 0;
          top: 0;
          padding: 1px 6px;
          line-height: 1;
          background: $helpColor;
          color: #fff;
          font-size: 12px;
          border-radius: 10px;
          font-family: Arial;
        }
      }
    }
  }
}
  </style>
