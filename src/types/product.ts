/**
 * 单个商品类型
 */
export interface Goods {
  id: string
  name: string
  desc: string
  price: string
  picture: string
}

/**
 * 子分类（第二级分类）
 */
export interface CategoryChild {
  id: string
  name: string
  layer: number
  parent: string | null
}

/**
 * 主分类（包含子分类 + 商品）
 */
export interface CategoryGoods {
  id: string
  name: string
  picture: string
  saleInfo: string

  // 二级分类
  children: CategoryChild[]

  // 当前分类对应的商品
  goods: Goods[]
}

/**
 * 整个接口返回的结构
 */
export interface GoodsResponse {
  code: string
  msg: string
  result: CategoryGoods[]
}
