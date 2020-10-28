import { request } from "../plugins/request"

// 获取文章评论
const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

const addComment = ({ slug, comment}) => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data: {
      comment
    }
  })
}

// authentication required
const deleteComment = (slug) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  })
}

export {
  getComments,
  addComment,
  deleteComment
}
