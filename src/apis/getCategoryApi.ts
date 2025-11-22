import httpInstance from "@/utils/http";
import type { CategoryResponse } from '@/types/category'
export function getCategoryApi(){
  return httpInstance<CategoryResponse>({
    url: '/home/category/head'
  })
}
