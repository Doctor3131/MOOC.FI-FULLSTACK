import axios from 'axios'
const baseUrl = 'http://localhost:3002/notes'

const getAll = () => {
    // return axios.get(baseUrl)
    const request = axios.get(baseUrl)
    const nonExisting = {
        id: 1000,
        content: 'This note is not saved to server',
        important: true,
    }
    return request.then(response => response.data.concat(nonExisting))
}

const create = newObject => {
    // return axios.post(baseUrl, newObject)
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    // return axios.put(`${baseUrl}/${id}`, newObject)
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default { getAll, create, update }