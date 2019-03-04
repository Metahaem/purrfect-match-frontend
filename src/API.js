const baseURL = 'http://localhost:3000/api/v1'
const petsUrl = 'http://localhost:3000/api/v1/pets'

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

  static getPets() {
    return fetch ('http://localhost:3000/api/v1/pets', {
      method: 'GET',
      headers: { 
          'content-type': 'application/json', 
          'Authorization': localStorage.getItem('token')
      }})
  .then(res => res.json())
  }

  static getLikes () {
   return fetch ('http://localhost:3000/api/v1/likes', {
      headers: { 
        'content-type': 'application/json', 
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => res.json())
  }

  static createLike = (state) => {
    return fetch(baseURL + '/likes/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        pet_id: state.currentPet.id,
        adopter_id: state.adopterID
      })
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

