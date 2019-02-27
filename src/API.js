class API {
  static login(user) {
    return fetch('http://localhost:3000/api/v1/users/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    }).then(res => res.json())
  }
}

export default API

