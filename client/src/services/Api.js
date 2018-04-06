import axios from 'axios'

export default () => {
    return axios.create({
        // point to backend API, URL of server
        baseURL: 'http://localhost:8081/'
    })
}