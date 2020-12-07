import request from '@/utils/request'

export function get(tableName) {
  return request({
    url: 'generator/genConfig/' + tableName,
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: 'generator/genConfig',
    data,
    method: 'put'
  })
}
