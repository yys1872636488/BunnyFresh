import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import type {GoodsDetail} from "@/types/detailPage.ts";
import {getDetailApi} from "@/apis/detail.ts";


export const useDetail = () => {
  const route = useRoute();
  const goods = ref<GoodsDetail | null>(null);
  const getDetail = async () => {
    const res = await getDetailApi(String(route.params.id));
    goods.value = res.data.result;
  }
  onMounted(() => {
    getDetail()
  })
  return {
    goods
  }
}
