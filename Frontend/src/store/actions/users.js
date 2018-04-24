import { SETPROFILE, SETID, ADDEVENT, SEVEREVENTS, USERLIST, USERSPHOTOS } from './actionTypes'

export const setprofile = (profile) => {
    return {
        type: SETPROFILE,
        profile
    }
}
export const setid = (id) => {
    return {
        type: SETID,
        id
    }
}
export const addevent = (info) => {
    return {
        type: ADDEVENT,
        info
    }
}
export const serverevent = (item) => {
    return {
        type: SEVEREVENTS,
        item
    }
}
export const userlist = (initial) => {
    return {
        type: USERLIST,
        inital
    }
}
export const userphotos = (photo) => {
    return {
        type: USERSPHOTOS,
        photo
    }
}
