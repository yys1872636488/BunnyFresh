import {getDetailHotApi} from "@/apis/detail.ts";
import type {resultItem} from "@/types/detailHot.ts"
import {computed, onMounted, ref} from "vue";

export const useDetailHot = (id:string,type:number) => {
  const TITLEMAP: Record<number, string> = {
    1: '24小时热榜',
    2: '周热榜',
  }

  const title = computed(() => {
    return TITLEMAP[type]
  })

  const hotList = ref<resultItem[]>([])
  const getDetailHot = async () => {
    const res = await getDetailHotApi({
      id: id,
      type: type,
    })
    hotList.value = res.data.result
  }
  onMounted(() => {getDetailHot()})
  return {
    title,
    hotList,
  }
}
