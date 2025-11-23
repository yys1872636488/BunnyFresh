import httpInstance from "@/utils/http.ts";
import type {NewResponse} from "@/types/new.ts";
import type {HotResponse} from "@/types/hot.ts";
import type {BannerResponse} from "@/types/banner.ts";

export function getNewApi(){
  return httpInstance<NewResponse>({
    url: '/home/new'
  })
}


export function getHotApi(){
  return httpInstance<HotResponse>({
    url: '/home/hot'
  })
}


export function getBannerApi(){
  return httpInstance<BannerResponse>({
    url: '/home/banner'
  })
}
