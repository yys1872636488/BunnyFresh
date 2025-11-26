import httpInstance from "@/utils/http.ts";
import type {CategoryDetailResponse} from "@/types/topCategory.ts";
import type { rootType as SubCategoryRoot } from "@/types/subCategoty"
import type {reqData, rootType as SubGoodsRoot} from "@/types/subGoods"

export const getTopCategoryApi = (id:string)=>{
  return httpInstance<CategoryDetailResponse>({
    url: '/category',
    params: {
      id
    }
  })
}

export const getCategoryFilterAPI = (id: string) => {
  return httpInstance<SubCategoryRoot>({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}

export const getSubCategoryAPI = (data:reqData) => {
  return httpInstance<SubGoodsRoot>({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}
