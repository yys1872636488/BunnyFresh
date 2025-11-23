
export interface NewGoods {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount: null
  orderNum: number
}

export interface NewResponse {
  code: string
  msg: string
  result: NewGoods[]
}
