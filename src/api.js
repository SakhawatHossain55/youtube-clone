import axios from 'axios'
const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key:"AIzaSyDIkOj2uGY76G4YJVs_D-jGfFyAcJjQvyE"
    }
})

export default request;


// key:"AIzaSyCLNumRZBsxthv_r8gVfP1lsxIJnUAJtq8"