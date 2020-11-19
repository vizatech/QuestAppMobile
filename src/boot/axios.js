import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://31.131.22.107:3000', //http://localhost:3000
    withCredentials: true
})

Vue.prototype.$axios = axiosInstance

export { axiosInstance }
