/*
export function someAction (context) {
}
*/
import { axiosInstance } from "../../boot/axios"


export const setCurrentPos = async ({state, commit}, payload) => {
    return new Promise((resolve, reject) => {
        
        
        /*axiosInstance
        .post('/object/insert', payload)
            .then(response => {
                console.log(response)
                resolve(response)
            })
            .catch(error => {
                console.log(error)
                reject(error)
            })*/
    })
}

export const getDistance = async ({state, commit}, payload) => {
    return new Promise((resolve, reject) => {
        axiosInstance
        .post('/geo/getDistance', payload)
            .then(response => {
                console.log(response)
                resolve(response)
            })
            .catch(error => {
                console.log(error)
                reject(error)
            })
    })
}