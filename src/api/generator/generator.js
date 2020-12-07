import request from '@/utils/request'

export function getAllTable() {
  return request({
    url: 'generator/generator/tables/all',
    method: 'get'
  })
}

export function generator(tableName, type) {
  return request({
    url: 'generator/generator/' + tableName + '/' + type,
    method: 'post',
    responseType: type === 2 ? 'blob' : ''
  })
}

export function save(data) {
  return request({
    url: 'generator/generator',
    data,
    method: 'put'
  })
}

export function sync(tables) {
  return request({
    url: 'generator/generator/sync',
    method: 'post',
    data: tables
  })
}

