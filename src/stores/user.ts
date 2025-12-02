import {defineStore} from 'pinia'
import {ref} from 'vue'
import type {userInfoResponse} from "@/types/user.ts";
import {getUserApi} from "@/apis/user.ts";

export const useUserStore = defineStore('user', () => {
  //state
  const userInfo = ref<userInfoResponse | null>(null)

  //action
  const getUserInfo = async ({account, password}:{account:string,password:string}) => {
    const res = await getUserApi({account, password})
    userInfo.value =  res.data.result
  }
  return {userInfo, getUserInfo}
},
{
  persist: true
}
)