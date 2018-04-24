import { SETPROFILE, SETID, ADDEVENT, USERLIST, SEVEREVENTS, USERSPHOTOS } from '../actions/actionTypes'

const initialState = {
    profile: null,
    id: null,
    userspicture: [],
    items: [],
    event: [],
    userlist: []
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
        case ADDEVENT:
            return {
                ...state,
                event: state.event.concat([action.info])
                //event: [...state.event, action.info]
            };
        case USERLIST:
            return {
                ...state,
                userlist: state.userlist.concat([action.inital])
            };
        case SEVEREVENTS:
            return {
                ...state,
                items: state.items.concat(action.item)
            }
        case USERSPHOTOS:
            return {
                ...state,
                userspicture: state.userspicture.concat(action.photo)
            }
        default:
            return state
    }
};

export default reducer