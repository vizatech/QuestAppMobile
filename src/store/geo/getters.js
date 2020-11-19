/*
export function someGetter (state) {
}
*/
export const currentPos = state => state.currentPosition
export const currentHeading = state => state.currentHeading
export const currentSpeed = state => state.currentSpeed

export const top_quests = state => state.top_quests

export const near_quests = state => state.near_quests

export const points = state => state.points

export const getPointsByQuestId = state => id => {
    return state.points.find(point => point.index  === id)
}

export const getPointByTitle = state => (quest_id, point_title) => {
    return true;
}