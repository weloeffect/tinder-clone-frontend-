import axios from "axios"

const instance = axios.create({
    baseURL: 'https://tinder-back101.herokuapp.com/',
})
export default instance;