export interface UserResponse {
  code: string;
  msg: string;
  result: userInfoResponse;
}

export interface userInfoResponse {
  id: string;
  account: string;
  mobile: string;
  token: string;
  avatar: string;
  nickname: string;
  gender: string;
  birthday: string;
  cityCode: string;
  provinceCode: string;
  profession: string;
}

export interface UserErrorResponse {
  message: string;
  code: string;
}