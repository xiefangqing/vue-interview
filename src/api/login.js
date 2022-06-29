import request from '@/utils/request'

// 登录
export  function login(data) {
  return request.post({
    url: '/api/user/login',
    data
  })
}
