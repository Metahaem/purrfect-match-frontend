class API {
  static login(user) {
    return fetch('http://localhost:3000/api/v1/users/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    }).then(res => res.json())
  }

  static validate() {
    return fetch ('http://localhost:3000/api/v1/validate', {
      headers: { 
        'content-type': 'application/json', 
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => res.json())
  }

  static getLikes () {
   return fetch ('http://localhost:3000/api/v1/likes', {
      headers: { 
        'content-type': 'application/json', 
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => res.json())
  }

  static getAdopterID () {
    return fetch ('http://localhost:3000/api/v1/adopter', {
      headers: { 
        'content-type': 'application/json', 
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => res.json())
  }

}


export default API

