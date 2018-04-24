import { SETPROFILE, SETID } from './actionTypes'

export const setprofile = (profile) => {
    return{
    type: SETPROFILE,
    profile
    }
}
export const setid = (id) => {
    return{
    type: SETID,
    id
    }
}
