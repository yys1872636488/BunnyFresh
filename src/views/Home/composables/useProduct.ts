import {onMounted, ref} from "vue";
import type {CategoryGoods} from "@/types/product.ts";
import {getGoodsApi} from "@/apis/home.ts";

export const useProduct = () => {
  const goodsList = ref<CategoryGoods[]>([])
  const getGoods = async () => {
    const res = await getGoodsApi()
    goodsList.value = res.data.result
  }

  onMounted(() => {
    getGoods()
  })
  return {
    goodsList
  }
}
