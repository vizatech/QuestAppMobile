/*
export function someMutation (state) {
}
*/

export const SET_CURRENT_POSITION = (state, payload) => {
    //console.log('SET_CURRENT_POSITION:')
    //console.dir(payload)
    state.currentPosition = {
        lat: payload.lat,
        long: payload.long
    }
}

export const SET_CURRENT_HEADING = (state, payload) => {
    //console.log('SET_CURRENT_HEADING:')
    //console.dir(payload)
    state.currentHeading = payload
}

export const SET_CURRENT_SPEED = (state, payload) => {
    //console.log('SET_CURRENT_SPEED:')
    //console.dir(payload)
    state.currentSpeed = payload
}