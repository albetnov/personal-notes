import ServerResponse from './ServerResponse'

const BASE_URL = 'https://notes-api.dicoding.dev/v1'

function getAccessToken () {
  return localStorage.getItem('accessToken')
}

function putAccessToken (accessToken) {
  return localStorage.setItem('accessToken', accessToken)
}

async function fetchWithToken (url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`
    }
  })
}

async function login ({ email, password }) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
      alert(responseJson.message)
      throw new ServerResponse(responseJson.message)
    }

    return { error: false, data: responseJson.data }
  } catch (err) {
    if (err instanceof ServerResponse) {
      return { error: true, data: err.message }
    }
    return { error: true, data: null }
  }
}

async function register ({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    alert(responseJson.message)
    return { error: true }
  }

  return { error: false }
}

async function getUserLogged () {
  try {
    const response = await fetchWithToken(`${BASE_URL}/users/me`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
      throw new Error()
    }

    return { error: false, data: responseJson.data }
  } catch (err) {
    return { error: true, data: null }
  }
}

async function addNote ({ title, body }) {
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body })
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
      throw new Error()
    }
    return { error: false, data: responseJson.data }
  } catch (err) {
    return { error: true, data: null }
  }
}

async function getActiveNotes () {
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
      throw new Error()
    }

    return { error: false, data: responseJson.data }
  } catch (err) {
    return { error: true, data: null }
  }
}

async function getArchivedNotes () {
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes/archived`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
      throw new Error()
    }

    return { error: false, data: responseJson.data }
  } catch (err) {
    return { error: true, data: null }
  }
}

async function getNote (id) {
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
      throw new Error()
    }

    return { error: false, data: responseJson.data }
  } catch (err) {
    return { error: true, data: null }
  }
}

async function archiveNote (id) {
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
      method: 'POST'
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
      throw new Error()
    }

    return { error: false, data: responseJson.data }
  } catch (err) {
    return { error: true, data: null }
  }
}

async function unarchiveNote (id) {
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
      method: 'POST'
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
      throw new Error()
    }

    return { error: false, data: responseJson.data }
  } catch (err) {
    return { error: true, data: null }
  }
}

async function deleteNote (id) {
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
      method: 'DELETE'
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
      throw new Error()
    }

    return { error: false, data: responseJson.data }
  } catch (err) {
    return { error: true, data: null }
  }
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  addNote,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote
}
