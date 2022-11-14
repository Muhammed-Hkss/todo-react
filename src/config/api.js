import axios from "axios"


export const BASE_URL = 'https://todo-itacademy.herokuapp.com/api/'

const instance = axios.create({baseURL: BASE_URL})

export default instance
