import httpInstance from "@/utils/http";
import type { CategoryResponse } from '@/types/category'

export function getCategoryName(){
  return httpInstance<CategoryResponse>({
    url: '/home/category/head'
  })
}
