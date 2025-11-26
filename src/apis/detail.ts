import httpInstance from "@/utils/http.ts";
import type {GoodsDetailResponse} from "@/types/detailPage.ts";

export function getDetailApi(id: string){
  return httpInstance<GoodsDetailResponse>({
    url: '/goods',
    params: {
      id
    }
  })
}
