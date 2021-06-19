import axios from 'axios'
const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key:"AIzaSyCLNumRZBsxthv_r8gVfP1lsxIJnUAJtq8"
    }
})

export default request;