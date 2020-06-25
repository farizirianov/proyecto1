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

  //----For post
  static getPostById(id) {
    return axios.get(`post/${id}`)
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
  static getUserLike(idUser) {
    return axios.get(`like/user/${idUser}`)
  }
  static getAllLikeByPost(idPost) {
    return axios.get(`like/post/${idPost}`)
  }

}

export default api