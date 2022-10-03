import request from "./request"

export const getTest = (params) => request('GET','/aabb', params)
// 微信一键登录
export const postSignIn = (params) => request('POST','/signin', params)
