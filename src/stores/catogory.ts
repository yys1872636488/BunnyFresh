import { ref } from 'vue'
import { defineStore } from 'pinia'
import type {CategoryItem} from "@/types/category.ts";
import {getCategoryApi} from "@/apis/layout.ts";

export const useCategoryStore = defineStore('category', () => {
//state
  const categoryList = ref<CategoryItem[]>([])
//action
  const getCategory = async () => {
    const res = await getCategoryApi()
    categoryList.value = res.data.result
  }

  return { categoryList, getCategory}
})
