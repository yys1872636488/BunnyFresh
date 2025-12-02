import httpInstance from "@/utils/http"
import type { UserResponse } from '@/types/user'
export function getUserApi({account, password}: {account: string; password: string}) {
  return httpInstance<UserResponse>({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}
