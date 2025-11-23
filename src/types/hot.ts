
export interface HotGoods {
  id: string
  picture: string
  title: string
  alt: string
}

export interface HotResponse {
  code: string
  msg: string
  result: HotGoods[]
}
