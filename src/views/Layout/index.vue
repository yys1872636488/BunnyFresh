<script setup lang="ts">
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutFixed from './components/LayoutFixed.vue';
import {useCategoryStore} from '@/stores/catogory.ts'
import {onMounted} from "vue";
const useCategory = useCategoryStore()

onMounted(() => {
  useCategory.getCategory()
})
</script>

<template>
  <div>
    <LayoutFixed/>
    <LayoutNav/>
    <LayoutHeader/>
    <RouterView/>
    <LayoutFooter/>
  </div>
</template>
