import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/"

class api {
  static createRol(data) {
    return axios.post('rol/', {
      name: data
    })
  }

  //----For user
  static createUser(data) {
    return axios.post('user/signup',{
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    })
  }

  static loginUser(data) {
    return axios.post('user/login',{
      email: data.email,
      password: data.password
    })
  }

  //----For Posts
  static createPost(data, id) {
    return axios.post('post/', {
      content: data.content,
      imagePost: data.imagePost,
      idUser: id
    })
  }
  static getPostById(id) {
    return axios.get(`post/${id}`)
  }
  static getAllPost() {
    return axios.get('post/')
  }
  //----For Comments
  static createComment() {}
  static getAllCommentByPost(idPost) {}
  static deleteComment(id) {
    return axios.delete('comment/id')
  }
  static updateComment(id) {
    return axios.put('comment/id')
  }
  //----For Likes
  static createLike(idU, idP) {
    return axios.post(`like/`, {
      idUser: idU,
      idPost: idP
    })
  }

  static deleteLike (id) {
    return axios.delete(`like/user/${id}`)
  }
  static getUserLike(idUser,idPost) {
    return axios.get(`like/user/${idUser}/${idPost}`)
  }
  static getAllLikeByPost(idPost) {
    return axios.get(`like/post/${idPost}`)
  }

}

export default api