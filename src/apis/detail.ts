import httpInstance from "@/utils/http.ts";
import type {GoodsDetailResponse} from "@/types/detailPage.ts";
import type {rootType as detailHotRootType,reqDetailHot} from "@/types/detailHot.ts";

export function getDetailApi(id: string){
  return httpInstance<GoodsDetailResponse>({
    url: '/goods',
    params: {
      id
    }
  })
}
export function getDetailHotApi({id,type,limit=3}:reqDetailHot){
  return httpInstance<detailHotRootType>({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
