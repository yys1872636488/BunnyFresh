// src/types/category.ts

/** 分类商品 */
export interface CategoryGoods {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount: string | null
  orderNum: string | null
}

/** 二级分类 */
export interface CategoryChildren {
  id: string
  name: string
  picture: string
  children: null
  goods: null
}

/** 一级分类 */
export interface CategoryItem {
  id: string
  name: string
  picture: string
  children: CategoryChildren[] | null
  goods: CategoryGoods[] | null
}

/** 接口返回结构 */
export interface CategoryResponse {
  code: string
  msg: string
  result: CategoryItem[]
}
