import axios from 'axios'
const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        // key:"AIzaSyCLNumRZBsxthv_r8gVfP1lsxIJnUAJtq8"
        key:"AIzaSyDIkOj2uGY76G4YJVs_D-jGfFyAcJjQvyE"
        // key:"AIzaSyC46Q_beJuI8zRRt3uup8WUJqMXgX8TcGI"
    }
})

export default request;

