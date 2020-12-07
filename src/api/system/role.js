import request from '@/utils/request'

// 获取所有的Role
export function getAll() {
  return request({
    url: 'system/role/all',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: 'system/role',
    method: 'post',
    data
  })
}

export function get(id) {
  return request({
    url: 'system/role/' + id,
    method: 'get'
  })
}

export function getLevel() {
  return request({
    url: 'system/role/level',
    method: 'get'
  })
}

export function del(ids) {
  return request({
    url: 'system/role',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'system/role',
    method: 'put',
    data
  })
}

export function editMenu(data) {
  return request({
    url: 'system/role/menu',
    method: 'put',
    data
  })
}

export default { add, edit, del, get, editMenu, getLevel }
