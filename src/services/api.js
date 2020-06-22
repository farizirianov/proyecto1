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
}

export default api