import { SETNAME, SETEMAIL, SETID, PIC } from '../actions/actionTypes'

const initialState = {
    name: null,
    email: null,
    id: null,
    url: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SETNAME:
            return {
                ...state,
                name: action.name
            }
        case SETEMAIL:
                return {
                    ...state,
                    email: action.email
                }
        case SETID:
            return {
                ...state,
                id: action.id
        }
        case PIC:
        return {
            ...state,
            url: action.url
        }
        default:
            return state
    }
};

export default reducer