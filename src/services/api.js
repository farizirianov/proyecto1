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

  static getUser(idU) {
    return axios.get(`user/${idU}`)
  }

  static updateUser(idU, data) {
    return axios.put(`user/${idU}`,{
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      image: data.image,
      sex: data.sex,
      description: data.description
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
  static createComment(data, idU, idP) {
    return axios.post('comment/', {
      content: data.content,
      idUser: idU,
      idPost: idP
    })
  }
  static getAllCommentByPost(idPost) {
    return axios.get(`comment/post/${idPost}`)
  }
  static deleteComment(id) {
    return axios.delete(`comment/${id}`)
  }
  static updateComment(id) {
    return axios.put(`comment/${id}`)
  }
  //----For Likes
  static createLike(idU, idP) {
    return axios.post(`like/`, {
      idUser: idU,
      idPost: idP
    })
  }

  static updateLike(id, sts) {
    return axios.put(`like/${id}`,{
      status: sts
    })
  }

  static deleteLike(id) {
    return axios.delete(`like/${id}`)
  }
  static getUserLike(idUser,idPost) {
    return axios.get(`like/user/${idUser}/${idPost}`)
  }
  static getAllLikeByPost(idPost) {
    return axios.get(`like/post/${idPost}`)
  }

  //----For Insignias
  static asignInsignias(idU, idI, data) {
    return axios.post('insignia/user/',{
      idInsignia: idI,
      idUser: idU,
      group: data
    })
  }
  static updateListInsignias(idU, valG, valP) {
    return axios.put(`insignia/user/${idU}`, {
      group: valG,
      progres: valP
    })
  }
  static getAllInsignias() {
    return axios.get('insignia/')
  }
  static getAllInsigniasByUser(idU) {
    return axios.get(`insignia/user/${idU}`)
  }
}

export default api