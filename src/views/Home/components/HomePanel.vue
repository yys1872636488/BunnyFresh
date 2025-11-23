<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  subTitle:{
    type: String,
    default: ''
}
})
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
<!--  主题与副标题-->
        <h3>
          {{title}}<small>{{ subTitle }}</small>
        </h3>
<!--        主题内容区域-->
        <div>
          <slot name="main"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    //display: flex;
    align-items: flex-end;
    h3 {
      //flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        margin-left: 20px;
        font-size: 16px;
        color: #999;
      }
    }
  }
}
</style>
