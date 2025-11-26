import {getSubCategoryAPI} from '@/apis/category'
import {onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import type {reqData, resultItem as resultItemSubGoods} from "@/types/subGoods.ts";

export const useSubGood = () => {
  const loading = ref(false)
  const noMore = ref(false)
  const route = useRoute()
  const req = ref<reqData>({
    categoryId: String(route.params.id),
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
  })
  const goodList = ref<resultItemSubGoods | null>(null)
  const getSubCategory = async () => {
    if (loading.value || noMore.value) {return}
    loading.value = true
    const res = await getSubCategoryAPI(req.value)
    const result = res.data.result

    if (!goodList.value || req.value.page === 1) {
      goodList.value = result
    } else {
      goodList.value.items.push(...result.items)
    }
  //   判断是否还有分页
    if (req.value.page >= result.pages) {
      noMore.value = true
    }

    loading.value = false
  }

  const loadMore = () => {
    if (noMore.value) return
    req.value.page++
    getSubCategory()
  }


  onMounted(() => {
    getSubCategory()
  })

  const tabChange = () => {
    req.value.page = 1
    noMore.value = false
    getSubCategory()
  }

  const pageChange = (page: number) => {
    req.value.page = page
    getSubCategory()
  }


  return {
    goodList,
    req,
    tabChange,
    pageChange,
    loadMore,
    loading,
    noMore
  }
}
