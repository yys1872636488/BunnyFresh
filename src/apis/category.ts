import httpInstance from "@/utils/http.ts";
import type {CategoryDetailResponse} from "@/types/topCategory.ts";

export const getTopCategoryApi = (id:string)=>{
  return httpInstance<CategoryDetailResponse>({
    url: '/category',
    params: {
      id
    }
  })
}
