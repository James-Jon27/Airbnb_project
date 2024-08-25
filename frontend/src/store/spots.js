import { csrfFetch } from "./csrf";

const initialState = {}
const LOAD = "spots/LOAD"


const load = (spots) => {
    return {
        type: LOAD,
        payload: spots
    }
}

export const getSpot = () => async (dispatch) => {
    const res = await csrfFetch(`/api/spots`);
    if(res.ok) {
        const data = await res.json();
        dispatch(load(data.Spots))
        return data.Spots;
    }
}


export default function spotsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD : {
            const allSpots = {};
            action.payload.forEach((spot) => [
                allSpots[spot.id] = spot
            ])

            return {
                ...allSpots,
                ...state
            }
        }

        default: 
        return state;
    }
}