<script setup lang="ts">
// 暂时先空着，后面写逻辑
</script>

<template>
  <!-- 模板结构写这里 -->
  <nav class="app-topnav">
    <div class="t=container">
      <ul>
        <!-- 已登录 -->
        <template v-if="false">
          <li><a href="#"><i class="iconfont icon-user"></i>周杰伦</a></li>
          <li>
          <!-- element-plue标签，用于 -->
          <el-popconfirm title="确认退出吗？" confirm-button-text="确认" cancel-button-text="取消">
            <template #reference>
              <a href="#">退出登录</a>
            </template>
          </el-popconfirm>
          </li>
          <li><a href="#">我的订单</a></li>
          <li><a href="#">会员中心</a></li>
        </template>
        <!-- 未登录 -->
        <template v-else>
          <li><a href="#" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
/* 样式写这里 */
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;//控制主轴对齐：横向
    align-items: center;//控制交叉轴对齐：纵向
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;//行高为一倍字体大小
        display: inline-block;//设置为行内块元素，让 <a> 既可以设置宽高，又不会自动换行一整行
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: $xtxColor;
        }
      }
      & + li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
