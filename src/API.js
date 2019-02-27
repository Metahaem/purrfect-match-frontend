class API {
  static login (name) {
    return fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(name)
    }).then(resp => resp.json())
  }
}

export default API
