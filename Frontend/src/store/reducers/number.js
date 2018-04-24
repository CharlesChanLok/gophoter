import { SETPROFILE, SETID } from '../actions/actionTypes'

const initialState = {
    profile: null,
    id: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SETPROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SETID:
            return {
                ...state,
                id: action.id
        }
        default:
            return state
    }
};

export default reducer