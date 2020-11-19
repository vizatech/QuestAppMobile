/*
export function someAction (context) {
}
*/

import { axiosInstance } from "../../boot/axios"

export const initAllListLoad = async ({state, commit}) => {
    console.log('STARTED QUESTS LOADING...')
    commit('CLEAR_QUESTS')
    axiosInstance
        .get('/quest/getListAll')
            .then(response => {
                console.log(response.data)
                response.data.forEach((quest, index) => {
                    console.dir(quest)
                    commit('ADD_QUEST', quest)
                })
            })
            .catch(error => console.log(error))
}