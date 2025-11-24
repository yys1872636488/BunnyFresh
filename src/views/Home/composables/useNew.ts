import {onMounted, ref} from "vue";
import type {NewGoods} from "@/types/new.ts";
import {getNewApi} from "@/apis/home.ts";


export const useNew = () => {
  const newGoods = ref<NewGoods[]>([])
  const getNews = async () => {
    const res = await getNewApi()
    newGoods.value = res.data.result
  }

  onMounted(() => {
    getNews()
  })
  return {
    newGoods
  }
}
