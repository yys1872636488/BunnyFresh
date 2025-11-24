import {onMounted, ref} from "vue";
import type {HotGoods} from "@/types/hot.ts";
import {getHotApi} from "@/apis/home.ts";

export const useHot = () => {
  const hotGoods = ref<HotGoods[]>([])
  const getHot = async ()=>{
    const res = await getHotApi()
    hotGoods.value = res.data.result
  }

  onMounted(() => {getHot()})
  return {
    hotGoods
  }
}
