
import {getCategoryFilterAPI} from '@/apis/category'
import {onMounted, ref} from 'vue'
import { useRoute } from 'vue-router'
import type {resultItem as resultItemSubCategory} from "@/types/subCategoty.ts";

export const useSubCategory = () => {
  const route = useRoute()

  const filterData = ref<resultItemSubCategory>()
  const getFilterData = async () => {
    try {
      const res = await getCategoryFilterAPI(String(route.params.id))
      filterData.value = res.data.result
    } catch (error) {
      console.error('获取分类筛选数据失败：', error)
    }
  }

  onMounted(()=>getFilterData())
  return {
    filterData
  }

}
