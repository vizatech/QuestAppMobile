import Vue from 'vue'
/*
export function someMutation (state) {
}
*/

export const ADD_QUEST = (state, payload) => {
    console.log(`ADDED_QUEST:`)
    console.dir(payload)
    state.loadedQuests.push(payload)
    console.dir(state.loadedQuests)
}

export const CLEAR_QUESTS = state => {
    state.loadedQuests = []
}

export const SET_SELECTED_QUEST = (state, payload) => {
    state.selectedQuest = payload
}
export const CLEAR_SELECTED_QUEST = (state) => {
    state.selectedQuest = null
}

export const SET_CONTINUED_QUEST = (state, payload) => {
    state.continuedQuest = {
        id: payload.id,
        step: payload.step
    }
}
export const CLEAR_CONTINUED_QUEST = (state) => {
    state.continuedQuest = null
}

/* --------- */

export const QUEST_POINT_COMPLITED = (state) => {
    state.loadedQuests[state.continuedQuest.id].points[state.continuedQuest.step] = {
        ...state.loadedQuests[state.continuedQuest.id].points[state.continuedQuest.step++],
        p_locked: false
    }
    //state.loadedQuests[state.continuedQuest.id].points[state.continuedQuest.step++].p_locked = false
}