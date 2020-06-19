import axios from 'axios';

const url = 'http://localhost:3000/'

class api {
  static createRol(data) {
    return axios.post(`${url}rol/`, {
      name: data
    })
  }

  //----For user
  static createUser(data) {
    return axios.post(`${url}user/signup`,{
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    })
  }

  static loginUser(data) {
    return axios.post(`${url}user/login`,{
      email: data.email,
      password: data.password
    })
  }
}

export default api