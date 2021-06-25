import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
    key:"AIzaSyC46Q_beJuI8zRRt3uup8WUJqMXgX8TcGI"
   },
})

export default request


   // key:"AIzaSyCLNumRZBsxthv_r8gVfP1lsxIJnUAJtq8"
   // key:"AIzaSyDIkOj2uGY76G4YJVs_D-jGfFyAcJjQvyE"
   // key:"AIzaSyC46Q_beJuI8zRRt3uup8WUJqMXgX8TcGI"
