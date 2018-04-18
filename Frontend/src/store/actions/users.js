import { SETEPROFILE, SETID } from './actionTypes'

export const setprofile = (profile) => {
    return{
    type: SETEPROFILE,
    profile
    }
}
export const setid = (id) => {
    return{
    type: SETID,
    id
    }
}
