import request from '@/utils/request'
// /app/rest/models?filter=processes&modelType=0&sort=modifiedDesc
// 获取所有的模型
export function modelList() {
  const data = {
  }
  return request({
    url: 'flowable-modeler/app/rest/models',
    method: 'get',
    data
  })
}
// 保存单个表单模型
export function saveFormList(formdata) {
  const data = formdata
  return request({
    url: 'form/save',
    method: 'post',
    data
  })
}
// 获取（读取）单个表单模型
export function getFormList(id) {
  const data = id
  return request({
    url: 'form/get',
    method: 'get',
    data
  })
}

// export function logout() {
//   return request({
//     url: '/login/logout',
//     method: 'post'
//   })
// }
//
// export function getUserInfo(token) {
//   return request({
//     url: '/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

