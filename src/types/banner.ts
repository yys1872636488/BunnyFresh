export interface BannerImg {
  id: string
  imgUrl: string
  hrefUrl: string
  type: string

}

export interface BannerResponse {
  code: string
  msg: string
  result: BannerImg[]
}
